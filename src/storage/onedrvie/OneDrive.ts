import { Storage } from "../Storage";
import { OneDriveSetting } from "./OneDriveSetting";

export class OneDrive implements Storage<OneDriveSetting> {
	type = "onedrive"
	label = "OneDrive"
	constructor() {}
}
