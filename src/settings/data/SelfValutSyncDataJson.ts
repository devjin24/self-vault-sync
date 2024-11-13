import OneDriveSetting, { DEFALUT_ONEDRIVE_SETTING } from "src/storage/onedrvie/OneDriveSetting"

export interface SelfVaultSyncDataJson {
	type: string
	onedrive: OneDriveSetting
}

export const DEFAULT_DATA: Partial<SelfVaultSyncDataJson> = {
	type: "onedrive",
	onedrive: DEFALUT_ONEDRIVE_SETTING
}
