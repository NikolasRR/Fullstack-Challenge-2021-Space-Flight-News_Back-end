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
			originalId: order
		},
		take: 2,
		skip: page*2,
		include:{
			events: {},
			launches: {}
		}
	})
}

const articlesRepository = {
	getById,
	getByPage
}

export default articlesRepository;