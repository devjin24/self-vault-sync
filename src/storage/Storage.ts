import { SettingComponent } from "src/settings/SettingComponent";
import { StorageSetting } from "./StorageSetting";

export interface Storage<T extends StorageSetting> {
	type: string;
	label: string;
	setting: T
	setSetting(setting:T):void
	getSettingCompoenent(): SettingComponent
}
