const { readFileSync, writeFileSync } = require('fs');
const { parse } = require('yaml');

const toolMap = {
    'phpstorm': 'devicon-phpstorm-plain',
    'webstorm': 'devicon-webstorm-plain',
    'pycharm': 'devicon-pycharm-plain',
    'rubymine': 'devicon-rubymine-plain',

    'php': 'fab fa-php',
    'html': 'fab fa-html5',

    'js': 'fab fa-js',
    'javascript': 'fab fa-js',
    'js (es6)': 'fab fa-js',
    'javascript (es6)': 'fab fa-js',

    'nodejs': 'fab fa-node-js',
    'vuejs': 'fab fa-vuejs',

    'typescript': 'devicon-typescript-plain',
    'webpack': 'devicon-webpack-plain',
    'babel': 'devicon-babel-plain',

    'jquery': 'devicon-jquery-plain',

    'css': 'fab fa-css3',
    'css3': 'fab fa-css3',
    'sass': 'fab fa-sass',

    'bootstrap': 'fab fa-bootstrap',

    'mysql': 'devicon-mysql-plain',
    'laravel': 'devicon-laravel-plain',
    'rails': 'devicon-rails-plain',

    'git': 'devicon-git-plain',
    'github': 'fab fa-github',

    'python': 'fab fa-python',

    'photoshop': 'devicon-photoshop-plain',

    'twitter': 'fab fa-twitter',
    'discord': 'fab fa-discord',
    'discourse': 'fab fa-discourse',
    'slack': 'fab fa-slack'
};

const yaml = parse(readFileSync('projects.yaml', 'utf8'));
const projects = Object.keys(yaml).map(key => {
    const data = yaml[key];
    // Name
    data.name = key;

    // Icons
    data.icons = data.tools.map(tool => {
        const key = tool.toString().toLowerCase();
        if (!(key in toolMap)) return tool;
        return {
            "classes": toolMap[key],
            "name": tool
        };
    });

    return data;
}).filter(x => x.display);

const posthtml = require('posthtml');
const expressions = require('posthtml-expressions');
const include = require('posthtml-include');

const html = readFileSync('templates/index.html', 'utf8');

posthtml([
    include({ encoding: 'utf8' }),
    expressions({ locals: { projects } }),
])
    .process(html)
    .then((result) => writeFileSync('build/index.html', result.html, { flag: 'w+' }));
