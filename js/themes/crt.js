/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2022 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

window._theme = () => {
    delete window._theme;

    // Wave
    const heading = document.querySelector('.content h1');
    heading.textContent = '👋 Hi, I\'m ' + heading.textContent;

    // Typing
    const span = document.createElement('span');
    span.textContent = '_';
    heading.appendChild(span);

    // Custom BG
    const bg = document.createElement('div');
    bg.className = 'scanlines';
    document.body.appendChild(bg);

    // Footer TODO highlight
    const todo = document.createElement('span');
    const footerP = document.querySelector('footer p');
    todo.textContent = footerP.textContent.split(' ')[0];
    footerP.textContent = ' ' + footerP.textContent.split(' ').slice(1).join(' ');
    footerP.insertBefore(todo, footerP.firstChild);
};
