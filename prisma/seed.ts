import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const countResponse = await axios.get(`${process.env.SPACENEWS_URL}/count`);
  const countResponse = {data: 2};

  const articlesResponse = await axios.get(`${process.env.SPACENEWS_URL}?_limit=${countResponse.data}`);
  const articles = articlesResponse.data;
  // for(let i = 0; i < articles.length; i++) {

  // }
  await prisma.articles.createMany({data: articles});
  console.log(countResponse.data);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });