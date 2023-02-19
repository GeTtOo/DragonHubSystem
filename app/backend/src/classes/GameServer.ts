import FS from "fs";
import Path from "path";
import WebSocket from "ws";
import { IncomingMessage } from "http"
import App from "./App";
import { ModelGameServer } from "../entity/GameServers";

export interface IServer {
	id: number;
	ip: string;
	port: number;
	name: string;
	map: string;
	players: IPlayers[];
	webSocket?: WebSocket;
}

export interface IPlayers {
	id: number;
	steamid64: number;
	name: string;
	session: number;
}

export class GameServerControl  {
	private _wss: WebSocket.Server;
	private _servers: Map<WebSocket, IServer> = new Map<WebSocket, IServer>();
	//private _wsPackets: { [key: number]: Array<(ws: WebSocket, message: object) => void> } = {};
	private _packetsList: { [key: number]: (ws: WebSocket, message: object) => void } = {};
	
	constructor() {
		this._wss = new WebSocket.Server({ port: App.settings.gameServerPort, host: '0.0.0.0'});
		this._WSGameServerInit();

		(async () => {
			const dir: string = Path.join(process.cwd(), process.env.NODE_ENV === 'development' ? 'src/game-server-packets' : 'game-server-packets');
			const files = await FS.promises.readdir(dir);
			
			for (const file of files) {
				if (file.endsWith('.ts')) {
					const { [file.split('.')[0]]: PacketClass } = await import(Path.join(dir, file));
					const packetid = PacketClass.packetId;

					this._packetsList[packetid] = PacketClass;
				}
			}
		})();
	}

	private _WSGameServerInit() {
		this._wss.on('connection', (ws: WebSocket, req: IncomingMessage) => {
			ws.on('open', async () => {
				const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress;
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
				this._servers.set(ws, srv);
			});

			ws.on('message', async (message: string) => {
				const cmd = JSON.parse(message);

				if(cmd.id === undefined) return;
				
				if(cmd.id in this._packetsList) {
					this._packetsList[cmd.id](ws, cmd);
				}
				/*if(cmd.id in this._wsPackets) {
					this._wsPackets[cmd.id].forEach(fn => fn(ws, cmd));
				}*/
			});
			
			ws.on('error', async(err) => {
				console.log(err);
			})
		});
	}
	
	/*
	public Subscribe(code: number, callback: (ws: WebSocket, packet: object) => void) {
		if(!(code in this._wsPackets)) {
			this._wsPackets[code] = [];
		}
		
		this._wsPackets[code].push(callback);
	}
	*/

	public SetServerInfo(ws: WebSocket, name?: string, map?: string, players?: IPlayers[]) {
		if(!name && !map && !players) {
			throw new Error('When setting the server value, the data was not filled in')
		}

		const srv = this._servers.get(ws)
		if (!srv) throw new Error('Server not found');
		if (name) srv.name = name;
		if (map) srv.map = map;
		if (players) srv.players = players;
	}

	public SetServerMap(ws: WebSocket, map: string) {
		const srv = this._servers.get(ws)
		if (!srv) throw new Error('Server not found');
		srv.map = map;
	}

	public SetServerPlayers(ws: WebSocket, players: IPlayers[]) {
		const srv = this._servers.get(ws)
		if (!srv) throw new Error('Server not found');
		srv.players = players;
	}

	public GetServersInfo(): IServer[] {
		const servers: IServer[] = Array.from(this._servers, ([ws, item]) => {
			return {
				id: item.id,
				ip: item.ip,
				port: item.port,
				map: item.map,
				name: item.name,
				players: item.players,
			};
		});

		return servers;
	}
}