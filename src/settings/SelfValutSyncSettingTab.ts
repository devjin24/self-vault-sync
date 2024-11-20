import { App, PluginSettingTab, Setting } from "obsidian";
import SelfVaultSync from "src/main";
import { PluginContext } from "src/PluginContext";

export class SelfVaultSyncSettingTab extends PluginSettingTab {
	private context: PluginContext;

	constructor(app: App, plugin: SelfVaultSync, pluginContext: PluginContext) {
		super(app, plugin);
		this.context = pluginContext;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h1", { text: "Self Valut Sync" });
		const serviceChooserDiv = containerEl.createDiv();
		const storageSettingDiv = containerEl.createDiv();
		containerEl.createEl("div", {
			cls: "custom-divider",
			attr: {
				style: "border-bottom: 1px solid #ccc; margin-top: 0px; margin-bottom: 7px; height: 1px;",
			},
		});
		const commonSettingDiv = containerEl.createDiv();

		new Setting(serviceChooserDiv)
			.setName("Choose Storage Type")
			.addDropdown(async (dropdown) => {
				this.context
					.storageOptions()
					.forEach((label, value) =>
						dropdown.addOption(value, label)
					);

				dropdown
					.setValue(this.context.currentType())
					.onChange(async (val) => {
						this.context.onChangeType(val);
						this.renderStorageSetting(storageSettingDiv);
					});
			});

		this.renderStorageSetting(storageSettingDiv);
		this.renderCommonSetting(commonSettingDiv);
	}

	renderStorageSetting(div: HTMLElement) {
		while (div.firstChild) {
			div.removeChild(div.firstChild);
		}
		this.context.storageSettingComponent().render(div);
	}

	renderCommonSetting(div: HTMLElement) {
		new Setting(div)
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
