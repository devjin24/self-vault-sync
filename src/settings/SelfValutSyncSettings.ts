
export class SelfVaultSyncSettings {
	private storage: StorageSettings;
	private concurrency: number = 5;
	
	constructor(storage: StorageSettings) {
		this.storage = storage
	}
}

export interface StorageSettings {
	kind: string 
}
