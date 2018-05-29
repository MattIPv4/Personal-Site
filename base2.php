<!DOCTYPE html>

<!-- Site Codename: SWIFT -->
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans+Mono"/>
    <link rel="stylesheet" href="/css/swift.min.css"/>

    <?php include("head.php"); ?>

</head>

<body>

<div class="code">

    <h1>
        <span style="color: #97C774">H</span><span style="color: #B63E98">e</span><span
                style="color: #D18E62">l</span><span style="color: #DB3E41">l</span><span
                style="color: #1BABA5">o</span>,
        I'm <?php echo $name; ?>.
    </h1>

    <?php foreach ($motto as $msg) { ?>
        <h3>
            <span class="print-cmd">print</span>(<span class="print-txt">"<?php echo $msg; ?>"</span>)
        </h3>
    <?php } ?>


    <h3><span class="comment">/* ---------------------------------------------------- */</span></h3>

    <h3>
        <span class="let">let</span> Me = <span class="func-cmd">links</span>(

        <?php foreach ($links as $linkTitle => $link) { ?>
            <a class="func-txt" href="<?php echo $link; ?>" target="_blank"><?php echo $linkTitle; ?></a>,
        <?php } ?>
        <span class="let-var"><?php echo(rand(0, 1) ? 'true' : 'false'); ?></span>)

    </h3>

    <h3><span class="let">class</span> <span class="print-cmd">Projects</span> <span class="func-cmd">{</span></h3>

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

    <h3><span class="func-cmd">}</span> <span class="let-var">// End Projects class</span></h3>

</div>

<script src='https://cdn.rawgit.com/MattIPv4/macOSNotifJS/40edac16/plugin/macOSNotif.js'></script>
<script src="/js/notif.min.js"></script>

</body>

</html>
