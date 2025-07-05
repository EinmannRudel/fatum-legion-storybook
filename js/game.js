export const scenes = [
	{
		id: 'start',
		image: './assets/images/start.png',
		text: 'Fatum пролітає над містом у сутінках. Нижче, на вулицях, мешканці дивляться вгору з надією й радістю — кожен чекає порятунку від дирижабля, що несе ліки та провізію. Вітри піднімають пил і огортають металевий корпус легким серпанком.',
		dialogue: '', // Поки порожньо. Якщо захочеш додати “шум двигуна” чи голоси екіпажу — просто вставиш текст.
		choices: [], // Немає вибору, бо це лише атмосферний вступ
		next: 'boom',
	},
	{
		id: 'boom',
		image: './assets/images/boom.png',
		text: 'Раптом екіпаж і городяни чують могутній поштовх — над містом луною котиться звук вибуху! Двигун дирижабля спалахує, і паніка огортає як людей у кабіні, так і тих, хто стежить за польотом із землі.',
		dialogue: '', // Тут також залишаємо порожньо, можна додати короткий вигук або шум (опційно)
		choices: [], // Ще немає вибору — тільки розвиток подій
		next: 'falling_1',
	},
	{
		id: 'scene_with_choices',
		image: '...',
		text: '...',
		dialogue: '',
		choices: [{ text: '...', next: '...' }],
		// тут next вже не треба
	},
];

// const gameScene = document.getElementById('game__scene');

const sceneImage = document.getElementById('game__img');
const sceneFocus = document.getElementById('game__image-actual');
const sceneText = document.getElementById('game__author-text');
const sceneDialog = document.getElementById('game__character-dialogue');

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

	if (scene.next && (!scene.choices || scene.choices.length === 0)) {
		setTimeout(() => {
			showScene(scene.next);

			console.log('auto next scene');
			console.log(scene.next);
		}, 5000);
	}
};

// showScene('start');
