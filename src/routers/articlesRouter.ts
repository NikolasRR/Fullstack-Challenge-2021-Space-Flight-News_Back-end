import { Router } from "express";
import controllers from "../controllers/articlesController.js";

const articlesRouter = Router();

articlesRouter.get("/news", controllers.getNews);

export default articlesRouter;