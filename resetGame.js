// resetGame.js
// Fonction de réinitialisation du jeu
import { balls } from "./setting.js";
import { addBallAtInterval } from "./addBallAtInterval.js";
import { playAgainButton } from "./setting.js";
import { elapsedTime } from "./setting.js";
import { collisionDetected } from "./setting.js";
import { resetScoreRecorded } from "./update.js";

export function resetGame() {
    resetScoreRecorded();
    // Réinitialisation des variables
    // console.log(balls);
    balls.balls.length = 0;
    collisionDetected.collisionDetected = false;
    elapsedTime.elapsedTime = 0;

    // Suppression du bouton Play Again s'il existe
    if (playAgainButton.playAgainButton) {
        // playAgainButton.playAgainButton.remove();
        playAgainButton.playAgainButton = null;
    }

    // Génération initiale des mini-boules
    for (let i = 0; i < 10; i++) {
        addBallAtInterval();
    }
}