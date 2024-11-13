
import { App, PluginManifest } from "obsidian";
import SelfVaultSync from "../../../src/main";
import { SettingRepository, SettingRepositoryImpl } from "../../../src/settings/data/SettingRepository";



// Mock App과 PluginManifest
const mockApp = {
    workspace: {},
    vault: {}
} as App;

const mockManifest: PluginManifest = {
    id: 'test-plugin',
    name: 'Test Plugin',
    version: '1.0.0',
    minAppVersion: '0.15.0',
	author: 'test',
	description: 'test'
};

// Mock SelfVaultSync
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

    // 테스트용 헬퍼 메서드
    setMockData(data: any) {
        this.mockData = data;
    }
}

// jest.setup.js
jest.mock('obsidian', () => ({
    App: jest.fn(),
    Plugin: jest.fn().mockImplementation(() => ({
        loadData: jest.fn(),
        saveData: jest.fn(),
    })),
    PluginManifest: jest.fn(),
}), {virtual: true});

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
					clientSecret: "test-secret",
				},
			};
			// mockPlugin.setMockData(mockData);

			// When
			const settings = await settingRepository.loadSettings();

			// Then
			// expect(settings).toBeInstanceOf(SelfValutSyncSettings);
			// expect(settings.storage).toBeInstanceOf(OneDriveSetting);
			// expect(settings.storage.clientId).toBe("test-client-id");
			// expect(settings.storage.clientSecret).toBe("test-secret");
		});

		// it("should throw error for unsupported type", async () => {
		// 	// Given
		// 	// mockPlugin.setMockData({ type: "unsupported" });

		// 	// When & Then
		// 	await expect(settingRepository.loadSettings()).rejects.toThrow(
		// 		"Unsupported type"
		// 	);
		// });
	});

	// describe("saveSettings", () => {
	// 	it("should save OneDrive settings correctly", async () => {
	// 		// Given
	// 		const oneDriveSetting = new OneDriveSetting();
	// 		oneDriveSetting.clientId = "new-client-id";
	// 		const settings = new SelfValutSyncSettings(oneDriveSetting);

	// 		// When
	// 		await settingRepository.saveSettings(settings);

	// 		// Then
	// 		const savedData = await mockPlugin.loadData();
	// 		expect(savedData.type).toBe(OneDriveSetting.type);
	// 		expect(savedData.onedrive.clientId).toBe("new-client-id");
	// 		expect(savedData.onedrive.clientSecret).toBe("new-secret");
	// 	});

	// 	it("should throw error for unsupported storage type", async () => {
	// 		// Given
	// 		const invalidSettings = new SelfValutSyncSettings({} as any);

	// 		// When & Then
	// 		await expect(
	// 			settingRepository.saveSettings(invalidSettings)
	// 		).rejects.toThrow("Unsupported type");
	// 	});
	// });
});
