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

const hello = () => {
    const colors = [
        '#97C774',
        '#B63E98',
        '#D18E62',
        '#DB3E41',
        '#1BABA5'
    ];
    const title = document.querySelector('.content h1');
    title.textContent = ', I\'m ' + title.textContent + '. ';
    const hello = document.createElement('span');
    const chars = 'Hello'.split('');
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        const span = document.createElement('span');
        span.style.color = colors[i % colors.length];
        span.textContent = char;
        hello.appendChild(span);
    }
    title.insertBefore(hello, title.childNodes[0] || null);
    const cur = document.createElement('span');
    cur.className = 'cursor';
    cur.textContent = '|';
    title.appendChild(cur);
};

const taglines = () => {
    const elms = document.querySelectorAll('.content h2, .content h3:not(.email):not(.featured)');
    for (let i = 0; i < elms.length; i++) {
        const elm = elms[i];
        const cmd = document.createElement('span');
        cmd.textContent = 'print';
        cmd.className = 'print-cmd';
        const open = document.createTextNode('(');
        const txt = document.createElement('span');
        txt.textContent = '"' + elm.textContent + '"';
        txt.className = 'print-txt';
        const close = document.createTextNode(')');
        elm.innerHTML = '';
        elm.appendChild(cmd);
        elm.appendChild(open);
        elm.appendChild(txt);
        elm.appendChild(close);
    }
};

const email = () => {
    const elm = document.querySelector('.content .email');
    const lett = document.createElement('span');
    lett.className = 'let';
    lett.textContent = 'let';
    const contact = document.createTextNode(' Contact = ');
    const func = document.createElement('span');
    func.className = 'func-cmd';
    func.textContent = 'email';
    const open = document.createTextNode('("');
    const link = elm.querySelector('a');
    const mid = document.createTextNode('", ');
    const port = document.createElement('span');
    port.className = 'let-var';
    port.textContent = '25';
    const close = document.createTextNode(')');
    elm.innerHTML = '';
    elm.appendChild(lett);
    elm.appendChild(contact);
    elm.appendChild(func);
    elm.appendChild(open);
    elm.appendChild(link);
    elm.appendChild(mid);
    elm.appendChild(port);
    elm.appendChild(close);
};

const contact = () => {
    // Before
    const h3Before = document.createElement('h3');
    const lett = document.createElement('span');
    lett.className = 'let';
    lett.textContent = 'let';
    const me = document.createTextNode(' Me = ');
    const func = document.createElement('span');
    func.className = 'func-cmd';
    func.textContent = 'links';
    const open = document.createTextNode('([');
    h3Before.appendChild(lett);
    h3Before.appendChild(me);
    h3Before.appendChild(func);
    h3Before.appendChild(open);
    h3Before.style.marginBottom = '0';
    document.querySelector('.content .contact').insertAdjacentElement('beforeBegin', h3Before);

    // After
    const h3After = document.createElement('h3');
    const start = document.createTextNode('], ');
    const bool = document.createElement('span');
    bool.className = 'let-var';
    bool.textContent = Math.round(Math.random()) ? 'true' : 'false';
    const end = document.createTextNode(')');
    h3After.appendChild(start);
    h3After.appendChild(bool);
    h3After.appendChild(end);
    h3After.style.marginTop = '0';
    document.querySelector('.content .contact').insertAdjacentElement('afterEnd', h3After);
};

const projects = () => {
    // Before
    const elm = document.querySelector('.content .featured');
    const classs = document.createElement('span');
    classs.className = 'let';
    classs.textContent = 'class';
    const name = document.createElement('span');
    name.className = 'print-cmd';
    name.textContent = ' FeaturedProjects ';
    const open = document.createElement('span');
    open.className = 'func-cmd';
    open.textContent = '{';
    elm.innerHTML = '';
    elm.appendChild(classs);
    elm.appendChild(name);
    elm.appendChild(open);

    // After
    const h3 = document.createElement('h3');
    const close = document.createElement('span');
    close.className = 'func-cmd';
    close.textContent = '} ';
    const comment = document.createElement('span');
    comment.className = 'comment';
    comment.textContent = 'End FeaturedProjects class';
    h3.appendChild(close);
    h3.appendChild(comment);
    document.querySelector('.content .projects').insertAdjacentElement('afterEnd', h3);
};

window._theme = () => {
    delete window._theme;

    hello();
    taglines();
    email();
    contact();
    projects();
};
