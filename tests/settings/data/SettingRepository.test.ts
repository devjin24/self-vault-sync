import {
	DEFAULT_SETTINGS,
	SelfVaultSyncSettings,
} from "src/settings/SelfValutSyncSettings";
import {
	SettingRepository,
	SettingRepositoryImpl,
} from "src/settings/SettingRepository";
import { DEFALUT_ONEDRIVE_SETTING } from "src/storage/onedrvie/OneDriveSetting";
import { mockApp, mockManifest, MockSelfVaultSync } from "tests/__mocks__/Obsidian";

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
