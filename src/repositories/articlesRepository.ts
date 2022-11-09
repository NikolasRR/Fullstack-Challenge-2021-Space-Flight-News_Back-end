import { prisma } from "../database/database.js";
import { SortOrder } from "../types/articleTypes.js";

async function getById(id: number) {
	return await prisma.article.findUnique({
		where: {
			id: id
		},
		include: {
			events: {},
			launches: {}
		}
	});
}

async function getByPage(page: number, order: SortOrder) {
	return await prisma.article.findMany({
		orderBy: {
			publishedAt: order
		},
		take: 10,
		skip: page*10,
		include:{
			events: {},
			launches: {}
		}
	})
}

async function getByTitle(page: number, order: SortOrder, searchValue: string) {
	return await prisma.article.findMany({
		where: {
			title: {
				contains: searchValue,
				mode: 'insensitive'
			}
		},
		orderBy: {
			publishedAt: order
		},
		take: 10,
		skip: page*10,
		include:{
			events: {},
			launches: {}
		}
	})
}

const articlesRepository = {
	getById,
	getByPage,
	getByTitle
}

export default articlesRepository;