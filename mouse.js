//mouse.js
import { board } from "./board.js";
import { circle } from "./circle.js";
import { isDragging } from "./setting.js";
import { offsets } from "./setting.js"; // Importation de l'objet offsets
import { update } from "./update.js";

// Gestion du déplacement du cercle principal avec la souris
board.addEventListener('mousedown', function (e) {
    const rect = board.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * board.width / rect.width;
    const mouseY = (e.clientY - rect.top) * board.height / rect.height;

    if (Math.pow(mouseX - circle.x, 2) + Math.pow(mouseY - circle.y, 2) < Math.pow(circle.radius, 2)) {
        isDragging.isDragging = true;
        offsets.offsetX = mouseX - circle.x; // Mise à jour de offsetX
        offsets.offsetY = mouseY - circle.y; // Mise à jour de offsetY
    }
});

document.addEventListener('mousemove', function (e) {
    if (isDragging.isDragging == true) {
        const rect = board.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * board.width / rect.width;
        const mouseY = (e.clientY - rect.top) * board.height / rect.height;
        circle.x = mouseX - offsets.offsetX; // Utilisation de offsetX
        circle.y = mouseY - offsets.offsetY; // Utilisation de offsetY

        // Vérification des limites du canevas
        if (circle.x < 0 || circle.x > board.width || circle.y < 0 || circle.y > board.height) {
            // Réinitialisation du cercle principal au centre
            circle.x = board.width / 2;
            circle.y = board.height / 2;
            isDragging.isDragging = false;
        }
        update();
    }
});

document.addEventListener('mouseup', function () {
    isDragging.isDragging = false;
});
