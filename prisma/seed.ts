import axios from "axios";
import { PrismaClient } from "@prisma/client";

import { RawArticle } from "../src/types/articleTypes.js";
import saveNewsFromAPI from "../src/CRUD/utils.js";

const prisma = new PrismaClient();

async function main() {
  const alreadySeeded = await prisma.article.findFirst();
  if (alreadySeeded) return;
  
  const countResponse = await axios.get(`${process.env.SPACENEWS_URL}/count`);

  const articlesResponse = await axios.get(`${process.env.SPACENEWS_URL}?_limit=${countResponse}`);
  const articles: RawArticle[] = articlesResponse.data;

  saveNewsFromAPI(articles, prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });