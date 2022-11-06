import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import schedule from "node-schedule";

import router from "./routers/index.js";
import { getNews } from "./CRUD/CRUD.js";
import errorHandler from "./errorHandler/errorHandler.js";

dotenv.config();

const app = express()
    .use(cors())
    .use(json())
    .use(router)
    .use(errorHandler);

const rule = new schedule.RecurrenceRule();
rule.hour = 9;
rule.tz = 'America/Fortaleza';
schedule.scheduleJob(rule, getNews);

export default app;