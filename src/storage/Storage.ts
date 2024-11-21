import { SettingComponent } from "src/settings/SettingComponent";
import { StorageSetting } from "./StorageSetting";

export interface Storage<T extends StorageSetting> {
	type: string;
	label: string;
	setSetting(setting:T):void
	getSetting():T
	readonly settingComponent:SettingComponent
}
