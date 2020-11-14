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

function hello() {
    var colors = [
        '#97C774',
        '#B63E98',
        '#D18E62',
        '#DB3E41',
        '#1BABA5'
    ];
    var title = document.querySelector('.content h1');
    title.textContent = ', I\'m ' + title.textContent + '. ';
    var hello = document.createElement('span');
    var chars = 'Hello'.split('');
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var span = document.createElement('span');
        span.style.color = colors[i % colors.length];
        span.textContent = char;
        hello.appendChild(span);
    }
    title.insertBefore(hello, title.childNodes[0] || null);
    var cur = document.createElement('span');
    cur.className = 'cursor';
    cur.textContent = '|';
    title.appendChild(cur);
}

function taglines() {
    var elms = document.querySelectorAll('.content h2, .content h3:not(.email):not(.featured)');
    for (var i = 0; i < elms.length; i++) {
        var elm = elms[i];
        var cmd = document.createElement('span');
        cmd.textContent = 'print';
        cmd.className = 'print-cmd';
        var open = document.createTextNode('(');
        var txt = document.createElement('span');
        txt.textContent = '"' + elm.textContent + '"';
        txt.className = 'print-txt';
        var close = document.createTextNode(')');
        elm.innerHTML = '';
        elm.appendChild(cmd);
        elm.appendChild(open);
        elm.appendChild(txt);
        elm.appendChild(close);
    }
}

function email() {
    var elm = document.querySelector('.content .email');
    var lett = document.createElement('span');
    lett.className = 'let';
    lett.textContent = 'let';
    var contact = document.createTextNode(' Contact = ');
    var func = document.createElement('span');
    func.className = 'func-cmd';
    func.textContent = 'email';
    var open = document.createTextNode('("');
    var link = elm.querySelector('a');
    var mid = document.createTextNode('", ');
    var port = document.createElement('span');
    port.className = 'let-var';
    port.textContent = '25';
    var close = document.createTextNode(')');
    elm.innerHTML = '';
    elm.appendChild(lett);
    elm.appendChild(contact);
    elm.appendChild(func);
    elm.appendChild(open);
    elm.appendChild(link);
    elm.appendChild(mid);
    elm.appendChild(port);
    elm.appendChild(close);
}

function contact() {
    // Before
    var h3 = document.createElement('h3');
    var lett = document.createElement('span');
    lett.className = 'let';
    lett.textContent = 'let';
    var me = document.createTextNode(' Me = ');
    var func = document.createElement('span');
    func.className = 'func-cmd';
    func.textContent = 'links';
    var open = document.createTextNode('([');
    h3.appendChild(lett);
    h3.appendChild(me);
    h3.appendChild(func);
    h3.appendChild(open);
    h3.style.marginBottom = '0';
    document.querySelector('.content .contact').insertAdjacentElement('beforeBegin', h3);

    // After
    h3 = document.createElement('h3');
    var start = document.createTextNode('], ');
    var bool = document.createElement('span');
    bool.className = 'let-var';
    bool.textContent = Math.round(Math.random()) ? 'true' : 'false';
    var end = document.createTextNode(')');
    h3.appendChild(start);
    h3.appendChild(bool);
    h3.appendChild(end);
    h3.style.marginTop = '0';
    document.querySelector('.content .contact').insertAdjacentElement('afterEnd', h3);
}

function projects() {
    // Before
    var elm = document.querySelector('.content .featured');
    var classs = document.createElement('span');
    classs.className = 'let';
    classs.textContent = 'class';
    var name = document.createElement('span');
    name.className = 'print-cmd';
    name.textContent = ' FeaturedProjects ';
    var open = document.createElement('span');
    open.className = 'func-cmd';
    open.textContent = '{';
    elm.innerHTML = '';
    elm.appendChild(classs);
    elm.appendChild(name);
    elm.appendChild(open);

    // After
    var h3 = document.createElement('h3');
    var close = document.createElement('span');
    close.className = 'func-cmd';
    close.textContent = '} ';
    var comment = document.createElement('span');
    comment.className = 'comment';
    comment.textContent = 'End FeaturedProjects class';
    h3.appendChild(close);
    h3.appendChild(comment);
    document.querySelector('.content .projects').insertAdjacentElement('afterEnd', h3);
}

window._theme = function () {
    delete window._theme;

    hello();
    taglines();
    email();
    contact();
    projects();
};
