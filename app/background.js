
import config from './lib/config';

let currentConfig;

config.load().then((config) => {
	currentConfig = config;
});

browser.storage.onChanged.addListener(({ config }) => {
	console.log('on changed')
	// if (config) {
	// 	currentConfig.channel !== config.newValue.channel && createAlarm(config.newValue.channel);
	// 	currentConfig = config.newValue;
	// }
	currentConfig = config;
});

// const subToChannel = async () => {
// 	const tab = await browser.tabs.query({ active: true, currentWindow: true })
// 		.then((tabs) => tabs[0])
// 		;

// 	tab && browser.tabs.sendMessage(tab.id, { url: 'https://twitch.tv/' + currentConfig.channel });
// };

chrome.browserAction.onClicked.addListener(function (activeTab) {
	console.log('in onClicked')
	var newURL = "http://twitch.tv/" + currentConfig.channel;
	chrome.tabs.create({ url: newURL });
	const resubButton = document.querySelector('button[aria-label="Continue Sub"]');
	resubButton.click();
	const nextSubAvailableDate = document.querySelector('p[data-test-selector="primesubrenewsmessage"]');
});

// subToChannel();

