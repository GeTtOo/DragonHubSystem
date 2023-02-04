import Express, { Request, Response } from "express";
import IController from "../interfaces/IController";

class HomeController implements IController {
	public path = '/';
	public router = Express.Router();

	constructor() {
		this.initRoutes();
	}

	public initRoutes() {
		this.router.get('/', this.index);
	}

	index = async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).send({ status: 200});
	}
}

export default HomeController;

/*
app.get('/', async (req: Request, res: Response): Promise<Response> => {
	const user = await AppDataSource.manager.findOneBy(Players, {id: 3});
	
	if(user === null)
		return res.status(404).end();
	
	const item: Inventory = new Inventory();
	item.player = user;
	item.item = { name: "Test", description: "test item", timeStart: 0, timeEnd: 0, meta: {}};
	await AppDataSource.manager.save(item);
	
	return res.status(200).send({ status: 200});
});
*/