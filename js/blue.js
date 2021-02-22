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

const doParticles = (id, config) => {
    if (Object.prototype.hasOwnProperty.call(window, 'particlesJS')) return window.particlesJS(id, config);
};

window._theme = () => {
    delete window._theme;

    // Wave
    const heading = document.querySelector('.content h1');
    heading.textContent = '👋 Hi, I\'m ' + heading.textContent;

    // Background particles
    window._callback = () => {
        delete window._callback;

        document.body.setAttribute('id', 'body');
        doParticles('body', {
            'particles': {
                'number': {
                    'value': 50
                },
                'color': {
                    'value': '#ffffff'
                },
                'shape': {
                    'type': 'triangle',
                    'polygon': {
                        'nb_sides': 5
                    }
                },
                'opacity': {
                    'value': 0.06,
                    'random': false
                },
                'size': {
                    'value': 11,
                    'random': true
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#ffffff',
                    'opacity': 0.4,
                    'width': 1
                },
                'move': {
                    'enable': true,
                    'speed': 2,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': false
                    },
                    'onclick': {
                        'enable': false,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'push': {
                        'particles_nb': 4
                    }
                }
            },
            'retina_detect': true
        }, () => {});
    };
    const js = document.createElement('script');
    js.setAttribute('onload', 'window._callback()');
    js.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js');
    document.body.appendChild(js);
};
