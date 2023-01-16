import Express, { Application, Request, Response } from "express";
import { AppDataSource } from "./data-source"
import { Players } from "./entity/Players"
import { Inventory } from "./entity/Inventory";

const app: Application = Express();
const port = 3000;

AppDataSource.initialize().catch((err) => {
	console.error(`Error during Data Source initialization: ${err}`);
});

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
	const user = await AppDataSource.manager.findOneBy(Players, {id: 3});
	
	if(user === null)
		return res.status(404).end();
	
	const item: Inventory = new Inventory();
	item.player = user;
	item.item = { name: "Test", description: "test item", timeStart: 0, timeEnd: 0, meta: {}};
	await AppDataSource.manager.save(item);
	
	return res.status(200).send(item);
});

try {
	app.listen(port, (): void => {
		console.log(`Server successfully start on port ${port}`);

		/*
		const eventsPath = path.join(process.cwd(), 'modules');
		const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

		for (const file of eventFiles) {
			const filePath = path.join(eventsPath, file);
			const event = require(filePath);
			console.log(event);
			event.execute();
		}*/
	});
} catch(err) {
	console.error(`Error when starting server: ${err}`);
}