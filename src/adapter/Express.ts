import { Request, Response } from "express";

export default class ExpressAdapter {
	
	static exchange(fn: Function) {
		return async function (req: Request, res: Response) {
			const obj = await fn(req.query, req.body);
			res.json(obj);
		}
	}
}