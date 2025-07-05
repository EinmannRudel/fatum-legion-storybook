import { showScene, scenes } from './game.js';

const gameUi = document.querySelector('.game');
const mainUI = document.getElementById('main_screen');
const startButton = document.querySelector('.game__button-start');

const music = document.getElementById('bg-music');
let isMusicStarted = false;

startButton.addEventListener('click', () => {
	console.log('go');
	gameUi.classList.toggle('active');
	gameUi.classList.toggle('hidden');

	mainUI.classList.toggle('hidden');
	mainUI.classList.toggle('active');

	showScene('start');
});

const startMusic = () => {
	if (!isMusicStarted) {
		music.volume = 0.5;
		music.play();
		isMusicStarted = true;
		window.removeEventListener('pointerdown', startMusic);
	}
};

window.addEventListener('pointerdown', startMusic);
