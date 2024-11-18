
class Plugin {
	constructor(app, manifest) {
		this.app = app;
		this.manifest = manifest;
	}
}

class PluginSettingTab {
	constructor(app, manifest) {
		this.app = app;
		this.manifest = manifest;
	}
}

jest.mock(
	"obsidian",
	() => ({
		App: jest.fn(),
		Plugin,
		PluginManifest: jest.fn(),
		PluginSettingTab,
	}),
	{ virtual: true }
);
