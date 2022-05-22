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

const path = require('path');
const html5ToPdf = require('html5-to-pdf');

const run = async () => {
    const html5ToPDF = new html5ToPdf({
        inputPath: path.join(__dirname, 'build', 'print.html'),
        outputPath: path.join(__dirname, 'build', 'print.pdf'),
        pdf: { preferCSSPageSize: true },
        renderDelay: 250,
        launchOptions: { args: [ '--no-sandbox' ] }
    });

    await html5ToPDF.start();
    await html5ToPDF.build();
    await html5ToPDF.close();
};

run().then(() => console.log('Exported')).catch(err => {
    console.error(err);
    process.exit(1);
});
