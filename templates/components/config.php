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

$name = "Matt (IPv4) Cowley";
$email = "me@mattcowley.co.uk";

$motto = [];

$motto[] = ["Community Manager @ cdnjs.com / Developer Relations @ js.org", false];
$motto[] = ["&nbsp;", true];

$motto[] = ["Community Management, Website Design &amp; Development, Software Engineering", false];
$motto[] = ["HTML, JavaScript, CSS, SASS, PHP 5 &amp; 7, Python 3", true];

$motto[] = ["Stage Management, Production Electrics, Lighting", false];
$motto[] = ["&nbsp;", true];

$links = [];
$links[] = ["cv.mattcowley.co.uk", ""];
//$links[] = ["botz.mattcowley.co.uk", "Discord Bots"];
$links[] = ["github.mattcowley.co.uk", "/MattIPv4"];
//$links[] = ["discord.mattcowley.co.uk", "@IPv4#0001"];
$links[] = ["patreon.mattcowley.co.uk", "/IPv4"];
$links[] = ["twitter.mattcowley.co.uk", "@MattIPv4"];
$links[] = ["linkedin.mattcowley.co.uk", ""];

function doToolMap($tools, $delim = " / ")
{
    /* http://konpa.github.io/devicon/ */
    $tool_map = [
        "phpstorm" => "devicon-phpstorm-plain",
        "webstorm" => "devicon-webstorm-plain",
        "pycharm" => "devicon-pycharm-plain",

        "php" => "fab fa-php",
        "html" => "fab fa-html5",

        "js" => "fab fa-js",
        "javascript" => "fab fa-js",
        "js (es6)" => "fab fa-js",
        "javascript (es6)" => "fab fa-js",

        "webpack" => "devicon-webpack-plain",
        "babel" => "devicon-babel-plain",

        "jquery" => "devicon-jquery-plain",

        "css" => "fab fa-css3",
        "css3" => "fab fa-css3",
        "sass" => "fab fa-sass",

        "bootstrap" => "fab fa-bootstrap",

        "mysql" => "devicon-mysql-plain",
        "laravel" => "devicon-laravel-plain",

        "git" => "devicon-git-plain",
        "github" => "fab fa-github",

        "python" => "fab fa-python",

        "photoshop" => "devicon-photoshop-plain",

        "twitter" => "fab fa-twitter",
        "discord" => "fab fa-discord",
        "discourse" => "fab fa-discourse",
    ];
    $final = [];
    foreach ($tools as $tool) {
        if (array_key_exists(strtolower($tool), $tool_map)) {
            $final[] = "<i class=\"" . $tool_map[strtolower($tool)] . "\"><span class=\"tip\">" . $tool . "</span></i>";
        } else {
            $final[] = $tool;
        }
    }
    return implode($delim, $final);
}

require_once "spyc.php";
$projects = Spyc::YAMLLoad(file_get_contents(dirname(__FILE__) . "/projects.yaml"));

if (isset($_GET['json'])) {
    foreach ($projects as $i => $project) {
        if (!$project['display']) unset($projects[$i]);
        else unset($projects[$i]['display']);
    }

    $json = [
        'name' => $name,
        'motto' => $motto,
        'links' => $links,
        'projects' => $projects
    ];

    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    echo json_encode($json, JSON_PRETTY_PRINT);
    die();
}
