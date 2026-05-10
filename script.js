const COLORS = ['#e74c3c', '#e67e22', '#f1c40f', '#3498db', '#9b59b6', '#1abc9c', '#e91e63'];
const GREEN  = '#2ecc71';

let interval  = null;
let isGreen   = false;
let greenAt   = null;
let running   = false;
let score     = 0;

const box      = document.getElementById('gameBox');
const scoreEl  = document.getElementById('score1');
const timeEl   = document.getElementById('reactionTime');
const startBtn = document.getElementById('startBtn');

function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function tick() {
    // ~1 in 8 esély a zöldre, egyébként véletlen szín
    const goGreen = Math.random() < 0.125;
    if (goGreen) {
        box.style.backgroundColor = GREEN;
        if (!isGreen) {
            isGreen = true;
            greenAt = Date.now();
        }
    } else {
        box.style.backgroundColor = randomColor();
        isGreen = false;
        greenAt = null;
    }
}
function startGame() {
    if (running) return;
    running = true;
    isGreen = false;
    greenAt = null;
    timeEl.textContent = '';
    startBtn.textContent = 'Fut…';
    startBtn.disabled = true;
    interval = setInterval(tick, 1000);
}
box.addEventListener('click', () => {
    if (!running) return;

    if (isGreen) {
        const ms = Date.now() - greenAt;
        score++;
        scoreEl.textContent = 'Pontszám: ' + score;
        timeEl.textContent  = 'Reakcióidő: ' + ms + ' ms';
        saveScore(ms);
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
    box.style.backgroundColor = '#3498db';
    startBtn.textContent = 'Újra';
    startBtn.disabled = false;
}
