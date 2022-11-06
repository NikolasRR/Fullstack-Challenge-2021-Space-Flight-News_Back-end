import { ArticleEvent, ArticleLaunch, Event, Launch } from "@prisma/client";
import { BuildedArticle, DatabaseArticle } from "../types/articleTypes.js";

import articlesRepository from "../repositories/articlesRepository.js";
import eventsRepository from "../repositories/eventsRepository.js";
import launchsRepository from "../repositories/launchesRepository.js";

async function getOneById(id: number) {
	const article = await articlesRepository.getById(id);
	const launches = await getArticleLaunches(article.launches);
	const events = await getArticleEvents(article.events);
	return buildArticle(article, launches, events);
}

async function getArticleLaunches(launches: ArticleLaunch[]) {
	return await Promise.all(launches.map(async (launch): Promise<Launch> => await launchsRepository.getById(launch.launchId)));
}

async function getArticleEvents(events: ArticleEvent[]) {
	return await Promise.all(events.map(async (event): Promise<Event> => await eventsRepository.getById(event.eventId)));
	
}

function buildArticle(rawArticle: DatabaseArticle, launches: Launch[], events: Event[]): BuildedArticle {
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
	}
};

const articlesServices = {
	getOneById
};

export default articlesServices;