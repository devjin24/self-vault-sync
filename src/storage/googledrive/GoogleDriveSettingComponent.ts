import { SettingComponent } from "src/settings/SettingComponent";
import { GoogleDrive } from "./GoogleDrive";
import { Setting } from "obsidian";

export class GoogleDriveSettingComponent implements SettingComponent {
	constructor(private storage: GoogleDrive) {
	}
	render(containerEl: HTMLElement, onChange:() => Promise<void>): void {
		new Setting(containerEl)
			.setName("Access Token")
			// .setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your Access Token")
					.setValue(this.storage.getSetting().accessToken)
					.onChange(async (value) => {
						this.storage.updateSetting("accessToken", value);
						await onChange()
					})
			);
	}

}
