const DEFAULT_CHANNEL = 'Seijouf';

export default {
	async load() {
		const query = await browser.storage.local.get(['channel']);
		return query.channel || DEFAULT_CHANNEL;
	},

	async save(channel) {
		// const channel = await this.load();
		// config.channel = channel;
		return browser.storage.local.set({ channel: channel });
	},
};
