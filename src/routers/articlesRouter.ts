import { Router } from "express";
import controllers from "../controllers/articlesController.js";
import middlewares from "../middlewares/articlesMiddleware.js";

const articlesRouter = Router()
  .get("/articles/:id", 
  middlewares.validateArticleId, 
  controllers.getNewsById
  )
  .get("/articles", 
  middlewares.validateOrder,
  middlewares.validatePage,
  controllers.getNewsPage
  );

export default articlesRouter;