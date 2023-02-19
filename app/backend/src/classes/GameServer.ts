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
	private _packetsList: Map <number, (ws: WebSocket, message: object) => void> = new Map();
	
	constructor() {
		this._wss = new WebSocket.Server({ port: App.settings.gameServerPort, host: '0.0.0.0'});
		this._WSGameServerInit();

		(async () => {
			const dir: string = Path.join(process.cwd(), process.env.NODE_ENV === 'development' ? 'src/game-server-packets' : 'game-server-packets');
			const files = await FS.promises.readdir(dir);
			
			for (const file of files) {
				if (file.endsWith('.ts')) {
					const { [file.split('.')[0]]: PacketClass } = await import(Path.join(dir, file));
					this._packetsList.set(PacketClass.packetId, PacketClass);
				}
			}
		})();
	}

	private _WSGameServerInit() {
		this._wss.on('connection', async (ws: WebSocket, req: IncomingMessage) => {
			try {
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

				ws.on('message', (message: string) => {
					const cmd = JSON.parse(message);

					if(cmd.id === undefined) return;
					
					const pckClass = this._packetsList.get(cmd.id);
					if(pckClass !== undefined) {
						new (pckClass as any)(ws, cmd);
					}
				});
				
				ws.on('error', (err) => {
					console.log(err);
				})
			} catch(err) {
				console.log(err);
			}
		});
	}

	public SetServerInfo(ws: WebSocket, name: string) {
		const srv = this._servers.get(ws)
		if (!srv) throw new Error('Server not found');
		srv.name = name;
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