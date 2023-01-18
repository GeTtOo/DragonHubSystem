import FS from "fs";
import Path from "path";
import Express, { Application, Request, Response } from "express";
import { AppDataSource } from "./utils/data-source"
import { IGlobalConfig, Settings } from "./utils/settings"

const Config = new Settings('core', { port: 3000, useStatic: false, staticDir: "" } as IGlobalConfig).getGlobalConfig();
const app: Application = Express();
const port: number = Config.port;

AppDataSource.initialize().catch((err) => {
	console.error(`Error during Data Source initialization: ${err}`);
	process.exit(1);
});

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
if(Config.useStatic) app.use(Express.static(Config.staticDir));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
	/*const user = await AppDataSource.manager.findOneBy(Players, {id: 3});
	
	if(user === null)
		return res.status(404).end();
	
	const item: Inventory = new Inventory();
	item.player = user;
	item.item = { name: "Test", description: "test item", timeStart: 0, timeEnd: 0, meta: {}};
	await AppDataSource.manager.save(item);*/
	
	return res.status(200).send({ status: 200});
});

async function StartApp() {
	try {
		app.listen(port, (): void => {
			console.log(`Server successfully start on port ${port}`);
			LoadModules();
		});
	} catch(err) {
		console.error(`Error when starting server: ${err}`);
	}
}

async function LoadModules() {
	const modulesPath: string = Path.join(process.cwd(), 'modules');

	if(FS.existsSync(modulesPath)) {
		const modulesFiles: string[] = FS.readdirSync(modulesPath).filter(file => file.endsWith('.js'));
		
		for (const file of modulesFiles) {
			try {
				const filePath: string = Path.join(modulesPath, file);
				const module = require(filePath);
				
				if(module.type === 'router')
					app.use('/' + module.name, module.router);
			} catch(err) {
				console.error(`Error loading module ${file}: ` + err);
			}
		}
	} else {
		FS.mkdirSync(modulesPath, { recursive: true });
	}
}

StartApp();