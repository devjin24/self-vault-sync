import SelfVaultSync from "./main";
import { SelfVaultSyncSettings } from "./settings/SelfValutSyncSettings";
import {
	SettingRepository,
	SettingRepositoryImpl,
} from "./settings/SettingRepository";
import { SettingTabServiceFacade } from "./settings/SettingTabServiceFacade";
import { GoogleDrive } from "./storage/googledrive/GoogleDrive";
import { OneDrive } from "./storage/onedrvie/OneDrive";
import { Storage } from "./storage/Storage";
import { StorageSetting } from "./storage/StorageSetting";
import { TypeScriptExt } from "./TypeScriptExt";

export class PluginContext {
	private storages: Storage<StorageSetting>[] = [
		new OneDrive(),
		new GoogleDrive(),
	];
	private storageMap = new Map<string, Storage<StorageSetting>>(
		this.storages.map((storage) => [storage.type, storage])
	);

	settingTabService: SettingTabServiceFacade;
	private settings: SelfVaultSyncSettings;
	private storage: Storage<StorageSetting>;
	private repo: SettingRepository;

	constructor(plugin: SelfVaultSync) {
		this.repo = new SettingRepositoryImpl(plugin);
	}

	async init() {
		this.settings = await this.repo.loadSettings();
		this.storage = this.getStorage();
		this.settingTabService = new SettingTabServiceFacade(
			TypeScriptExt.mapValues(this.storageMap, (value) => {
				return value.label;
			}),
			{
				settings: () => this.settings,
				updateCommonSettings: this.updateCommonSettings,
				storage: this.getStorage,
				onChangeStorageSetting: this.onChangeStorageSetting
			}
		);
	}

	//setting 관리
	private updateCommonSettings = async  (key: keyof SelfVaultSyncSettings, value: any) => {
		this.settings = ({
			...this.settings,
			[key]: value,
		});
		await this.repo.saveSettings(this.settings);
	};

	private onChangeStorageSetting = async () => {
		this.settings[this.settings.type as keyof SelfVaultSyncSettings] =
			this.storage.getSetting();
		await this.repo.saveSettings(this.settings);
	};

	//rpeo
	private getStorage = () => {
		const storage =
			this.storageMap.get(this.settings.type) ??
			(() => {
				throw new Error(`Unknown storage type: ${this.settings.type}`);
			})();
		storage.setSetting(
			this.settings[this.settings.type as keyof SelfVaultSyncSettings]
		);
		return storage;
	};
}
	