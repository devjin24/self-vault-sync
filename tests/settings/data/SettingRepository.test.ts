import { App, PluginManifest } from "obsidian";
import SelfVaultSync from "src/main";
import {
	DEFAULT_SETTINGS,
	SelfVaultSyncSettings,
} from "src/settings/SelfValutSyncSettings";
import {
	SettingRepository,
	SettingRepositoryImpl,
} from "src/settings/SettingRepository";
import { DEFALUT_ONEDRIVE_SETTING } from "src/storage/onedrvie/OneDriveSetting";

const mockApp = {
	workspace: {},
	vault: {},
} as App;

const mockManifest: PluginManifest = {
	id: "test-plugin",
	name: "Test Plugin",
	version: "1.0.0",
	minAppVersion: "0.15.0",
	author: "test",
	description: "test",
};

class MockSelfVaultSync extends SelfVaultSync {
	settingRepo: SettingRepository;
	private mockData: any = {};

	constructor(app: App, manifest: PluginManifest) {
		super(app, manifest);
	}

	async loadData(): Promise<any> {
		return this.mockData;
	}

	async saveData(data: any): Promise<void> {
		this.mockData = data;
	}
}

describe("SettingRepository", () => {
	let settingRepository: SettingRepository;
	let mockPlugin: MockSelfVaultSync;

	beforeEach(() => {
		mockPlugin = new MockSelfVaultSync(mockApp, mockManifest);
		settingRepository = new SettingRepositoryImpl(mockPlugin);
	});

	describe("loadSettings", () => {
		it("should load OneDrive settings correctly", async () => {
			// Given
			const mockData = {
				type: "onedrive",
				onedrive: {
					clientId: "test-client-id",
				},
			};
			await mockPlugin.saveData(mockData);
			// When
			const settings = await settingRepository.loadSettings();

			// Then
			console.log(settings);
			// expect(settings).toBeInstanceOf(SelfValutSyncSettings);
			// expect(settings.storage).toBeInstanceOf(OneDriveSetting);
			// expect(settings.storage.clientId).toBe("test-client-id");
			// expect(settings.storage.clientSecret).toBe("test-secret");
		});
	});

	describe("saveSettings", () => {
		it("should save OneDrive settings correctly", async () => {
			// Given
			const oneDriveSetting = structuredClone(DEFALUT_ONEDRIVE_SETTING);
			oneDriveSetting.clientId = "new-client-id";

			const settings = structuredClone(DEFAULT_SETTINGS) as SelfVaultSyncSettings;
			settings.onedrive = oneDriveSetting

			// When
			await settingRepository.saveSettings(settings);

			// Then
			const result = await mockPlugin.loadData();
			console.log(result);
		});
	});
});
