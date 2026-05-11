const RED = '#e74c3c';
const GREEN = '#2ecc71';

let interval  = null;
let isGreen   = false;
let greenAt   = null;
let running   = false;
let score     = 0;

const box      = document.getElementById('gameBox');
const scoreEl  = document.getElementById('score1');
const timeEl   = document.getElementById('reactionTime');
const startBtn = document.getElementById('startBtn');



function startGame() {
    if (running) return;
    running = true;
    isGreen = false;
    greenAt = null;
    score = 0;
    timeEl.textContent = '';
    startBtn.textContent = 'Fut…';
    startBtn.disabled = true;
    scoreEl.textContent = 'Pontszám: ' + score;
    timeEl.textContent  = 'Reakcióidő: ' + 0 + ' ms';
    
const delay = 1000 + Math.random() * 4000;
    interval = setTimeout(() => {
        box.style.backgroundColor = GREEN;
        isGreen = true;
        greenAt = Date.now();
    }, delay);
}
box.addEventListener('click', () => {
    if (!running) return;

    if (isGreen) {
        const ms = Date.now() - greenAt;
        score++;
        scoreEl.textContent = 'Pontszám: ' + score;
        timeEl.textContent  = 'Reakcióidő: ' + ms + ' ms';
        stop();
    } else {
        timeEl.textContent = 'Nem zöld volt!';
        stop();
    }
});

function stop() {
    clearInterval(interval);
    running = false;
    isGreen = false;
    box.style.backgroundColor = RED;
    startBtn.textContent = 'Újra';
    startBtn.disabled = false;
}