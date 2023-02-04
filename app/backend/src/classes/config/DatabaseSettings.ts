import { files } from "../File";

interface IDatabase {
	host: string;
	port: number;
	database: string;
	username: string;
	password: string;
}

export class DatabaseConfig extends files {
	constructor(name: string, paramets?: IDatabase) {
		if(!paramets) {
			paramets = {
				host: 'localhost',
				port: 3306,
				database: '',
				username: '',
				password: ''
			};
		}

		super(name, paramets);
	}

	public get setting(): IDatabase {
		return this.parametrs as IDatabase;
	}

	public set setting(settings: IDatabase) {
		this.parametrs = settings;
	}
}