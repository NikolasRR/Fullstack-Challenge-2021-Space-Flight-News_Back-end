import { ArticleEvent, ArticleLaunch, Event, Launch } from "@prisma/client";
import { BuildedArticle, DatabaseArticle, SortOrder } from "../types/articleTypes.js";

import articlesRepository from "../repositories/articlesRepository.js";
import eventsRepository from "../repositories/eventsRepository.js";
import launchsRepository from "../repositories/launchesRepository.js";

async function getOneById(id: number) {
	const article = await articlesRepository.getById(id);
	return await buildArticle(article);
}

async function getByPages(page: number, order: SortOrder) {
	const articles = await articlesRepository.getByPage(page, order);
	return await Promise.all(articles.map(async (article): Promise<BuildedArticle> => buildArticle(article)));
}

async function getArticleLaunches(launches: ArticleLaunch[]) {
	return await Promise.all(launches.map(async (launch): Promise<Launch> => await launchsRepository.getById(launch.launchId)));
}

async function getArticleEvents(events: ArticleEvent[]) {
	return await Promise.all(events.map(async (event): Promise<Event> => await eventsRepository.getById(event.eventId)));
	
}

async function buildArticle(rawArticle: DatabaseArticle): Promise<BuildedArticle> {
	const launches = await getArticleLaunches(rawArticle.launches);
	const events = await getArticleEvents(rawArticle.events);

	return {
		id: rawArticle.id,
		originalId: rawArticle.originalId,
		featured: rawArticle.featured,
		publishedAt: rawArticle.publishedAt,
		newsSite: rawArticle.newsSite,
		imageUrl: rawArticle.imageUrl,
		summary: rawArticle.summary,
		title: rawArticle.title,
		url: rawArticle.url,
		launches: launches,
		events: events
	};
};

const articlesServices = {
	getOneById,
	getByPages
};

export default articlesServices;