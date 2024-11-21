import { StorageSetting } from "src/storage/StorageSetting";
import { SelfVaultSyncSettings } from "./SelfValutSyncSettings";
import { Storage } from "src/storage/Storage";

export class SettingTabServiceFacade {
	constructor(
		public readonly storageOptions: Map<string, string>,
		private service: {
			settings: () => SelfVaultSyncSettings;
			updateCommonSettings: (
				key: keyof SelfVaultSyncSettings,
				value: any
			) => Promise<void>;
			storage: () => Storage<StorageSetting>;
			onChangeStorageSetting: () => Promise<void>;
		}
	) {}

	storageSettingRender(containerEl: HTMLElement) {
		this.service
			.storage()
			.settingComponent.render(containerEl, this.service.onChangeStorageSetting);
	}

	currentType(): string {
		return this.service.settings().type;
	}
	async updateSettings(key: keyof SelfVaultSyncSettings, value: any) {
		await this.service.updateCommonSettings(key, value)
	}
}
