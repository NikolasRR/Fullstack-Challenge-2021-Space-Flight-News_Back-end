import { Router } from "express";
import controllers from "../controllers/articlesController.js";

const articlesRouter = Router();

articlesRouter.get("/news/:id", controllers.getNewsById);

export default articlesRouter;