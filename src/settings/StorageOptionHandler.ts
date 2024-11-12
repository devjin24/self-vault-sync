
export class StorageOptionHandler {
	options: Map<string, string>;

	constructor(options: Map<string, string>) {
		this.options = options
	}

	onChange(val:string){
		console.log(val)
	}
}
