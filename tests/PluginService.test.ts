import { PluginService } from "src/PluginService";
import { AbstractStorage } from "src/storage/AbstractStorage";
import { StorageSetting } from "src/storage/StorageSetting";

interface TestSettings extends StorageSetting {}

describe("PluginService", () => {
	const pluginService: PluginService = new PluginService(
		new (class extends AbstractStorage<TestSettings> {
			type: string = "test";
			label: string = "Test";
		})()
	);

	test("getType", () => {
		expect(pluginService.type == "test")
	});
});
