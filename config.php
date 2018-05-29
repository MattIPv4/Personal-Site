<?php

$name = "Matt Cowley";

$motto = [];
$motto[] = "Website designer and developer. Digital graphic designer.";
$motto[] = "Theatre technician (Stage management, electrics, lighting).";

$links = [];
$links['Email'] = "mailto:me@mattcowley.co.uk";
$links['CV'] = "https://cv.mattcowley.co.uk/";
$links['GitHub'] = "https://github.com/MattIPv4";
$links['Discord'] = "https://discord.gg/qyXqA7y";
$links['Twitter'] = "https://twitter.com/MattIPv4/";
$links['Patreon'] = "https://www.patreon.com/IPv4";

function doToolMap($tools, $delim = " / ") {
    $tool_map = [
        "phpstorm" => "devicon-phpstorm-plain",

        "php" => "devicon-php-plain",

        "html" => "devicon-html5-plain",

        "js" => "devicon-javascript-plain",

        "jquery" => "devicon-jquery-plain",

        "css" => "devicon-css3-plain",

        "bootstrap" => "devicon-bootstrap-plain",

        "mysql" => "devicon-mysql-plain",

        "laravel" => "devicon-laravel-plain",

        "git" => "devicon-git-plain",

        "python" => "devicon-python-plain",

        "pycharm" => "devicon-pycharm-plain",

        "photoshop" => "devicon-photoshop-plain",
    ];
    $final = [];
    foreach ($tools as $tool) {
        if(array_key_exists(strtolower($tool), $tool_map)) {
            $final[] = "<i class=\"".$tool_map[strtolower($tool)]."\"><span class=\"tip\">".$tool."</span></i>";
        } else {
            $final[] = $tool;
        }
    }
    return implode($delim, $final);
}

require_once "spyc.php";
$projects = Spyc::YAMLLoad(file_get_contents("projects.yaml"));

if(isset($_GET['e'])) {
    $json = [
        'name' => $name,
        'motto' => $motto,
        'links' => $links,
        'projects' => $projects
    ];

  header('Content-Type: application/json');
  header("Access-Control-Allow-Origin: *");
  echo json_encode($json, JSON_PRETTY_PRINT);
}
