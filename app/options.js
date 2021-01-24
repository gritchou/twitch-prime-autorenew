import config from './lib/config';

config.load().then((data) => {
	const input = document.querySelector(`input[name=channel]`);
	input.value = data.channel;
});

document.body.addEventListener('change', (event) => {
	const input = event.target;
	config.save(input.value);
});

document.querySelector(`input[name=channel]`).addEventListener('keyup', (event) => {
	console.log('should save config');
	if (event.key === 'Enter') {
		input.blur();
	}
	config.save(input.value);
});
