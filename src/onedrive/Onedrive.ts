import { StorageSettings } from "src/settings/SelfValutSyncSettings";

export class OnedriveSetting implements StorageSettings {
	accessToken: string = "";
	clientID: string = "";
	authority: string = "";
	refreshToken: string = "";
	accessTokenExpiresInSeconds: number = 0;
	accessTokenExpiresAtTime: number = 0;
	deltaLink: string = "";
	username: string = "";
	credentialsShouldBeDeletedAtTime?: number = 0;
	remoteBaseDir?: string = "";
	emptyFile: string = "skip";
	kind: string = "onedrive";
}

// export const DEFAULT_ONEDRIVE_CONFIG: OnedriveSetting = {
// 	accessToken: "",
// 	clientID: "",
// 	authority: "",
// 	refreshToken: "",
// 	accessTokenExpiresInSeconds: 0,
// 	accessTokenExpiresAtTime: 0,
// 	deltaLink: "",
// 	username: "",
// 	credentialsShouldBeDeletedAtTime: 0,
// 	emptyFile: "skip",
// 	kind: "onedrive",
// };

export class OnedriveService {
	setting: OnedriveSetting
	constructor(setting: OnedriveSetting) {
		this.setting = setting
	}

}
