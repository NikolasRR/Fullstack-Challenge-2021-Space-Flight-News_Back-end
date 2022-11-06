import { NextFunction, Request, Response } from "express";
import articlesRepository from "../repositories/articlesRepository.js";

async function validateArticleId(req: Request, res: Response, next: NextFunction) {
  const articleId = Number(req.params.id);
  if (!articleId) throw { type: "id invalid" };

  const article = await articlesRepository.getById(articleId);
  if (!article) throw { type: "not found" };

  next();
}

async function validatePage(req: Request, res: Response, next: NextFunction) {
  const page = Number(req.query.page);
  if (!page) throw { type: "query invalid" };

  next();
}

async function validateOrder(req: Request, res: Response, next: NextFunction) {
  const order = req.query.order;
  if (order === 'desc' || order === 'asc') {
    next();
    return;
  }

  throw { type: "query invalid" };
}

const middlewares = {
  validateArticleId,
  validatePage,
  validateOrder
};

export default middlewares;