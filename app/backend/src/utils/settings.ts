import FS from "fs";
import Path from "path";

export interface IDatabase {
	host: string;
	port: number;
	database: string;
	username: string;
	password: string;
}

export interface IGlobalConfig {
	port: number;
	useStatic: boolean;
	staticDir: string;
}

export class Settings {

	readonly name: string;
	parameters: IDatabase | IGlobalConfig;

	constructor(name: string, parameters: IDatabase | IGlobalConfig) {
		this.name = name;
		this.parameters = parameters;
		this.readConfFile();
	}

	public getGlobalConfig(): IGlobalConfig {
		return this.parameters as IGlobalConfig
	}

	public getDatabaseConfig(): IDatabase {
		return this.parameters as IDatabase
	}

	private readConfFile(): void {
		const confPath: string = Path.join(process.cwd(), 
								 process.env.NODE_ENV === 'development' ? 'app/backend/src/config' : 'config');

		if(!FS.existsSync(confPath))
			FS.mkdirSync(confPath, { recursive: true });

		const filePath = Path.join(confPath, this.name + '.json');

		if(FS.existsSync(filePath)) {
			const data: string = FS.readFileSync(filePath, { encoding: 'utf8', flag: 'r'})
			this.parameters = JSON.parse(data);
		} else {
			FS.writeFile(filePath, JSON.stringify(this.parameters, null, 4), error => {
				if(error) {
					console.error('Error when creating the settings file: ' + error);
					process.exit(1);
				}
			});
		}
	}
}