<!DOCTYPE html>

<!-- Site Codename: Blue -->
<!--
*  Personal Site: My humble personal homepage, made with a tiny bit but not much care.
*  <https://github.com/MattIPv4/Personal-Site/>
*  Copyright (C) 2018 Matt Cowley (MattIPv4) (me@mattcowley.co.uk)
*  Please see <https://github.com/MattIPv4/Personal-Site/blob/master/LICENSE.md> for the full license.
-->

<html>

<?php include("config.php"); ?>

<head>

    <link rel="stylesheet" href="/css/reset.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jura|Wire+One"/>
    <link rel="stylesheet" href="/css/blue.min.css"/>

    <?php include("head.php"); ?>

</head>

<body id="particles-js">

<div class="content">

    <h1 class="title"><?php echo $name; ?></h1>

    <h2>
        <?php echo implode("<br/>", $motto); ?>
    </h2>

    <ul class="contact">
        <?php foreach ($links as $linkTitle => $link) { ?>
            <li>
                <a href="<?php echo $link; ?>" target="_blank"><?php echo $linkTitle; ?></a>
            </li>
        <?php } ?>
    </ul>
    <br/><br/>

    <h3>Projects</h3>

    <div class="projects">
        <?php $break = False;
        foreach ($projects as $projectTitle => $projectData) { ?>
            <div class="project">
                <a href="<?php echo $projectData["link"]; ?>" target="_blank">
                    <p class="project-title">
                        <b><?php echo $projectTitle; ?></b> [<?php echo $projectData["type"]; ?>]
                    </p>
                    <span class="project-hide">
                        <p class="project-link">
                            <?php echo $projectData["link"]; ?>
                        </p>
                        <p class="project-tools">
                            <?php echo doToolMap($projectData["tools"]); ?>
                        </p>
                        <p class="project-desc">
                            <?php echo $projectData["desc"]; ?>
                        </p>
                    </span>
                    <div class="project-img">
                        <img src="<?php echo $projectData["image"]; ?>" alt="<?php echo $projectTitle; ?>"/>
                    </div>
                </a>
            </div>
            <?php if ($break) {
                echo "<div class='project-fix'></div>";
            }
            $break = !$break;
        } ?>
    </div>

</div>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js'></script>
<script src='https://cdn.rawgit.com/MattIPv4/macOSNotifJS/40edac16/plugin/macOSNotif.js'></script>
<script src="/js/notif.min.js"></script>
<script src="/js/blue.min.js"></script>

</body>

</html>
