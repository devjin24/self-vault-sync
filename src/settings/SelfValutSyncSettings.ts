import { DEFALUT_ONEDRIVE_SETTING, OneDriveSetting } from "src/storage/onedrvie/OneDriveSetting"


export interface SelfVaultSyncSettings {
	type: string;
	autoRunEveryMilliseconds: -1;
	initRunAfterMilliseconds: -1;
	syncOnSaveAfterMilliseconds: -1;
	agreeToUploadExtraMetadata: true;
	concurrency: 5;
	syncConfigDir: true;
	syncBookmarks: true;
	enableStatusBarInfo: true;
	onedrive: OneDriveSetting;
}

export const DEFAULT_SETTINGS: Partial<SelfVaultSyncSettings> = {
	type: "onedrive",
	onedrive: DEFALUT_ONEDRIVE_SETTING
}
