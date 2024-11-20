import { SettingComponent } from "./settings/SettingComponent";
import { Storage } from "./storage/Storage"
import { StorageSetting } from "./storage/StorageSetting"

export class PluginService {
	private readonly storage: Storage<StorageSetting>;
	type: string;

	constructor(storage: Storage<StorageSetting>) {
		this.storage = storage;
		this.type = storage.type;
	}

	settingComponent(): SettingComponent {
		return this.storage.getSettingCompoenent()
	}
}
