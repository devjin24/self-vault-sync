import { App, PluginSettingTab, Setting } from "obsidian";
import SelfVaultSync from "src/main";



export class SelfVaultSyncSettingTab extends PluginSettingTab {
	plugin: SelfVaultSync;

	constructor(app: App, plugin: SelfVaultSync) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h1", { text: "Self Valut Sync" });

		const serviceChooserDiv = containerEl.createDiv();
		// serviceChooserDiv.createEl("h2", {
		// 	text: "Choose Storage Type",
		// });

		new Setting(serviceChooserDiv)
			.setName("Choose Storage Type")
			.addDropdown(async (dropdown) => {
				//추상화
				dropdown.addOption(
					"onedrive",
					"Onedrive"
				);
				dropdown
					// .setValue(this.settings.getKind())
					.onChange(async (val) => {
						// this.plugin.settings.serviceType =
						// 	val as SUPPORTED_SERVICES_TYPE;
						// s3Div.toggleClass(
						// 	"s3-hide",
						// 	this.plugin.settings.serviceType !== "s3"
						// );
						// dropboxDiv.toggleClass(
						// 	"dropbox-hide",
						// 	this.plugin.settings.serviceType !== "dropbox"
						// );
						// onedriveDiv.toggleClass(
						// 	"onedrive-hide",
						// 	this.plugin.settings.serviceType !== "onedrive"
						// );
					

						// await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your secret")
					// .setValue(this.plugin.settings.mySetting)
					// .onChange(async (value) => {
						// this.plugin.settings.mySetting = value;
						// await this.plugin.saveSettings();
					// })
			);
	}
}
