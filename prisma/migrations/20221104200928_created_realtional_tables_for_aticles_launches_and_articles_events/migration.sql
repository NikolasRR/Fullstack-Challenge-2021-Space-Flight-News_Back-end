/*
  Warnings:

  - You are about to drop the column `articleId` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `articleId` on the `launches` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_articleId_fkey";

-- DropForeignKey
ALTER TABLE "launches" DROP CONSTRAINT "launches_articleId_fkey";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "articleId";

-- AlterTable
ALTER TABLE "launches" DROP COLUMN "articleId";

-- CreateTable
CREATE TABLE "ArticleLaunch" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "launchId" INTEGER NOT NULL,

    CONSTRAINT "ArticleLaunch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleEvent" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "ArticleEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArticleLaunch" ADD CONSTRAINT "ArticleLaunch_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleLaunch" ADD CONSTRAINT "ArticleLaunch_launchId_fkey" FOREIGN KEY ("launchId") REFERENCES "launches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleEvent" ADD CONSTRAINT "ArticleEvent_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleEvent" ADD CONSTRAINT "ArticleEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
