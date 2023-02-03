import FS from "fs";
import Path from "path";
import Express, { Application, Request, Response } from "express";
import * as http from 'http';
import WebSocket from "ws";
import { GameServer } from "./utils/gameServer";
import { AppDataSource } from "./utils/data-source"
import { IGlobalConfig, Settings } from "./utils/settings"

const Config = new Settings('core', { port: 3000, useStatic: false, staticDir: "", apiKey: GenerateAPIKey() } as IGlobalConfig).getGlobalConfig();
const GameServers = new GameServer(Config.apiKey);
const app: Application = Express();
const port: number = Config.port;
const server: http.Server = http.createServer(app);
const wss: WebSocket.Server = new WebSocket.Server({ port: 3001, });

AppDataSource.initialize().catch((err) => {
	console.error(`Error during Data Source initialization: ${err}`);
	process.exit(1);
});

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
if(Config.useStatic) app.use(Express.static(Config.staticDir));

wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
	//TODO: Logger
	/*setTimeout(() => {
		if(req.socket.remoteAddress !== undefined && GameServers.getServer(req.socket.remoteAddress) !== null)
			return;
		
		console.log('The connection was terminated because the server was not authorized\nServer ip: ' + req.socket.remoteAddress);
		ws.close();
	}, 5000);*/

	ws.on('message', (message: string) => {
		console.log(req.socket.remoteAddress);
		console.log(message.toString());
	})

	//console.log(req.socket.remoteAddress);
})

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
	const modulesPath: string = Path.join(process.cwd(), 
								process.env.NODE_ENV === 'development' ? 'src/modules' : 'modules');

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

function GenerateAPIKey(): string {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=,.?';
	const charactersLength = characters.length;
	let result = '';

	for(let i = 0; i < 256; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

    return result;
}

StartApp();