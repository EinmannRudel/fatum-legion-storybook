import { showScene, scenes } from './game.js';

const gameUi = document.querySelector('.game');
const mainUI = document.getElementById('main_screen');
const startButton = document.querySelector('.game__button-start');

startButton.addEventListener('click', () => {
	console.log('go');
	gameUi.classList.toggle('active');
	gameUi.classList.toggle('hidden');

	mainUI.classList.toggle('hidden');
	mainUI.classList.toggle('active');

	showScene('start');
});

console.log(mainUI);
