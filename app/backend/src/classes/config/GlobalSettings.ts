import { files } from "../File";

interface IGlobalConfig {
	port: number;
	useStatic: boolean;
	staticDir: string;
	apiKey: string;
}

export class GlobalConfig extends files {
	constructor(name: string, params?: IGlobalConfig) {
		if(!params) {
			params = {
				port: 3000,
				useStatic: false,
				staticDir: '/',
				apiKey: files.GenerateKey(128)
			};
		}

		super(name, params as object);
	}

	public get setting(): IGlobalConfig {
		return this.parametrs as IGlobalConfig;
	}

	public set setting(settings: IGlobalConfig) {
		this.parametrs = settings;
	}
}