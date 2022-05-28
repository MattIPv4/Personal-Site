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

    document.querySelectorAll('h3.featured, h3.email, h4, h5').forEach(node => {
        const text = [...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE);
        text.textContent = text.textContent.toLowerCase().trim().replace(/ /g, '_').replace(/\W/g, '');
    });

    document.querySelector('footer > p:first-child').textContent = 'cat /tmp/footer.txt';
};
