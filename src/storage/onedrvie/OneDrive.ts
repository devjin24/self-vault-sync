
import { SettingComponent } from "src/settings/SettingComponent";
import { AbstractStorage } from "../AbstractStorage";
import { OneDriveSetting } from "./OneDriveSetting";
import { OneDriveSettingComponent } from "./OneDriveSettingComponent";
export class OneDrive extends AbstractStorage<OneDriveSetting> {
	type = "onedrive";
	label = "OneDrive";

	getSettingCompoenent(): SettingComponent {
		return new OneDriveSettingComponent()
	}
}
