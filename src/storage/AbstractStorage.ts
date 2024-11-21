import { SettingComponent } from "src/settings/SettingComponent";
import { Storage } from "./Storage";
import { StorageSetting } from "./StorageSetting";

export abstract class AbstractStorage<T extends StorageSetting>
	implements Storage<T>
{
	abstract type: string;
	abstract label: string;
	private setting!: T;
	abstract readonly settingComponent: SettingComponent;

	setSetting(setting: T): void {
		this.setting = setting;
	}
	getSetting(): T {
		return this.setting;
	}

	updateSetting(key: keyof T, value: any) {
		this.setSetting({
			...this.getSetting(),
			[key]: value,
		});
	}
	
}
