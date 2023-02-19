import { files } from "../File";

interface IGlobalConfig {
	port: number;
	gameServerPort: number;
	useStatic: boolean;
	staticDir: string;
	apiKey: string;
}

export class GlobalConfig extends files {
	constructor(name: string, params?: IGlobalConfig) {
		if(!params) {
			params = {
				port: 3000,
				gameServerPort: 3001,
				useStatic: false,
				staticDir: '/',
				apiKey: files.GenerateKey(256)
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