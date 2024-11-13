import SelfVaultSync from "src/main";
import { DEFAULT_DATA, SelfVaultSyncDataJson } from "./SelfValutSyncDataJson";

export interface SettingRepository {
	loadSettings(): Promise<SelfVaultSyncDataJson>;
}

export class SettingRepositoryImpl implements SettingRepository {
	private dataJson: SelfVaultSyncDataJson;
	private plugin: SelfVaultSync;

	constructor(plugin: SelfVaultSync) {
		this.plugin = plugin;
	}

	async loadSettings(): Promise<SelfVaultSyncDataJson> {
		// this.dataJson = Object.assign<SelfVaultSyncDataJson, Partial<SelfVaultSyncDataJson>>(
		// 	{} as SelfVaultSyncDataJson,
		// 	// structuredClone(
		// 	// 	new SelfVaultSyncDataJson(new OneDriveSetting())
		// 	// ),
		// 	DEFAULT_DATA,
		// 	await this.plugin.loadData()
		// );
		// if (this.dataJson.type === OneDriveSetting.type) {
		// 	return new SelfValutSyncSettings(this.dataJson.onedrive);
		// } else {
		// 	throw new Error("Unsupported type");
		// }
		this.dataJson = {
			...DEFAULT_DATA,
			...(await this.plugin.loadData()),
		} as SelfVaultSyncDataJson;
		return this.dataJson;
	}

	// async saveSettings(settings:SelfValutSyncSettings) {
	// 	console.log(settings.storage.constructor.name)
	// 	if (settings.storage instanceof OneDriveSetting) {
	// 		this.dataJson.type = OneDriveSetting.type
	// 		this.dataJson.onedrive = settings.storage as OneDriveSetting;
	// 	} else {
	// 		throw new Error("Unsupported type")
	// 	}
	// 	await this.plugin.saveData(this.dataJson);
	// }
}
