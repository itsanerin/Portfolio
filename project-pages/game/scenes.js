var scene = "intro";

function draw() {
    if (scene == "intro") {
        intro();
        container.style.backgroundColor = "#89cc94";
    } else if (scene == "game") {
        game();
    } else if (scene == "restart") {
        restart();
    } else if (scene == "tutorial") {
        tutorial();

    }
}

function intro() {

    background("#89cc94");

    camera.off();
    start_sprite.display();
}


function restart() {

    camera.off();
    death_sprite.display();
    text('Your Score:', 100, height / 3 - 10);
    text(score, width / 2 + 120, height / 3 - 10);
    fill('black');
    textFont('courier');
    textStyle(NORMAL);
}

function tutorial() {
    camera.off();
    tutorial_sprite.display();
}

function died() {
    scene = "restart";

    //reset progress
    progress = 0;
    level = 0;

    // play death sound
    // deathSound.play();

    //stop bgMusic
    bgMusic.stop();
    deathMusic.play();

    // reset the player
    player.position.x = playerXStart;
    player.position.y = playerYStart;
    player.velocity.y = 0;
    player.livesLeft = 3;


    // destroy other sprites

    while (winds.length > 0) {
        winds[0].remove();
    }

    while (platforms.length > 0) {
        platforms[0].remove();
    }

    while (pollen.length > 0) {
        pollen[0].remove();
    }
    while (birds.length > 0) {
        birds[0].remove();
    }

    while (clouds.length > 0) {
        clouds[0].remove();
    }
}


function keyPressed() {
    // enter key
    if (keyCode == 13) {
        if (scene == "intro" || scene == "restart" || scene == "tutorial") {
            build();
            bgMusic.play();
            // play sound to start game
            startSound.play();
            scene = "game";
            score = 0;
        }
        /* space key */
    } else if (keyCode == 32) {
        if (scene == "intro" || scene == "restart" || scene == "tutorial") {
            scene = "tutorial";
        }
    }
}
