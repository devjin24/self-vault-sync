import { StorageSetting } from "../StorageSetting"

export interface OneDriveSetting extends StorageSetting {
	clientId: string;
	accessToken: string;
	authority: string;
	refreshToken: string;
	accessTokenExpiresInSeconds: number;
	accessTokenExpiresAtTime: number;
	deltaLink: string;
	username: string;
	credentialsShouldBeDeletedAtTime: number;
	emptyFile: string;
}

export const DEFALUT_ONEDRIVE_SETTING: OneDriveSetting = {
	clientId: "",
	accessToken: "",
    authority: "",
    refreshToken: "",
    accessTokenExpiresInSeconds: 0,
    accessTokenExpiresAtTime: 0,
    deltaLink: "",
    username: "",
    credentialsShouldBeDeletedAtTime: 0,
    emptyFile: "skip"
}
