import { prisma } from "../database/database.js";

async function getById(id: number) {
    return await prisma.event.findUnique({
        where: {
            id: id
        }
    });
}

const eventsRepository = {
    getById
};

export default eventsRepository;