/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2023 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

const path = require('node:path');
const httpServer = require('http-server');
const puppeteer = require('puppeteer');

const run = async () => {
    // Start the server up
    const server = httpServer.createServer({
        root: path.join(__dirname, 'build')
    });
    await new Promise(resolve => server.listen(resolve));
    const address = server.server.address();

    // Navigate to the print page
    const browser = await puppeteer.launch({ args: [ '--no-sandbox' ] });
    const page = await browser.newPage();
    await page.goto(typeof address === 'string' ? address : `http://localhost:${address.port}`);

    // Switch to print mode and scroll to the bottom
    // Ensures the PDF call knows the correct document height
    await page.emulateMediaType('print');
    await page.evaluate(() => new Promise(resolve => {
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                window.scrollTo(0, document.body.scrollHeight);
                resolve();
            });
        });
    }));

    // Export the PDF and exit
    await page.pdf({
        format: 'A4',
        path: path.join(__dirname, 'build', 'print.pdf'),
        displayHeaderFooter: true,
        headerTemplate: '<span></span>',
        footerTemplate: '<a href="https://mattcowley.co.uk" style="display: inline-block; color: #111; font-size: 8px; font-weight: 400; font-family: \'Courier New\', monospace; text-align: center; text-decoration: none; margin: 0 auto;">mattcowley.co.uk</a>'
    });
    await browser.close();
    await server.close();
};

run().then(() => console.log('Exported')).catch(err => {
    console.error(err);
    process.exit(1);
});
