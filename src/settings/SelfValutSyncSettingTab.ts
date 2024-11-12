import { App, PluginSettingTab, Setting } from "obsidian";
import SelfVaultSync from "src/main";
import { StorageOptionHandler } from "./StorageOptionHandler";

export class SelfVaultSyncSettingTab extends PluginSettingTab {
	private storageOptionHandler: StorageOptionHandler;

	constructor(
		app: App,
		plugin: SelfVaultSync,
		storageOptionHandler: StorageOptionHandler
	) {
		super(app, plugin);
		this.storageOptionHandler = storageOptionHandler;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h1", { text: "Self Valut Sync" });

		const serviceChooserDiv = containerEl.createDiv();
		serviceChooserDiv.createEl("h2", {
			text: "Choose Storage Type",
		});

		new Setting(serviceChooserDiv)
			.setName("Choose Storage Type")
			.addDropdown(async (dropdown) => {
				this.storageOptionHandler.options.forEach((label, value) =>
					dropdown.addOption(value, label)
				);

				dropdown
					// .setValue(this.settings.getKind())
					.onChange(async (val) => {
						this.storageOptionHandler.onChange(val)
					});
			});

		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText(
				(text) => text.setPlaceholder("Enter your secret")
				// .setValue(this.plugin.settings.mySetting)
				// .onChange(async (value) => {
				// this.plugin.settings.mySetting = value;
				// await this.plugin.saveSettings();
				// })
			);
	}
}
