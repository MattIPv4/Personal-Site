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

// Util func for themes to load their styles
const loadCSS = style => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('media', 'screen');
    link.setAttribute('href', style);
    document.head.appendChild(link);
};

const pickTheme = () => {
    // Define all themes and pick one
    const themes = [
        'crt',
        'code',
        'terminal'
        // 'blue'
    ];
    let theme = themes[Math.floor(Math.random() * themes.length)];

    // Allow URL ?theme selection
    const url = new URL(window.location.href);
    const param = url.searchParams.get('theme');
    if (param && themes.indexOf(param.toString().toLowerCase()) !== -1) {
        theme = param.toString().toLowerCase();
    }

    // Random theme
    loadCSS('css/themes/' + theme + '.css');
};

const handleProject = (project, event) => {
    // Don't trigger if clicking on link
    if (event.target.nodeName === 'A') return;

    // Don't do anything else
    event.preventDefault();

    // Get the desc
    const desc = project.querySelector('.project-desc');
    const toExpand = desc.style.display === 'none';

    // Toggle desc visibility
    desc.style.display = toExpand ? '' : 'none';

    // Toggle aria
    project.querySelector('.project-info').setAttribute('aria-expanded', toExpand ? 'true' : 'false');
};

const handleProjects = () => {
    // Get all the projects
    const projects = [...document.querySelectorAll('.project')];

    for (const project of projects) {
        // Register the click handler
        project.querySelector('.project-info')
            .addEventListener('click', e => handleProject(project, e));
        project.querySelector('.project-info')
            .addEventListener('keydown', e => (e.key === 'Enter' || e.key === ' ') && handleProject(project, e));

        // Hide the desc by default
        project.querySelector('.project-desc').style.display = 'none';

        // Enable the hover styles
        project.querySelector('.project-info').classList.add('has-js');
    }
};

// Go!
pickTheme();
handleProjects();
