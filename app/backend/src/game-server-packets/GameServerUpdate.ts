import App from "../classes/App";
import WebSocket from "ws";
import { IPlayers } from "../classes/GameServer";

interface IGameServerInit {
	action: string;
	name?: string;
	map?: string;
	players?: IPlayers[];
}

export class GameServerUpdate {
	public static packetId: number = 10;

	constructor(ws: WebSocket, pck: IGameServerInit) {
		const { action, name, map, players } = pck;
	
		if (action === "init" && name) {
			this.SetCore(ws, name);
		} else if (action === "update-map" && map) {
			this.SetMap(ws, map);
		} else if (action === "update-players" && players) {
			this.SetPlayers(ws, players);
		} else {
			console.error("Error when submitting a command from the game server: command was not found");
		}
	}

	private SetCore(ws: WebSocket, name: string) {
		App.GameServer.SetServerInfo(ws, name);
	}

	private SetMap(ws: WebSocket, map: string) {
		App.GameServer.SetServerMap(ws, map);
	}

	private SetPlayers(ws: WebSocket, players: IPlayers[]) {
		App.GameServer.SetServerPlayers(ws, players);
	}
}
