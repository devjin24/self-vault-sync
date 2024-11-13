import { StorageSetting } from "../StorageSetting"

export default interface OneDriveSetting extends StorageSetting {
	clientId: string
	// constructor(settings?: Partial<OneDriveSetting>) {
	// 	Object.assign(this, settings);
	// }
}

export const DEFALUT_ONEDRIVE_SETTING: OneDriveSetting = {
	clientId: ""
}
