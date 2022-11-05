import { Router } from "express";
import articlesRouter from "./articlesRouter.js";

const router = Router();

router.use(articlesRouter);

export default router;