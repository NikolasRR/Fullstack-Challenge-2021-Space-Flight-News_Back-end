import { Request, Response } from "express";
import * as crud from "../CRUD/CRUD.js";

async function getNews(req: Request, res: Response) {
    // const response = await crud.getNews();
    res.send(new Date());
}

const controllers = {
    getNews
};

export default controllers;