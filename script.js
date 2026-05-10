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