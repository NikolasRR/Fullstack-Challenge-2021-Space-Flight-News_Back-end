import { Request, Response } from "express";
import articlesServices from "../services/articlesServices.js";
import { SortOrder } from "../types/articleTypes.js";

async function getNewsById(req: Request, res: Response) {
    const newsId = Number(req.params.id);
    const article = await articlesServices.getOneById(newsId);
    res.send(article);
}

async function getNewsPage(req: Request, res: Response) {
    const order = (req.query.order).toString() as SortOrder;
    const page = Number(req.query.page);
    const articles = await articlesServices.getByPages(page, order);
    res.send(articles);
}

const controllers = {
    getNewsById,
    getNewsPage
};

export default controllers;