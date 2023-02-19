import WebSocket = require("ws");
import { IncomingMessage } from "http"
import App from "./App";
import { ModelGameServer } from "../entity/GameServers";
import { read } from "fs";

interface IServer {
	id: number;
	ip: string;
	port: number;
	name: string;
	map: string;
	players: IPlayers[];
	webSocket: WebSocket;
}

interface IPlayers {
	id: number;
	steamid64: number;
	name: string;
	session: number;
}

export class GameServerControl  {
	private _servers: IServer[];
	private _wss: WebSocket.Server;
	
	constructor() {
		this._servers = [];
		this._wss = new WebSocket.Server({ port: App.settings.gameServerPort, host: '0.0.0.0'});
		this._WSGameServerInit();
	}

	private _WSGameServerInit() {
		this._wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
			ws.on('open', async () => {
				// req.headers['x-forwarded-for'] for nginx proxy
				const ip = req.socket.remoteAddress;
				const key = req.headers['sat-auth-key']?.toString();
				
				if(ip === undefined || key === undefined) {
					ws.close(1008);
					return;
				}

				const res = await App.DataSource.manager.findOneBy(ModelGameServer, { ip: ip, key: key });
				if(res === null) {
					ws.close(1007);
					return;
				}

				const srv: IServer = { id: res.id, ip: res.ip, map: '', name: '', port: res.port, webSocket: ws, players: [] }
				this._servers.push(srv);
			});

			ws.on('message', async (message: string) => {
				console.log(message);
			});
			
			ws.on('error', async(err) => {
				console.log(err);
			})
		});
	}
}