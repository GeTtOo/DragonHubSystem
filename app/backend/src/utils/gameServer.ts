interface IServer {
	ip: string;
	port: number;
	name: string;
	players: iPlayers[];
	webSocket: WebSocket;
}

interface iPlayers {
	id: number;
	session: number;
}

export class GameServer {
	private _servers: IServer[];
	
	constructor(key:string) {
		this._servers = [];
	}

	public pustServer(server: IServer) {
		this._servers.push(server);
	}

	public getServers(): IServer[] {
		return this._servers;
	}

	public getServer(ip: string): IServer | null {
		let server: IServer | undefined = this._servers.find(server => server.ip === ip);

		if(server !== undefined)
			return server;	
		else 
			return null;
	}

	public dropServer() {

	}

}