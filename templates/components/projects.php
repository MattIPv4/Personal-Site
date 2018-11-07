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
<div class="projects">
    <?php $break = False;
    foreach ($projects as $projectTitle => $projectData) {
        if ($projectData["display"] == false) {
            continue;
        } ?>
        <div class="project-outer">
            <div class="project">
                <a href="<?php echo $projectData["link"]; ?>" target="_blank">
                    <p class="project-title">
                        <b><?php echo $projectTitle; ?></b> [<?php echo $projectData["type"]; ?>]
                    </p>
                    <div class="project-hide">
                        <p class="project-link">
                            <?php echo $projectData["link"]; ?>
                        </p>
                        <p class="project-tools">
                            <?php echo doToolMap($projectData["tools"]); ?>
                        </p>
                        <p class="project-desc">
                            <?php echo $projectData["desc"]; ?>
                        </p>
                    </div>
                    <div class="project-img">
                        <img src="<?php echo $projectData["image"]; ?>" alt="<?php echo $projectTitle; ?>"/>
                    </div>
                </a>
            </div>
        </div>
        <?php if ($break) {
            echo "<div class='project-fix'></div>";
        }
        $break = !$break;
    } ?>
</div>