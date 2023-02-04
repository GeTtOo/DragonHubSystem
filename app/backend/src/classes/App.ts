import FS from "fs";
import Path from "path";
import { GlobalConfig } from "./config/GlobalSettings";
import Express, { Application } from "express";
import { AppDataSource } from "../utils/data-source"

interface IAppInit {
	middleWares: any; 
	controllers: any;
}

class App {
	public app: Application;
	public port: number;
	private _settings = new GlobalConfig('core').setting;

	constructor(appInit: IAppInit) {
		this.app = Express();
		this.app.use(Express.json());
		this.app.use(Express.urlencoded({ extended: true }));
		this.port = this._settings.port;

		AppDataSource.initialize().catch((err) => {
			console.error(`Error during Data Source initialization: ${err}`);
			process.exit(1);
		});

		this.middlewares(appInit.middleWares);
		this.routes(appInit.controllers);
		this.assets();
		this.LoadModules();
	}

	private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
		middleWares.forEach(middleWare => {
			this.app.use(middleWare)
		})
    }

	private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
		controllers.forEach(controller => {
			this.app.use('/', controller.router)
		})
	}

	private assets() {
		if(this._settings.useStatic) {
			this.app.use(Express.static(this._settings.staticDir));
		}
	}
	//TODO: fix this...
	private async LoadModules() {
		const modulesPath: string = 
			Path.join(process.cwd(), process.env.NODE_ENV === 'development' ? 'src/modules' : 'modules');
	
		if(FS.existsSync(modulesPath)) {
			const modulesFiles: string[] = FS.readdirSync(modulesPath).filter(file => file.endsWith('.js'));
			
			for (const file of modulesFiles) {
				try {
					const filePath: string = Path.join(modulesPath, file);
					const module = require(filePath);
					
					if(module.type === 'router')
						this.app.use('/' + module.name, module.router);
				} catch(err) {
					console.error(`Error loading module ${file}: ` + err);
				}
			}
		} else {
			FS.mkdirSync(modulesPath, { recursive: true });
		}
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server successfully start on port ${this.port}`)
		})
	}
}

export { App as default, AppDataSource as ADS };