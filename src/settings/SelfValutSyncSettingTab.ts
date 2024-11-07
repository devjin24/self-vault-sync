import { PluginSettingTab } from "obsidian";

export class SelfVaultSyncSettingTab extends PluginSettingTab {
	display(): void {
		throw new Error("Method not implemented.");
	}
	// plugin: SelfVaultSync;
	// settings: SelfVaultSyncSettings

	// constructor(app: App, plugin: SelfVaultSync) {
	// 	super(app, plugin);
	// 	this.plugin = plugin;
	// }

	// display(): void {
	// 	const { containerEl } = this;

	// 	containerEl.empty();

	// 	new Setting(containerEl)
	// 		.setName("Setting #1")
	// 		.setDesc("It's a secret")
	// 		.addText((text) =>
	// 			text
	// 				.setPlaceholder("Enter your secret")
	// 				.setValue(this.plugin.settings.mySetting)
	// 				.onChange(async (value) => {
	// 					this.plugin.settings.mySetting = value;
	// 					await this.plugin.saveSettings();
	// 				})
	// 		);
	// }
}
