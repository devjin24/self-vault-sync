export interface SettingComponent {
	render(
		containerEl: HTMLElement,
		onChange: () => Promise<void>
	): void;

}
