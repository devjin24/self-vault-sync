import SelfVaultSync from "src/main";
import {
	DEFAULT_SETTINGS,
	SelfVaultSyncSettings,
} from "./SelfValutSyncSettings";

export interface SettingRepository {
	loadSettings(): Promise<SelfVaultSyncSettings>;
	saveSettings(settings: SelfVaultSyncSettings): Promise<void>;
}

export class SettingRepositoryImpl implements SettingRepository {
	private plugin: SelfVaultSync;

	constructor(plugin: SelfVaultSync) {
		this.plugin = plugin;
	}

	async loadSettings(): Promise<SelfVaultSyncSettings> {
		return this.deepMerge(
			structuredClone(DEFAULT_SETTINGS),
			await this.plugin.loadData()
		);
	}

	async saveSettings(settings: SelfVaultSyncSettings): Promise<void> {
		return await this.plugin.saveData(settings);
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
