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

// Util func for themes to load their styles
function loadCSS(style) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', style);
    document.head.appendChild(link);
}

// Load a theme's styling & custom JS
function loadTheme(theme) {
    // Load theme styling
    loadCSS('css/' + theme + '.css');

    // Load theme custom JS
    var js = document.createElement('script');
    js.setAttribute('onload', 'window._theme()');
    js.setAttribute('src', 'js/' + theme + '.js');
    document.body.appendChild(js);
}

function pickTheme() {
    // Define all themes
    var themes = [
        'blue',
        'crt',
        'swift',
        'screen'
    ];

    // Allow URL ?theme selection
    var url = new URL(window.location.href);
    var theme = url.searchParams.get('theme');
    if (theme && themes.indexOf(theme.toString().toLowerCase()) !== -1) {
        return loadTheme(theme.toString().toLowerCase());
    }

    // Random theme
    loadTheme(themes[Math.floor(Math.random() * themes.length)]);
}

// Go!
pickTheme();
