import { OneDriveSetting } from "src/storage/onedrive/Onedrive"

export class SelfValutSyncSettings {
	storage: StorageSettings

	constructor(storage: StorageSettings) {
		this.storage = storage
	}

}

export interface StorageSettings {}

