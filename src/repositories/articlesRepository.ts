import { prisma } from "../database/database.js";

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

const articlesRepository = {
	getById
}

export default articlesRepository;