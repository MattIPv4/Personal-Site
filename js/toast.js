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

const data = require('../toasts.yaml');

let hasScrolled = false;

const loadToast = () => {
    const toast = data[Math.floor(Math.random() * data.length)];
    const wrapper = document.createElement('div');
    wrapper.className = 'toast';
    wrapper.style.opacity = '0';
    wrapper.style.pointerEvents = 'none';
    document.body.appendChild(wrapper);

    const content = document.createElement('div');
    wrapper.appendChild(content);

    const text = document.createElement('p');
    text.innerText = toast.content;
    content.appendChild(text);

    const close = document.createElement('a');
    close.textContent = '✕';
    close.addEventListener('click', () => {
        wrapper.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(wrapper);
        }, 1000);
    });
    content.appendChild(close);

    const button = document.createElement('a');
    button.innerText = toast.button;
    button.href = toast.link;
    wrapper.appendChild(button);

    document.addEventListener('scroll', () => {
        if (hasScrolled) return;
        if (window.scrollY < window.innerHeight * (2 / 3)) return;
        hasScrolled = true;
        wrapper.className += ' scrolled';
    });

    window.requestAnimationFrame(() => {
        wrapper.style.opacity = '';
        wrapper.style.pointerEvents = '';
    });
};

// Go!
loadToast();
