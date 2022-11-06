import { Event, Launch, PrismaClient } from "@prisma/client";
import { RawArticle } from "../types/articleTypes.js";

async function saveNewsFromAPI(articles: RawArticle[], prisma: PrismaClient) {

	function changeIdToOriginalId(array: Launch[] | Event[]) {
		array.forEach(element => {
			element.originalId = element.id.toString();
			delete element.id;
		});

		return array;
	}

	for (let i = 0; i < articles.length; i++) {
		const launches = changeIdToOriginalId(articles[i].launches);
		const events = changeIdToOriginalId(articles[i].events);

		const article = await prisma.article.create({
			data: {
				originalId: articles[i].id,
				featured: articles[i].featured,
				title: articles[i].title,
				url: articles[i].url,
				imageUrl: articles[i].imageUrl,
				newsSite: articles[i].newsSite,
				summary: articles[i].summary,
				publishedAt: articles[i].publishedAt,
			}
		});

		launches.forEach(async (launch) => {
			const launchWithId = await prisma.launch.upsert({
				where: {
					originalId: launch.originalId
				},
				update: {},
				create: launch
			});

			await prisma.articleLaunch.create({
				data: {
					articleId: article.id,
					launchId: launchWithId.id
				}
			});
		});

		events.forEach(async (event) => {
			const eventWithId = await prisma.event.upsert({
				where: {
					originalId: event.originalId
				},
				update: {},
				create: event
			});

			await prisma.articleEvent.create({
				data: {
					articleId: article.id,
					eventId: eventWithId.id
				}
			});
		});
	}
}

export default saveNewsFromAPI;