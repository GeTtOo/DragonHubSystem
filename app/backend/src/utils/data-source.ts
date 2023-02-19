import Path from "path"
import { DataSource } from "typeorm"
import { DatabaseConfig } from "../classes/config/DatabaseSettings"

const Config = new DatabaseConfig('database').setting;

export const AppDataSource = new DataSource({
	type: "mysql",
	host: Config.host,
	port: Config.port,
	database: Config.database,
	username: Config.username,
	password: Config.password,
	synchronize: true,
	logging: false,
	entities: [Path.join(process.cwd(), process.env.NODE_ENV === 'development' ? '/src/entity/*.ts' : 'entity/.ts')],
	migrations: [],
	subscribers: [],
})