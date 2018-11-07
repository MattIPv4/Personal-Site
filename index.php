<?php
/**
 *  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
 *  <https://github.com/MattIPv4/Personal-Site/>
 *  Copyright (C) 2018 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
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

include('auto-minify-html.php');
ob_start();

$sites = glob('templates/base*.php', GLOB_BRACE);
$site = array_rand($sites);

if (isset($_GET['theme'])) {
    if (ctype_digit($_GET['theme'])) {
        $_GET['theme'] = intval($_GET['theme']) - 1;
        if (array_key_exists($_GET['theme'], $sites)) {
            $site = $_GET['theme'];
        }
    }
}

include($sites[$site]);

$page = ob_get_contents();
ob_end_clean();
echo minify_html($page);

?>
