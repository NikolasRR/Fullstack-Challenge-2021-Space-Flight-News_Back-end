import { Router } from "express";
import controllers from "../controllers/articlesController.js";
import middlewares from "../middlewares/articlesMiddleware.js";

const articlesRouter = Router();

articlesRouter.get("/news/:id", middlewares.validateArticleId, controllers.getNewsById);

export default articlesRouter;