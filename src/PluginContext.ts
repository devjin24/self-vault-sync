import { PluginService } from "./PluginService";
import { SelfVaultSyncSettings } from "./settings/SelfValutSyncSettings";
import { SettingRepository } from "./settings/SettingRepository";
import { OneDrive } from "./storage/onedrvie/OneDrive";
import { Storage } from "./storage/Storage";
import { StorageSetting } from "./storage/StorageSetting";
import { TypeScriptExt } from "./TypeScriptExt";

export class PluginContext {
	private repo: SettingRepository;
	private service: PluginService
	private storages: Storage<StorageSetting>[] = [new OneDrive()];
	private storageMap = new Map<string, Storage<StorageSetting>>(
		this.storages.map((storage) => [storage.type, storage])
	);
	private settings: SelfVaultSyncSettings
	
	constructor(repo: SettingRepository) {
		this.repo = repo;
	}

	storageOptions(): Map<string, string> {
		return TypeScriptExt.mapValues(this.storageMap, value => {
			return value.label
		})	
	}

	async onload() {
		this.settings = await this.repo.loadSettings();
		const storage =
			this.storageMap.get(this.settings.type) ??
			(() => {
				throw new Error(`Unknown storage type: ${this.settings.type}`);
			})();
		this.service = new PluginService(storage);
	}
	getService(): PluginService {
		return this.service
	}
}
