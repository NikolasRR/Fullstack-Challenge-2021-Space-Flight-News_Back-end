import { Article, Event, Launch } from "@prisma/client";

export type RawArticle = Article & {
    updatedAt: String,
    launches: Launch[],
    events: Event[]
}