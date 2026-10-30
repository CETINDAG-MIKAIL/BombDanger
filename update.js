// update.js
import { backgroundImage } from "./Image.js";
import { board } from "./board.js";
import { balls } from "./setting.js";
import { collisionDetected } from "./setting.js";
import { context } from "./board.js";
import { drawCircle } from "./circle.js";
import { formatTime } from "./time.js";
import { elapsedTime } from "./setting.js";
import { detectCollisionWithBalls } from "./detectCollisionWithBalls.js";
import { resetGame } from "./resetGame.js";


// import { playAgainButton } from "./bob-omb.js";
// import { resetGame } from "./bob-omb.js";
let scoreRecorded = false;

export function resetScoreRecorded() { scoreRecorded = false; }

export function update() {
    // Effacement du canvas et remplissage de la couleur de fond
    context.clearRect(0, 0, board.width, board.height);
    // context.fillStyle = "brown";
    // context.fillRect(0, 0, board.width, board.height);
    
    // Dessiner le fond d'écran
    if (backgroundImage.complete && backgroundImage.naturalWidth > 0) {
        context.drawImage(backgroundImage, 262, 58, 517 - 262, 249 - 58, 0, 0, board.width, board.height);
    }

    // Dessin et déplacement des boules de feu
    balls.balls.forEach(ball => {
        ball.draw();
    });
    drawCircle();

     // Affichage du temps écoulé
     context.fillStyle = "white";
     context.font = "20px Arial";
     context.fillText("Score : " + formatTime(elapsedTime.elapsedTime), board.width - 150, 30);

    // Détection de collision avec les boules de feu
    detectCollisionWithBalls();
    
    // Affichage de "Game Over" et du bouton "Play Again" si une collision est détectée
    if (collisionDetected.collisionDetected) {
        // Affichage de "Game Over" et du bouton "Play Again" si une collision est détectée
        // Affichage de "Game Over"
        const gameOverText = document.getElementById("gameOverText");
        gameOverText.style.display = "block";

        // Affichage du bouton Play Again
        const playAgainButton = document.getElementById("playAgainButton");
        playAgainButton.style.display = "block";

        if (!scoreRecorded) {
            // Le backend du site principal n'est plus présent.
            // Le score est sauvegardé localement sans changer le gameplay.
            try {
                const previous = Number(localStorage.getItem('bombdanger-best') || 0);
                if (elapsedTime.elapsedTime > previous) localStorage.setItem('bombdanger-best', String(elapsedTime.elapsedTime));
            } catch (_) {}
            scoreRecorded = true;
        }

        // Ajout de l'événement de clic au bouton Play Again
        playAgainButton.onclick = resetGame;
    } else {
        // Suppression de "Game Over" s'il n'y a pas de collision
        const gameOverText = document.getElementById("gameOverText");
        gameOverText.style.display = "none";

        // Suppression du bouton Play Again s'il n'y a pas de collision
        const playAgainButton = document.getElementById("playAgainButton");
        playAgainButton.style.display = "none";
    }
}