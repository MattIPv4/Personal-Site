/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2021 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

const { readFileSync, writeFileSync } = require('fs');
const { parse } = require('yaml');
const md = require('markdown-it')();

const environment = process.env.SITE_ENV || 'web';

const mdExtLinks = md => md.replace(/<a(.+?)>/g, '<a$1 target="_blank" rel="noopener">');
const environmentFilter = item => environment === 'web' ? (item.web ?? true) : (environment === 'print' ? (item.print ?? true) : true);

// Load in the main config yaml
const config = parse(readFileSync('config.yaml', 'utf8'));
config.meta.description = config.meta.description.replace(/\s*[\r\n]\s*/g, ' ');
config.meta.keywords = config.meta.keywords.join(', ');
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
const projects = parse(readFileSync('projects.yaml', 'utf8')).filter(environmentFilter);
for (const project of projects) {
    project.slug = project.title.toLowerCase()
        .replace(/^[a-z0-9-_]/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/(^-+|-+$)/g, '');
    project.headline = mdExtLinks(md.renderInline(project.headline));
    project.desc = mdExtLinks(md.render(project.desc));
}

// Load all the PostHTML requirements
const posthtml = require('posthtml');
const expressions = require('posthtml-expressions');
const include = require('posthtml-include');

// Get the source html
const html = readFileSync('templates/index.html', 'utf8');

// Render it
posthtml([
    include({ encoding: 'utf8' }),
    expressions({ locals: { environment, config, projects } })
])
    .process(html)
    .then((result) => writeFileSync('build/index.html', result.html, { flag: 'w+' }));
