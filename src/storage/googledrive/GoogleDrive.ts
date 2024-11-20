import { SettingComponent } from "src/settings/SettingComponent";
import { AbstractStorage } from "../AbstractStorage";
import { GoogleDriveSetting } from "./GoogleDriveSetting";


export class GoogleDrive extends AbstractStorage<GoogleDriveSetting> {
	type: string = "googledrive";
	label: string = "Google Drive";

	getSettingCompoenent(): SettingComponent {
		throw new Error("Method not implemented.");
	}
}
