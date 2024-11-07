import { StorageSettings } from "src/settings/SelfValutSyncSettings";

export class OneDriveSetting implements StorageSettings {
	static readonly type: string = "onedrive";
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

	constructor(data: Partial<OneDriveSetting> = {}) {
		this.accessToken = data.accessToken ?? "";
		this.clientID = data.clientID ?? "";
		this.authority = data.authority ?? "";
		this.refreshToken = data.refreshToken ?? "";
		this.accessTokenExpiresInSeconds =
			data.accessTokenExpiresInSeconds ?? 0;
		this.accessTokenExpiresAtTime = data.accessTokenExpiresAtTime ?? 0;
		this.deltaLink = data.deltaLink ?? "";
		this.username = data.username ?? "";
		this.credentialsShouldBeDeletedAtTime =
			data.credentialsShouldBeDeletedAtTime ?? 0;
		this.remoteBaseDir = data.remoteBaseDir ?? "";
		this.emptyFile = data.emptyFile ?? "skip";
	}
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
