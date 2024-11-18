import { App, PluginSettingTab, Setting } from "obsidian";
import SelfVaultSync from "src/main";
import { PluginService } from "src/PluginService";

export class SelfVaultSyncSettingTab extends PluginSettingTab {
	private options: Map<string, string>
	private service: PluginService

	constructor(
		app: App,
		plugin: SelfVaultSync,
		options: Map<string, string>,
		pluginService: PluginService
	) {
		super(app, plugin);
		this.options = options
		this.service = pluginService
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
				this.options.forEach((label, value) =>
					dropdown.addOption(value, label)
				);

				dropdown
					// .setValue(this.settings.getKind())
					.onChange(async (val) => {
						// this.storageOptionHandler.onChange(val)
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
