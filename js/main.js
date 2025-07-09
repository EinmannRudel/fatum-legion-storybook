import { showScene, loadScenes } from './game.js';

let isScenesLoaded = false;

const gameUi = document.querySelector('.game');
const mainUI = document.getElementById('main_screen');
const startButton = document.querySelector('.game__button-start');

const music = document.getElementById('bg-music');
let isMusicStarted = false;

loadScenes().then(() => {
	isScenesLoaded = true;
	console.log('Scenes loaded!');
});

startButton.addEventListener('click', () => {
	console.log('go');
	gameUi.classList.toggle('active');
	gameUi.classList.toggle('hidden');

	mainUI.classList.toggle('hidden');
	mainUI.classList.toggle('active');

	startMusic();
	showScene('start');
});

const startMusic = () => {
	if (!isMusicStarted) {
		music.volume = 0.5;
		music.play();
		isMusicStarted = true;
		// window.removeEventListener('pointerdown', startMusic);
	}
};

// window.addEventListener('pointerdown', startMusic);
