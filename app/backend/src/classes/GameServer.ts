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

/* WS test code 
import * as http from 'http';
import WebSocket from "ws";

//const server: http.Server = http.createServer(app);
const wss: WebSocket.Server = new WebSocket.Server({ port: 3001, host: '0.0.0.0'});

interface ITest {
	command: number
	data: object
}

wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
	//TODO: Logger, WS on Express port
	setTimeout(() => {
		if(req.socket.remoteAddress !== undefined && GameServers.getServer(req.socket.remoteAddress) !== null)
			return;
		
		console.log('The connection was terminated because the server was not authorized\nServer ip: ' + req.socket.remoteAddress);
		ws.close(1000);
	}, 5000);

	ws.on('message', (message: ITest) => {
		console.log(message)
		
		console.log(req.socket.remoteAddress);
		console.log(message.toString());
	})
})
*/