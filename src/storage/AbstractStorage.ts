import { Storage } from "./Storage";
import { StorageSetting } from "./StorageSetting";

export abstract class AbstractStorage<T extends StorageSetting> implements Storage<T> {
	abstract type: string;
	abstract label: string;
	setting!: T; 

	setSetting(setting: T): void {
		this.setting = setting;
	}
}

