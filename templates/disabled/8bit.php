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
include("components/config.php");
?>
<!DOCTYPE html>

<!-- Site Codename: 8Bit -->
<!--
*  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
*  <https://github.com/MattIPv4/Personal-Site/>
*  Copyright (C) 2018 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
*  Please see <https://github.com/MattIPv4/Personal-Site/blob/master/LICENSE.md> for the full license.
-->

<html>
<head>
    <?php include("components/head.php"); ?>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323"/>
    <link rel="stylesheet" href="/css/8bit<?php echo(isset($_GET['dev']) ? '' : '.min'); ?>.css"/>
</head>

<body>

<h1><?php echo $name; ?></h1>

<section>
    <?php foreach ($motto as $msg) {
        echo "<h2>" . ($msg[1] ? "<small>" : "");
        echo $msg[0];
        echo ($msg[1] ? "</small>" : "") . "</h2>";
    } ?>
</section>

<h3>Get in touch: <a class="button" href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></h3>

<section>
    <ul>
        <?php foreach ($links as $linkData) {
            $linkTitle = explode(".", $linkData[0], 2); ?>
            <li>
                <a href="http://<?php echo $linkData[0]; ?>/" target="_blank">
                    <b><?php echo $linkTitle[0]; ?></b>
                    <small>.<?php echo $linkTitle[1]; ?></small>
                    <?php if (count($linkData) > 1 && !empty($linkData[1])) { ?>
                        <br/><i><?php echo $linkData[1]; ?></i>
                    <?php } ?>
                </a>
            </li>
        <?php } ?>
    </ul>
</section>

<h3>Featured Projects</h3>

<?php include("components/projects.php"); ?>

<?php include("components/footer.php"); ?>
<!--<div id="background"></div>
<script src='/js/8bit.js' type='text/javascript'></script>-->
<?php //include("components/notif.php"); ?>

</body>
</html>
