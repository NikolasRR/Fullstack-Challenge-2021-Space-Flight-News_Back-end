import { NextFunction, Request, Response } from "express";
import articlesRepository from "../repositories/articlesRepository.js";

async function validateArticleId(req: Request, res: Response, next: NextFunction) {
    const articleId = Number(req.params.id);
    if (!articleId) throw { type: "request format" };

    const table = await articlesRepository.getById(articleId);
    if (!table) throw { type: "not found" };

    next();
}

const middlewares = {
  validateArticleId
};

export default middlewares;