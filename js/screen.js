/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2020 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

function moveElms(selectors, target) {
    selectors = selectors.map(function (sel) { return '.content > ' + sel; }).join(', ');
    var elms = document.querySelectorAll(selectors);
    for (var i = 0; i < elms.length; i++) {
        var elm = elms[i];
        target.appendChild(elm);
    }
}

window._theme = function () {
    delete window._theme;

    // Load Open Sans
    var link = document.createElement('link');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap&subset=latin-ext');
    link.setAttribute('rel', 'stylesheet');
    document.head.appendChild(link);

    // Split the content into sections
    var content = document.querySelector('.content');
    var main = document.createElement('section');
    main.setAttribute('id', 'main');
    var inner = document.createElement('div');
    inner.className = 'inner';
    main.appendChild(inner);
    var inner2 = document.createElement('div');
    inner2.className = 'inner2';
    inner.appendChild(inner2);
    var projects = document.createElement('section');
    projects.setAttribute('id', 'projects');
    content.insertBefore(projects, content.firstChild);
    content.insertBefore(main, content.firstChild);
    moveElms(['h1', 'h2', 'h4', 'h3.email', 'ul.contact'], inner2);
    moveElms(['h3.featured', 'div.projects'], projects);

    // Insert link to projects
    var a = document.createElement('a');
    a.setAttribute('href', '#' + projects.getAttribute('id'));
    a.className = 'projects-link';
    var i = document.createElement('i');
    i.className = 'fas fa-long-arrow-alt-down';
    a.appendChild(i);
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(' Featured Projects'));
    a.appendChild(span);
    inner2.appendChild(a);
};
