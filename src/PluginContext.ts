import { SettingRepository } from "./settings/data/SettingRepository";
import { OneDrive } from "./storage/onedrvie/OneDrive";
import { Storage } from "./storage/Storage";
import { TypeScriptExt } from "./TypeScriptExt";

export class PluginContext {
	private repo: SettingRepository;

	private storages: Storage[] = [new OneDrive()];
	private storageMap = new Map<string, Storage>(
		this.storages.map((storage) => [storage.type, storage])
	);
	constructor(repo: SettingRepository) {
		this.repo = repo;
	}

	storageOptions(): Map<string, string> {
		return TypeScriptExt.mapValues(this.storageMap, value => {
			return value.label
		})	
	}

	async onload() {
		const data = await this.repo.loadSettings();
		console.log(data);
	}
}
