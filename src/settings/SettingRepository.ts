import SelfVaultSync from "src/main";
import {
	DEFAULT_SETTINGS,
	SelfVaultSyncSettings,
} from "./SelfValutSyncSettings";

export interface SettingRepository {
	loadSettings(): Promise<SelfVaultSyncSettings>;
	saveSettings(settings: SelfVaultSyncSettings): void;
}

export class SettingRepositoryImpl implements SettingRepository {
	private settings: SelfVaultSyncSettings;
	private plugin: SelfVaultSync;

	constructor(plugin: SelfVaultSync) {
		this.plugin = plugin;
	}

	async loadSettings(): Promise<SelfVaultSyncSettings> {
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
		this.settings = this.deepMerge(structuredClone(DEFAULT_SETTINGS), await this.plugin.loadData())
		return this.settings;
	}

	async saveSettings(settings: SelfVaultSyncSettings) {
		// console.log(settings.storage.constructor.name);
		// if (settings.storage instanceof OneDriveSetting) {
		// 	this.settings.type = OneDriveSetting.type;
		// 	this.settings.onedrive = settings.storage as OneDriveSetting;
		// } else {
		// 	throw new Error("Unsupported type");
		// }
		await this.plugin.saveData(settings);
	}
	private isObject(item: any): boolean {
		return item && typeof item === "object" && !Array.isArray(item);
	}

	private deepMerge(target: any, source: any) {
		const output = Object.assign({}, target);
		if (this.isObject(target) && this.isObject(source)) {
			Object.keys(source).forEach((key) => {
				if (this.isObject(source[key])) {
					if (!(key in target)) {
						Object.assign(output, { [key]: source[key] });
					} else {
						output[key] = this.deepMerge(target[key], source[key]);
					}
				} else {
					Object.assign(output, { [key]: source[key] });
				}
			});
		}
		return output;
	}
}