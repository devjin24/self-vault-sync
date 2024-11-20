import { PluginService } from "./PluginService";
import { SelfVaultSyncSettings } from "./settings/SelfValutSyncSettings";
import { SettingComponent } from "./settings/SettingComponent";
import { SettingRepository } from "./settings/SettingRepository";
import { GoogleDrive } from "./storage/googledrive/GoogleDrive";
import { OneDrive } from "./storage/onedrvie/OneDrive";
import { Storage } from "./storage/Storage";
import { StorageSetting } from "./storage/StorageSetting";
import { TypeScriptExt } from "./TypeScriptExt";

export class PluginContext {
	private repo: SettingRepository;
	private storages: Storage<StorageSetting>[] = [
		new OneDrive(),
		new GoogleDrive(),
	];
	private storageMap = new Map<string, Storage<StorageSetting>>(
		this.storages.map((storage) => [storage.type, storage])
	);
	private settings: SelfVaultSyncSettings;
	service: PluginService;

	constructor(repo: SettingRepository) {
		this.repo = repo;
	}

	storageOptions(): Map<string, string> {
		return TypeScriptExt.mapValues(this.storageMap, (value) => {
			return value.label;
		});
	}

	async onload() {
		this.settings = await this.repo.loadSettings();
		this.changeStorage(this.settings.type);
	}

	onChangeType(type: string) {
		this.settings.type = type;
		this.changeStorage(this.settings.type);
	}

	currentType() {
		return this.settings.type;
	}

	storageSettingComponent():SettingComponent {
		return this.service.settingComponent()
	}

	private changeStorage(type: string) {
		const storage =
			this.storageMap.get(this.settings.type) ??
			(() => {
				throw new Error(`Unknown storage type: ${this.settings.type}`);
			})();
		this.service = new PluginService(storage);
	}
}
