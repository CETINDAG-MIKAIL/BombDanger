import { board } from "./board.js";
//detectCollisionWithBalls.js
import { balls } from "./setting.js";
import { circle } from "./circle.js";
import { collisionDetected } from "./setting.js";
import { isDragging } from "./setting.js";


export function detectCollisionWithBalls() {
    balls.balls.forEach(ball => {
        let dx = circle.x - ball.x;
        let dy = circle.y - ball.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle.radius + ball.radius) {
            // Collision détectée, indiquer qu'une collision a été détectée
            collisionDetected.collisionDetected = true;
            circle.x = board.width / 2;
            circle.y = board.height / 2;
            isDragging.isDragging = false;
        }
    });

    // Arrêter toutes les boules de feu si une collision a été détectée
    if (collisionDetected.collisionDetected) {
        balls.balls.forEach(ball => {
            ball.speedX = 0; // Arrêter le déplacement horizontal
            ball.speedY = 0; // Arrêter le déplacement vertical
        });
    }

}