import { OneDriveSetting } from "src/storage/onedrive/Onedrive";

export class SelfVaultSyncDataJson {
	type: string;
	onedrive: OneDriveSetting;

	constructor(type: string, onedrive: OneDriveSetting) {
		this.type = type;
		this.onedrive = onedrive;
	}
}
