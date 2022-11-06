import { prisma } from "../database/database.js";

async function getById(id: number) {
	return await prisma.launch.findUnique({
		where: {
			id: id
		}
	});
}

const launchsRepository = {
	getById
};

export default launchsRepository;