
import { AbstractStorage } from "../AbstractStorage";
import { OneDriveSetting } from "./OneDriveSetting";
export class OneDrive extends AbstractStorage<OneDriveSetting> {
	type = "onedrive";
	label = "OneDrive";
}
