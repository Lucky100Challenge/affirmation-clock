// script.js
const clockElement = document.getElementById('clock');
const affirmationElement = document.getElementById('affirmation');

async function fetchAffirmation() {
    try {
        const response = await fetch('https://www.affirmations.dev/');
        const data = await response.json();
        return data.affirmation;
    } catch (error) {
        console.error('Error fetching affirmation:', error);
        return 'Stay positive and keep going!';
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    // Fetch and display the affirmation
    const affirmation = await fetchAffirmation();
    affirmationElement.textContent = affirmation;
    
    // Update the clock every second
    updateClock();
    setInterval(updateClock, 1000);
});
