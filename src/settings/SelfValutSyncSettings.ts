import { DEFALUT_GOOGLEDRIVE_SETTING, GoogleDriveSetting } from "src/storage/googledrive/GoogleDriveSetting";
import { DEFALUT_ONEDRIVE_SETTING, OneDriveSetting } from "src/storage/onedrvie/OneDriveSetting"
import { StorageSetting } from "src/storage/StorageSetting";


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
	[key: string]: StorageSetting;
}

export const DEFAULT_SETTINGS: Partial<SelfVaultSyncSettings> = {
	type: "onedrive",
	onedrive: DEFALUT_ONEDRIVE_SETTING,
	googledrive : DEFALUT_GOOGLEDRIVE_SETTING
}
