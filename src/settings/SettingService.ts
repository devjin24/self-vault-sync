import { OnedriveSetting } from "src/onedrive/Onedrive";
import { SelfVaultSyncSettings } from "./SelfValutSyncSettings";

export class SettingManager {
	private settings: SelfVaultSyncSettings
	private loadData: () => Promise<any>;
	private saveData: (data:any) => Promise<any>;

	constructor(loadData: () => Promise<any>, saveData: (data:any) => Promise<any>) {
		this.loadData = loadData.bind(this);
		this.saveData = saveData
		this.loadSettings()
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			structuredClone(new SelfVaultSyncSettings(new OnedriveSetting())),
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
