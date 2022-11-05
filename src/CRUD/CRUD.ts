import axios from "axios";

import { prisma } from "../database/database.js";
import { RawArticle } from "../types/articleTypes.js";
import saveNewsFromAPI from "./utils.js";

export async function getNews() {
    const lastSpaceNew = await prisma.article.findFirst({
        orderBy: { originalId: 'desc' }
    });
    
    const articlesResponse = await axios.get(`${process.env.SPACENEWS_URL}?id_gt=${lastSpaceNew.originalId}`);
    const articles: RawArticle[] = articlesResponse.data;
    saveNewsFromAPI(articles, prisma);
}