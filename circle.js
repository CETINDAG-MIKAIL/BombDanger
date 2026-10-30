import { board } from "./board.js";
// circle.js
import { context } from "./board.js";
import { mainBallImage } from "./Image.js";
import { collisionDetected } from "./setting.js";
export let circle = {
    x: board.width / 2,
    y: board.height / 2,
    radius: 12, // Ajustement de la taille de la boule principale
    color: 'black',
    frame: 0 // Frame pour l'animation
};
// export let isDragging = false; // Indique si le cercle principal est en train d'être déplacé
export function drawCircle() {
    if(collisionDetected.collisionDetected == true )
        return;
    context.beginPath();
    if (circle.frame == 0) {
        context.drawImage(mainBallImage, 0, 0, 16, 25, circle.x - circle.radius, circle.y - circle.radius, circle.radius * 2, circle.radius * 2);
    } else {
        context.drawImage(mainBallImage, 21, 0, 16, 25, circle.x - circle.radius, circle.y - circle.radius, circle.radius * 2, circle.radius * 2);
    }
    context.closePath();
}

