import { Request, Response, NextFunction } from "express";

const baseMiddleware = (req: Request, res: Response, next: NextFunction) => {
	console.log('Request: ', req.method, req.path);
	next();
}

export default baseMiddleware