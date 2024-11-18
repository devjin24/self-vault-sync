import { PluginContext } from "src/PluginContext";
import { SelfVaultSyncSettings } from "src/settings/SelfValutSyncSettings";
import { SettingRepository, SettingRepositoryImpl } from "src/settings/SettingRepository";
import { mockApp, mockManifest, MockSelfVaultSync } from "./__mocks__/Obsidian";

describe("PluginContext", () => {
	let mockSettingRepo: SettingRepository;
	let pluginContext: PluginContext;

	beforeEach(() => {
		mockSettingRepo = new SettingRepositoryImpl(
			new MockSelfVaultSync(mockApp, mockManifest)
		);
		pluginContext = new PluginContext(mockSettingRepo);
	});


	test("should initialize with OneDrive storage", () => {
		const options = pluginContext.storageOptions();
		expect(options.size).toBe(1);
		expect(options.get("onedrive")).toBeDefined();
	});

	test("should load settings and initialize service", async () => {
		// Given
		const mockSettings = {
			type: "onedrive",
			onedrive: {
				clientId: "test-client-id",
			},
		};
		
		mockSettingRepo.saveSettings(mockSettings as SelfVaultSyncSettings)

		// When
		await pluginContext.onload();

		// Then
		const service = pluginContext.getService();
		console.log("Initialized service:", service);
		expect(service).toBeDefined();
	});

	test("should initialize storage map correctly", async () => {
		// Given
		const mockSettings = {
			type: "onedrive",
			onedrive: {
				clientId: "test-client-id",
			},
		};

		mockSettingRepo.saveSettings(mockSettings as SelfVaultSyncSettings);
		// When
		await pluginContext.onload();
		const settings = (pluginContext as any).settings;
		expect(settings.type == "onedrive");
	});
});
