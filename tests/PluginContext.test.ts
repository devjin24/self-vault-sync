import { PluginContext } from "src/PluginContext";
import { mockApp, mockManifest, MockSelfVaultSync } from "./__mocks__/Obsidian";

describe("PluginContext", () => {
	let pluginContext: PluginContext;

	beforeEach(() => {
		pluginContext = new PluginContext(
			new MockSelfVaultSync(mockApp, mockManifest)
		);
	});


	test("should initialize with OneDrive storage", () => {
		// const options = pluginContext.storageOptions();
		// expect(options.size).toBe(1);
		// expect(options.get("onedrive")).toBeDefined();
	});

	test("should initialize storage map correctly", async () => {
		// // Given
		// const mockSettings = {
		// 	type: "onedrive",
		// 	onedrive: {
		// 		clientId: "test-client-id",
		// 	},
		// };

		// mockSettingRepo.saveSettings(mockSettings as SelfVaultSyncSettings);
		// // When
		// await pluginContext.init();
		// const settings = (pluginContext as any).settings;
		// expect(settings.type == "onedrive");
	});

	test("onChangeType", async () => {
		// await pluginContext.init(); 
		// expect(async () => {
		// 	pluginContext.onChangeType("googledrive");
		// }).rejects.toThrow(Error);
		// expect(pluginContext.service.type == "onedrive")
	})
});
