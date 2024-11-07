import { OneDriveSetting } from "src/storage/onedrive/Onedrive";
import { SelfValutSyncSettings } from "../SelfValutSyncSettings";
import { SelfVaultSyncDataJson } from "./SelfValutSyncDataJson";

export class SettingReposigory {
	private dataJson: SelfVaultSyncDataJson
	private loadData: () => Promise<any>;
	private saveData: (data:any) => Promise<any>;

	constructor(loadData: () => Promise<any>, saveData: (data:any) => Promise<any>) {
		this.loadData = loadData
		this.saveData = saveData
	}

	async loadSettings():Promise<SelfValutSyncSettings> {
		this.dataJson = Object.assign(
			{},
			structuredClone(
				new SelfVaultSyncDataJson(OneDriveSetting.type, new OneDriveSetting())
			),
			await this.loadData()
		);
		if (this.dataJson.type === OneDriveSetting.type) {
			return new SelfValutSyncSettings(this.dataJson.onedrive);
		} else {
			throw new Error("Unsupported type");
		}
	}

	async saveSettings(settings:SelfValutSyncSettings) {
		console.log(settings.storage.constructor.name)
		if (settings.storage instanceof OneDriveSetting) {
			this.dataJson.type = OneDriveSetting.type
			this.dataJson.onedrive = settings.storage as OneDriveSetting;
		} else {
			throw new Error("Unsupported type")
		}			
		await this.saveData(this.dataJson);
	}
}
