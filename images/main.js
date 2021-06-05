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

const path = require('path');
const { existsSync, mkdirSync, readdirSync  } = require('fs');
const sharp = require('sharp');

const sharpResize = async (base, image) => {
    // Resize without padding
    const { data, info } = await sharp(path.join(base, image))
        .resize(284, 160, { fit: 'inside' })
        .toBuffer({ resolveWithObject: true });

    // Create the rounded corners mask
    const mask = Buffer.from(
        `<svg><rect x="0" y="0" width="${info.width}" height="${info.height}" rx="4" ry="4"/></svg>`
    );

    // Round the corners and pad to the fixed size
    return sharp(data)
        .composite([{ input: mask, blend: 'dest-in' }])
        .resize(284, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } });
};

const sharpSave = (sharp, dir, image, type) => sharp.toFile(
    path.join(dir, image.split('.').slice(0, -1).join('.') + '.' + type)
);

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
        const resized = await sharpResize(base, image);
        await sharpSave(resized.png({
            compressionLevel: 9,
            palette: true
        }), dir, image, 'png');
        await sharpSave(resized.webp({
            lossless: true,
            reductionEffort: 6
        }), dir, image, 'webp');
    }
};

main().then();
