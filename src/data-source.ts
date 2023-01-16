import "reflect-metadata"
import { DataSource } from "typeorm"
import { Players } from "./entity/Players"
import { BansList } from "./entity/BansList"
import { MuteList } from "./entity/MuteList"
import { Inventory } from "./entity/Inventory"
import { Admins } from "./entity/Admins"
import { AdminsGroups } from "./entity/AdminsGroups"

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "web",
	password: "12345",
	database: "dragonhub",
	synchronize: true,
	logging: false,
	entities: [Players, BansList, MuteList, Inventory, Admins, AdminsGroups],
	migrations: [],
	subscribers: [],
})
