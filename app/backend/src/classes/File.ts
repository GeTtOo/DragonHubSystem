import FS from "fs";
import Path from "path";

export class files {
	private _name: string;
	private _path: string;
	private _parameters: object;

	constructor(name: string, parameters: object) {
		this._name = name;
		this._parameters = parameters;
		this._path = 
			Path.join(process.cwd(), 
			process.env.NODE_ENV === 'development' ? '/src/config' : 'config'
		);
		this.initFile();
	}

	public get parametrs(): object {
		return this._parameters
	}

	public set parametrs(params) {
		this._parameters = params;
	}

	private initFile(): void {
		if(!FS.existsSync(this._path))
			FS.mkdirSync(this._path, { recursive: true });

		const filePath = Path.join(this._path, this._name + '.json');

		if(FS.existsSync(filePath))
			this.ReadFile();
		else 
			this.SaveFile();
	}
	
	public ReadFile(): object {
		const filePath: string = Path.join(this._path, this._name + '.json');
		const data: string = FS.readFileSync(filePath, { encoding: 'utf8', flag: 'r'})
		this._parameters = JSON.parse(data);
		return this._parameters;
	}

	public SaveFile(): void {
		const filePath = Path.join(this._path, this._name + '.json');
		
		FS.writeFile(filePath, JSON.stringify(this._parameters, null, 4), error => {
			if(error) {
				console.error('Error when creating the settings file: ' + error);
				process.exit(1);
			}
		});
	}

	public static GenerateKey(len: number): string {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=,.?';
		const charactersLength = characters.length;
		let result = '';
	
		for(let i = 0; i < len; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	
		return result;
	}
}