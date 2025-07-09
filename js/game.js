// export const scenes = [
// 	{
// 		id: 'start',
// 		image: './assets/images/start.png',
// 		text: 'Fatum пролітає над містом у сутінках. Нижче, на вулицях, мешканці дивляться вгору з надією й радістю — кожен чекає порятунку від дирижабля, що несе ліки та провізію. Вітри піднімають пил і огортають металевий корпус легким серпанком.',
// 		dialogue: '', // Поки порожньо. Якщо захочеш додати “шум двигуна” чи голоси екіпажу — просто вставиш текст.
// 		choices: [], // Немає вибору, бо це лише атмосферний вступ
// 		next: 'boom',
// 	},
// 	{
// 		id: 'boom',
// 		image: './assets/images/boom.png',
// 		text: 'Раптом екіпаж і городяни чують могутній поштовх — над містом луною котиться звук вибуху! Двигун дирижабля спалахує, і паніка огортає як людей у кабіні, так і тих, хто стежить за польотом із землі.',
// 		dialogue: '', // Тут також залишаємо порожньо, можна додати короткий вигук або шум (опційно)
// 		choices: [], // Ще немає вибору — тільки розвиток подій
// 		next: 'falling_1',
// 	},
// 	{
// 		id: 'falling_1',
// 		image: './assets/images/falling_1.png',
// 		text: 'В кабіне творився хаус!',
// 		dialogue: '', // Тут також залишаємо порожньо, можна додати короткий вигук або шум (опційно)
// 		choices: [], // Ще немає вибору — тільки розвиток подій
// 		next: 'falling',
// 	},
// 	{
// 		id: 'scene_with_choices',
// 		image: '...',
// 		text: '...',
// 		dialogue: '',
// 		choices: [{ text: '...', next: '...' }],
// 		// тут next вже не треба
// 	},
// ];

// const gameScene = document.getElementById('game__scene');

const sceneImage = document.getElementById('game__img');
const sceneFocus = document.getElementById('game__image-actual');
const sceneText = document.getElementById('game__author-text');
const sceneDialog = document.getElementById('game__character-dialogue');
const sceneDialogSpeker = document.getElementById('speaker');
const textChoices = document.getElementById('game__choices');
const playerChoices = document.querySelectorAll('.game__choices-player');

//* scenes.json

export let scenes = [];

export const loadScenes = async () => {
	const responce = await fetch('./data/scenes.json');
	const data = await responce.json();
	console.log(data);

	scenes = data;
};

loadScenes();

//* automatic change scenes (stop when be players choice)

export const showScene = (sceneId) => {
	const scene = scenes.find((s) => s.id === sceneId);

	if (!scene) {
		console.error('Scene not found', sceneId);
		return;
	}
	console.log('show scene:', sceneId);

	sceneImage.src = scene.image;
	sceneText.textContent = scene.text;
	sceneDialog.textContent = scene.dialogue || ' ';
	sceneDialogSpeker.textContent = scene.speaker || ' ';

	textChoices.innerHTML = '';

	if (scene.choices && scene.choices.length > 0) {
		//* prototup choice player answer

		scene.choices.forEach((choice) => {
			const choiceEl = document.createElement('span');
			choiceEl.classList.add('game__choices-player');
			choiceEl.textContent = choice.text;

			choiceEl.addEventListener('click', () => {
				showScene(choice.next);
			});
			textChoices.appendChild(choiceEl);
		});
	} else if (scene.next) {
		setTimeout(() => {
			showScene(scene.next);
			console.log('auto next scene:', scene.next);
		}, 5000);
	}
};

// showScene('start');

console.log(typeof textChoices);
console.log(playerChoices);
