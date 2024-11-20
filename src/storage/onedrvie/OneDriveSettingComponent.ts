import { Setting } from "obsidian";
import { SettingComponent } from "src/settings/SettingComponent";


export class OneDriveSettingComponent implements SettingComponent {
	render(containerEl: HTMLElement): void {
		new Setting(containerEl)
			.setName("Client Id")
			// .setDesc("It's a secret")
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
