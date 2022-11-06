import { Request, Response } from "express";
import articlesServices from "../services/articlesServices.js";

async function getNewsById(req: Request, res: Response) {
    const newsId = parseInt(req.params.id);
    const article = await articlesServices.getOneById(newsId);
    res.send(article);
}

const controllers = {
    getNewsById
};

export default controllers;