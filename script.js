// script.js
const clockElement = document.getElementById('clock');
const affirmationElement = document.getElementById('affirmation');

const affirmations = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "You are stronger than you think.",
    "Positivity is a choice.",
    "You are enough just as you are.",
    "Your potential is limitless.",
    "Great things never come from comfort zones.",
    "Believe you can and you're halfway there.",
    "You are doing the best you can.",
];

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function showAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationElement.textContent = affirmations[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    showAffirmation();
    updateClock();
    setInterval(updateClock, 1000); // Update the clock every second
});
