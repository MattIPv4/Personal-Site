/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2023 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
 *
 *  This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *  This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *  You should have received a copy of the GNU General Public License
 *   along with this program. If not, please see
 *   <https://github.com/MattIPv4/Personal-Site/blob/master/LICENSE.md> or <http://www.gnu.org/licenses/>.
 */

// Node
const { join, dirname, relative } = require('node:path');
const { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } = require('node:fs');

// SCSS
const sass = require('sass');

// JS
const esbuild = require('esbuild');
const esbuildYaml = require('esbuild-plugin-yaml');

// HTML
const yaml = require('yaml');
const markdown = require('markdown-it');
const posthtml = require('posthtml');
const posthtmlExpressions = require('posthtml-expressions');
const posthtmInclude = require('posthtml-include');
const posthtmExtend = require('posthtml-extend');
const posthtmlStyleExpansion = require('posthtml-style-expansion');
const htmlMinifier = require('html-minifier');

const environment = process.env.SITE_ENV || 'web';

const getFilesInDir = dir => readdirSync(dir, { withFileTypes: true }).flatMap(file => file.isDirectory()
    ? getFilesInDir(join(dir, file.name))
    : join(dir, file.name));

const buildScss = async () => {
    // Get all the files in the directory recursively
    const files = getFilesInDir(join(__dirname, 'scss'))
        .filter(file => file.endsWith('.scss') && !file.split('/').slice(-1)[0].startsWith('_'));

    // Compile all the files
    const results = await Promise.all(files.map(file =>
        sass.compileAsync(file, { style: 'compressed', sourceMap: true, sourceMapIncludeSources: true })
            .then(res => ({ file, css: res.css, map: res.sourceMap }))));

    // Export the results
    for (const result of results) {
        // Ensure the dir exists
        const file = result.file.slice(join(__dirname, 'scss').length + 1);
        const dir = dirname(join(__dirname, 'build', 'css', file));
        if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

        // Write the CSS
        writeFileSync(
            join(__dirname, 'build', 'css', file.replace(/\.scss$/, '.css')),
            `${result.css}\n/*# sourceMappingURL=${file.split('/').slice(-1)[0].replace(/\.scss$/, '.css.map')} */`,
            { flag: 'w+' }
        );

        // Write the map
        result.map.sources = result.map.sources.map(source => source.replace(/^file:\/\//, '').slice(join(__dirname, 'scss').length + 1));
        writeFileSync(
            join(__dirname, 'build', 'css', file.replace(/\.scss$/, '.css.map')),
            JSON.stringify(result.map),
            { flag: 'w+' }
        );
    }
};

const buildJs = async () => {
    // Get all the files in the directory recursively
    const files = getFilesInDir(join(__dirname, 'js'))
        .filter(file => file.endsWith('.js') && !file.split('/').slice(-1)[0].startsWith('_'));

    // Bundle the files
    await esbuild.build({
        entryPoints: files,
        bundle: true,
        write: true,
        minify: true,
        sourcemap: true,
        outdir: join(__dirname, 'build', 'js'),
        outbase: join(__dirname, 'js'),
        plugins: [ esbuildYaml.yamlPlugin() ]
    });
};

const buildHtml = async () => {
    const md = markdown();
    const mdExtLinks = md => md.replace(/<a(.+?)>/g, '<a$1 target="_blank" rel="noopener">');
    const environmentFilter = item => environment === 'web' ? item.web ?? true : environment === 'print' ? item.print ?? true : true;

    // Load in the main config yaml
    const config = yaml.parse(readFileSync(join(__dirname, 'data', 'config.yaml'), 'utf8'));
    config.meta.description = config.meta.description.replace(/\s*[\r\n]\s*/g, ' ');
    config.meta.keywords = config.meta.keywords.join(', ');
    config.footer.subtitle = config.footer.subtitle.replace(/{{YEAR}}/g, new Date().getFullYear());
    for (const link of config.contact.links) {
        link.title = mdExtLinks(md.renderInline(link.title).replace(/<(\/?)em>/g, '<$1small>'));
    }
    for (const item of config.main) {
        for (const item2 of item.items) {
            item2.title = mdExtLinks(md.renderInline(item2.title));
        }
    }
    for (const item of config.rail) {
        item.content = mdExtLinks(md.render(item.content));
    }
    config.main = config.main.filter(environmentFilter);

    // Load in all the projects
    const projects = yaml.parse(readFileSync(join(__dirname, 'data', 'projects.yaml'), 'utf8')).filter(environmentFilter);
    for (const project of projects) {
        project.slug = project.title.toLowerCase()
            .replace(/[^a-z0-9-_]/g, '-')
            .replace(/-{2,}/g, '-')
            .replace(/(^-+|-+$)/g, '');
        project.headline = mdExtLinks(md.renderInline(project.headline));
        project.desc = mdExtLinks(md.render(project.desc));
    }

    // Load in playlists
    const playlists = yaml.parse(readFileSync(join(__dirname, 'data', 'playlists.yaml'), 'utf8'));

    // Get the source files
    const pages = join(__dirname, 'templates', 'pages');
    const files = environment === 'print'
        ? [ join(pages, 'index.html') ]
        : getFilesInDir(pages).filter(file => file.endsWith('.html'));

    for (const file of files) {
        // Get the source html
        const html = readFileSync(file, 'utf8');

        // Render it
        const rootCfg = { encoding: 'utf8', root: join(__dirname, 'templates') };
        const exprCfg = { locals: { environment, config, projects, playlists } };
        const rendered = await posthtml([
            posthtmInclude({ ...rootCfg }),
            posthtmExtend({ ...rootCfg, expressions: { ...exprCfg } }),
            posthtmlExpressions({ ...exprCfg }),
            environment === 'print' ? posthtmlStyleExpansion({ root: join(__dirname, 'build'), encoding: 'utf-8' }) : null
        ].filter(x => !!x)).process(html).then(result => result.html);

        // Minify it
        const minified = htmlMinifier.minify(rendered, {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            continueOnParseError: true,
            decodeEntities: true,
            includeAutoGeneratedTags: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true
        });

        // Write the file
        writeFileSync(
            join(__dirname, 'build', `${environment === 'print' ? 'print.html' : relative(pages, file)}`),
            environment === 'print' ? minified.replace(/^<!DOCTYPE html>\s*<html[^>]*>/, '<html>') : minified,
            { flag: 'w+' }
        );
    }
};

buildScss()
    .then(() => buildJs())
    .then(() => buildHtml())
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

