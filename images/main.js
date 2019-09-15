/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2019 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

const path = require('path');
const { existsSync, mkdirSync, readdirSync  } = require('fs');
const sharp = require('sharp');

const main = async () => {
    // Create output dir
    const dir = path.join(__dirname, '..', 'build', 'projects') ;
    if (!existsSync(dir)) mkdirSync(dir);

    // Find images
    const base = path.join(__dirname, 'projects');
    const images = readdirSync(base).filter(file => file.endsWith('.png') || file.endsWith('.jpg'));

    // Resize & compress images
    for(let i = 0; i < images.length; i++) {
        const image = images[i];
        await sharp(path.join(base, image))
            .resize(600)
            .png({
                compressionLevel: 9,
                quality: 10
            })
            .toFile(path.join(dir, image.split('.').slice(0, -1).join('.') + '.png'));
    }
};

main();
