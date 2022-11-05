import { Router } from "express";
import articlesController from "../controllers/articlesController.js";

const articlesRouter = Router();

articlesRouter.get("/news", articlesController.getNews);

export default articlesRouter;