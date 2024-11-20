import { StorageSetting } from "../StorageSetting";


export interface GoogleDriveSetting extends StorageSetting {
	accessToken: string;
}

export const DEFALUT_GOOGLEDRIVE_SETTING: GoogleDriveSetting = {
	accessToken: "",
};
