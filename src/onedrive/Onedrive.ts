export interface OnedriveConfig {
	accessToken: string;
	clientID: string;
	authority: string;
	refreshToken: string;
	accessTokenExpiresInSeconds: number;
	accessTokenExpiresAtTime: number;
	deltaLink: string;
	username: string;
	credentialsShouldBeDeletedAtTime?: number;
	remoteBaseDir?: string;
	emptyFile: "skip" | "error";
	kind: "onedrive";
}

export const DEFAULT_ONEDRIVE_CONFIG: OnedriveConfig = {
	accessToken: "",
	clientID: "",
	authority: "",
	refreshToken: "",
	accessTokenExpiresInSeconds: 0,
	accessTokenExpiresAtTime: 0,
	deltaLink: "",
	username: "",
	credentialsShouldBeDeletedAtTime: 0,
	emptyFile: "skip",
	kind: "onedrive",
};
