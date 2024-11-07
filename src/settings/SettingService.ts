import { SettingReposigory } from "./data/SettingRepository"
import { SelfValutSyncSettings } from "./SelfValutSyncSettings"

export class SettingService {
	private repo: SettingReposigory
	private settings: SelfValutSyncSettings

	constructor(repo: SettingReposigory) {
		this.repo = repo
	}

	async loadSettings() {
		this.settings = await this.repo.loadSettings()
		console.log(this.settings)
	}

	async saveSettings() {
		await this.repo.saveSettings(this.settings)
	}
}
