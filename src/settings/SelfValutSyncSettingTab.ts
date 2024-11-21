import { App, PluginSettingTab, Setting } from "obsidian";
import SelfVaultSync from "src/main";
import { SettingTabServiceFacade } from "./SettingTabServiceFacade";

export class SelfVaultSyncSettingTab extends PluginSettingTab {
		private service: SettingTabServiceFacade;

	constructor(app: App, plugin: SelfVaultSync, service: SettingTabServiceFacade) {
		super(app, plugin);
		this.service = service;
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
				this.service.storageOptions.forEach((label, value) =>
					dropdown.addOption(value, label)
				);

				dropdown
					.setValue(this.service.currentType())
					.onChange(async (val) => {
						await this.service.updateSettings("type", val);
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
		this.service.storageSettingRender(div);
	}

	renderCommonSetting(div: HTMLElement) {
		new Setting(div)
			.setName("Setting #1")
			.setDesc("It's a secret")
			.addText((text) => text.setPlaceholder("Enter your secret"));
	}
}
