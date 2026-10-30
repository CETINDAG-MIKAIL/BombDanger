// bob-omb.js
import {  backgroundImage } from "./Image.js";
import { circle } from "./circle.js";
import { board, context } from "./board.js";
import { createFireball } from "./fireball.js";
import { addBallAtInterval } from "./addBallAtInterval.js";
import { update } from "./update.js";
import { updateBalls } from "./updateBalls.js";
import { collisionDetected, elapsedTime, gameStart } from "./setting.js";
import "./mouse.js";
export let animationInterval;
export let animationSpeed = 100;

function startGame() {
    if (gameStart.gameStart) return;
    console.log("Game started");
    gameStart.gameStart = true;

    const startButton = document.getElementById("startButton");
    startButton.style.display = "none";

    setInterval(createFireball, 100);
    setInterval(addBallAtInterval, 100);
    setInterval(function () {
        updateBalls();
        update();
    }, 30);

    animationInterval = setInterval(function () {
        changeAnimation();
    }, animationSpeed);

    setInterval(function () {
        if (!collisionDetected.collisionDetected) {
            elapsedTime.elapsedTime += 10;
        }
    }, 10);
}

function changeAnimation() {
    circle.frame = (circle.frame + 1) % 2;
}

window.onload = function () {
    console.log("Window loaded");
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

    backgroundImage.onload = function () {
        console.log("Background image loaded");
        context.drawImage(backgroundImage, 262, 58, 517 - 262, 249 - 58, 0, 0, board.width, board.height);
    };

    backgroundImage.onerror = function () {
        console.error("Error loading background image");
    };

    if (backgroundImage.complete) {
        context.drawImage(backgroundImage, 262, 58, 517 - 262, 249 - 58, 0, 0, board.width, board.height);
    }
}
