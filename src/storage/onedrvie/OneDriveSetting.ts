import { StorageSetting } from "../StorageSetting"

export class OneDriveSetting implements StorageSetting {
	clientId: string;
	constructor(settings?: Partial<OneDriveSetting>) {
		Object.assign(this, settings);
	}
}
