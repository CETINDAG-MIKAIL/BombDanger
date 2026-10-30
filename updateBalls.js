import { board } from "./board.js";
// updateBalls.js
import { update } from "./update.js";
import { balls } from "./setting.js";
// import { Ball } from "./bob-omb.js";
// Fonction pour mettre à jour le déplacement des boules de feu
export function updateBalls() {
    balls.balls.forEach(ball => {
        // Mise à jour de la position en fonction de la direction initiale
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // Suppression des boules de feu qui sortent du canevas
        if (ball.x + ball.radius < 0 || ball.x - ball.radius > board.width ||
            ball.y + ball.radius < 0 || ball.y - ball.radius > board.height) {
            balls.balls.splice(balls.balls.indexOf(ball), 1);
        }
    });
    update(); // Mise à jour du canevas après le déplacement des boules de feu
}