import { App, PluginManifest } from "obsidian";
import SelfVaultSync from "src/main";

export const mockApp = {
	workspace: {},
	vault: {},
} as App;

export const mockManifest: PluginManifest = {
	id: "test-plugin",
	name: "Test Plugin",
	version: "1.0.0",
	minAppVersion: "0.15.0",
	author: "test",
	description: "test",
};

export class MockSelfVaultSync extends SelfVaultSync {
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

export const mockPlugin = new MockSelfVaultSync(mockApp, mockManifest);
