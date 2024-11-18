import { Storage } from "./storage/Storage"
import { StorageSetting } from "./storage/StorageSetting"

export class PluginService {
	private readonly storage:Storage<StorageSetting>
	
	constructor(storage: Storage<StorageSetting>) {
		this.storage = storage
	}

}
