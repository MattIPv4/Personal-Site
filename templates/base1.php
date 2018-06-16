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
?>
<!DOCTYPE html>

<!-- Site Codename: Blue -->
<!--
*  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
*  <https://github.com/MattIPv4/Personal-Site/>
*  Copyright (C) 2018 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
*  Please see <https://github.com/MattIPv4/Personal-Site/blob/master/LICENSE.md> for the full license.
-->

<html>

<?php include("components/config.php"); ?>

<head>

    <link rel="stylesheet" href="/css/reset.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jura|Wire+One"/>
    <link rel="stylesheet" href="/css/blue.min.css"/>

    <?php include("components/head.php"); ?>

</head>

<body id="particles-js">

<div class="content">

    <h1 class="title"><?php echo $name; ?></h1>

    <h2>
        <?php echo implode("<br/>", $motto); ?>
    </h2>

    <ul class="contact">
        <?php foreach ($links as $linkTitle => $link) {
            $linkTitle = explode(".", $linkTitle, 2); ?>
            <li>
                <a href="<?php echo $link; ?>" target="_blank">
                    <b><?php echo $linkTitle[0]; ?></b><small>.<?php echo $linkTitle[1]; ?></small>
                </a>
            </li>
        <?php } ?>
    </ul>
    <br/><br/>

    <h3>Projects</h3>

    <?php include("components/projects.php"); ?>

</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' type='text/javascript'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js' type='text/javascript'></script>
<script src='/js/blue.min.js' type='text/javascript'></script>
<?php include("components/notif.php"); ?>

</body>

</html>
