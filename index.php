<?php
include('auto-minify-html.php');
ob_start();

$sites = glob('base*.php', GLOB_BRACE);
$site = array_rand($sites);

if (isset($_GET['theme'])) {
    if (ctype_digit($_GET['theme'])) {
        $_GET['theme'] = intval($_GET['theme']);
        if (array_key_exists($_GET['theme'], $sites)) {
            $site = $_GET['theme'];
        }
    }
}

$page_content = file_get_contents($sites[$site]);

echo eval("?>$page_content");

$page = ob_get_contents();
ob_end_clean();
echo minify_html($page);

?>
