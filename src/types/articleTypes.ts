import { Article, ArticleEvent, ArticleLaunch, Event, Launch } from "@prisma/client";

export type RawArticle = Article & {
    updatedAt: String,
    launches: Launch[],
    events: Event[]
};

export type DatabaseArticle = Article & {
    launches: ArticleLaunch[],
    events: ArticleEvent[]
};

export type BuildedArticle = Omit<RawArticle, 'updatedAt'>;

export type SortOrder = 'desc' | 'asc';