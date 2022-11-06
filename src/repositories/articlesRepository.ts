import { prisma } from "../database/database.js";

async function getById(id: number) {
	const article = await prisma.article.findUnique({
		where: {
			id: id
		},
		include: {
			events: {},
			launches: {}
		}
	});

	return article;
}

const articlesRepository = {
	getById
}

export default articlesRepository;