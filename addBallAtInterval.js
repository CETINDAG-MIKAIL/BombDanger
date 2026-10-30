// addBallAtInterval.js
import { board } from "./board.js";
import { circle } from "./circle.js";
import { Ball } from "./Ball.js";
import { ballRadius } from "./setting.js";
import { balls } from "./setting.js";
import { collisionDetected } from "./setting.js";
export function addBallAtInterval() {
    if (collisionDetected.collisionDetected == true) {
        return;
    }
    // console.log("aaaaaaaaaaaaaaaaa");
    let radius = ballRadius; // Rayon fixe pour toutes les boules de feu

    // Choisir aléatoirement un bord de départ (haut, bas, gauche ou droite)
    let startSide = Math.floor(Math.random() * 4); // 0: haut, 1: bas, 2: gauche, 3: droite

    // Déterminer les positions initiales en fonction du bord de départ
    let x, y;
    switch (startSide) {
        case 0: // Haut
            x = Math.random() * board.width;
            y = -radius;
            break;
        case 1: // Bas
            x = Math.random() * board.width;
            y = board.height + radius;
            break;
        case 2: // Gauche
            x = -radius;
            y = Math.random() * board.height;
            break;
        case 3: // Droite
            x = board.width + radius;
            y = Math.random() * board.height;
            break;
    }

    // Calculer la direction du cercle principal par rapport au point de départ de la boule de feu
    let dx = circle.x - x;
    let dy = circle.y - y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let initialDirection = {
        x: dx / distance, // Normalisation de la direction
        y: dy / distance
    };

    let speedMultiplier = Math.random() * 3 + 1; // Multiplier pour ajuster la vitesse
    let speedX = initialDirection.x * speedMultiplier; // Vitesse horizontale
    let speedY = initialDirection.y * speedMultiplier;

    let color = 'red'; // Couleur des mini-boules
    balls.balls.push(new Ball(x, y, radius, speedX, speedY, color));
}