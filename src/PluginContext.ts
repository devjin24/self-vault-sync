import { PluginService } from "./PluginService";
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
	private type:string
	constructor(repo: SettingRepository) {
		this.repo = repo;
	}

	storageOptions(): Map<string, string> {
		return TypeScriptExt.mapValues(this.storageMap, value => {
			return value.label
		})	
	}

	async onload() {
		// const data = await this.repo.loadSettings();
		const type = "onedrive"
		const storage = this.storageMap.get(type) ?? new OneDrive()
		this.service = new PluginService(storage);
	}
}
