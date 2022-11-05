import { Router } from "express";
import controllers from "../controllers/healthController.js";

const healthRouter = Router();

healthRouter.get("/", controllers.sendGreetings);

export default healthRouter;