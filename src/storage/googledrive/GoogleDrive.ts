import { AbstractStorage } from "../AbstractStorage";
import { GoogleDriveSetting } from "./GoogleDriveSetting";
import { GoogleDriveSettingComponent } from "./GoogleDriveSettingComponent";

export class GoogleDrive extends AbstractStorage<GoogleDriveSetting> {
	type = "googledrive";
	label = "Google Drive";
	readonly settingComponent: GoogleDriveSettingComponent =
		new GoogleDriveSettingComponent(this);
}
