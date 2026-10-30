//time.js
// Fonction pour formater le temps
export function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let millisecondsPart = Math.floor((milliseconds % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${millisecondsPart < 10 ? '0' : ''}${millisecondsPart}`;
}