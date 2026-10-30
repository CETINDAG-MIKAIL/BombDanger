// ball.js
import { board, context } from "./board.js";
import { fireballImage } from "./Image.js";
import { balls } from "./setting.js"; // Importation des boules existantes

export class Ball {
    constructor(x, y, radius, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    // Méthode pour dessiner la boule de feu sur le canvas
    draw() {
        context.drawImage(fireballImage, 31, 448, 8, 8, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    // Méthode pour déplacer la boule de feu
    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Si la boule de feu sort du canvas, on la supprime de la liste
        if (this.x + this.radius < 0 || this.x - this.radius > board.width ||
            this.y + this.radius < 0 || this.y - this.radius > board.height) {
            balls.balls.splice(balls.balls.indexOf(this), 1);
        }
    }
}
