import { Router } from "express";
import articlesRouter from "./articlesRouter.js";
import healthRouter from "./healthRouter.js";

const router = Router()
    .use(articlesRouter)
    .use(healthRouter);

export default router;