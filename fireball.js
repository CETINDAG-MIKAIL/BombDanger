// createFireball.js
import { board } from "./board.js";
import { ballRadius } from "./setting.js";
import { circle } from "./circle.js";
import { balls } from "./setting.js";
import { Ball } from "./Ball.js"; // Import de la classe Ball

export function createFireball() {
    let radius = ballRadius;
    let x, y, speedX, speedY;

    let dx = circle.x - board.width / 2;
    let dy = circle.y - board.height / 2;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let initialDirection = {
        x: (dx / distance) * 2,
        y: (dy / distance) * 2
    };

    let startSide = Math.floor(Math.random() * 4);

    switch (startSide) {
        case 0:
            x = Math.random() * board.width;
            y = -radius;
            break;
        case 1:
            x = Math.random() * board.width;
            y = board.height + radius;
            break;
        case 2:
            x = -radius;
            y = Math.random() * board.height;
            break;
        case 3:
            x = board.width + radius;
            y = Math.random() * board.height;
            break;
    }

    let color = 'red';
    balls.balls.push(new Ball(x, y, radius, initialDirection.x, initialDirection.y, color));
}
