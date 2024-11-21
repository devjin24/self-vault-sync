import { Setting } from "obsidian";
import { SettingComponent } from "src/settings/SettingComponent";
import { OneDrive } from "./OneDrive";

export class OneDriveSettingComponent implements SettingComponent {
	constructor(private storage: OneDrive) {}
	render(containerEl: HTMLElement, onChange: () => Promise<void>): void {
		// new Setting(onedriveFullAuthDiv)
		// 	.setName(t("settings_onedrivefull_auth"))
		// 	.setDesc(t("settings_onedrivefull_auth_desc"))
		// 	.addButton(async (button) => {
		// 		button.setButtonText(t("settings_onedrivefull_auth_button"));
		// 		button.onClick(async () => {
		// 			const modal = new OnedriveFullAuthModal(
		// 				app,
		// 				plugin,
		// 				onedriveFullAuthDiv,
		// 				onedriveFullRevokeAuthDiv,
		// 				onedriveFullRevokeAuthSetting
		// 			);
		// 			plugin.oauth2Info.helperModal = modal;
		// 			plugin.oauth2Info.authDiv = onedriveFullAuthDiv;
		// 			plugin.oauth2Info.revokeDiv = onedriveFullRevokeAuthDiv;
		// 			plugin.oauth2Info.revokeAuthSetting =
		// 				onedriveFullRevokeAuthSetting;
		// 			modal.open();
		// 		});
		// 	});
		new Setting(containerEl)
			.setName("Client Id")
			// .setDesc("It's a secret")
			.addText((text) =>
				text
					.setPlaceholder("Enter your Client Id")
					.setValue(this.storage.getSetting().clientId)
					.onChange(async (value) => {
						this.storage.updateSetting("clientId", value);
						await onChange();
					})
			);
	}
}
