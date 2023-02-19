import FS from "fs";
import Path from "path";
import Express from "express";
import { GameServerControl } from "./GameServer";
import { AppDataSource } from "../utils/data-source"
import { GlobalConfig } from "./config/GlobalSettings";

interface IAppInit {
	middleWares: any; 
	controllers: any;
}

class App {
	public static WebServer: Express.Application;
	public static GameServer: GameServerControl;
	public static DataSource = AppDataSource;
	private static _port: number;
	public static readonly settings = new GlobalConfig('core').setting;

	public static async Init(appInit: IAppInit) {
		App.WebServer = Express();
		App.WebServer.use(Express.json());
		App.WebServer.use(Express.urlencoded({ extended: true }));
		App._port = App.settings.port;

		await App.DataSource.initialize().catch((err) => {
			console.error(`Error during Data Source initialization: ${err}`);
			process.exit(1);
		});

		App.Assets();
		App.Middlewares(appInit.middleWares);
		App.Routes(appInit.controllers);
		App.GameServer = new GameServerControl();
		App.LoadModules();
	}

	private static Middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
		middleWares.forEach(middleWare => {
			App.WebServer.use(middleWare)
		})
	}

	private static Routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
		controllers.forEach(controller => {
			App.WebServer.use('/', controller.router)
		})
	}

	private static Assets() {
		if(App.WebServer.settings.useStatic) {
			App.WebServer.use(Express.static(App.settings.staticDir));
		}
	}
	//TODO: fix this...
	private static async LoadModules() {
		const modulesPath: string = 
			Path.join(process.cwd(), process.env.NODE_ENV === 'development' ? 'src/modules' : 'modules');
	
		if(FS.existsSync(modulesPath)) {
			const modulesFiles: string[] = FS.readdirSync(modulesPath).filter(file => file.endsWith('.js'));
			
			for (const file of modulesFiles) {
				try {
					const filePath: string = Path.join(modulesPath, file);
					const module = require(filePath);
					
					if(module.type === 'router')
						App.WebServer.use('/' + module.name, module.router);
				} catch(err) {
					console.error(`Error loading module ${file}: ` + err);
				}
			}
		} else {
			FS.mkdirSync(modulesPath, { recursive: true });
		}
	}

	public static Listen() {
		App.WebServer.listen(App._port, () => {
			console.log(`Server successfully start on port ${App._port}`);
		})
		//App.GameServer.Subscribe(10, (ws: WebSocket, msg: object) => { console.log(msg) })
	}
}

export default App;