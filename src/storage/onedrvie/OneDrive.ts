
import { AbstractStorage } from "../AbstractStorage";
import { OneDriveSetting } from "./OneDriveSetting";
import { OneDriveSettingComponent } from "./OneDriveSettingComponent";
export class OneDrive extends AbstractStorage<OneDriveSetting> {
	type = "onedrive";
	label = "OneDrive";
	readonly settingComponent = new OneDriveSettingComponent(this)
	
}
