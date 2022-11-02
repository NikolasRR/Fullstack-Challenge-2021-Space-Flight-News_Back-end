-- CreateTable
CREATE TABLE "articles" (
    "id" INTEGER NOT NULL,
    "features" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "launches" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_id_key" ON "articles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "launches_id_key" ON "launches"("id");

-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- AddForeignKey
ALTER TABLE "launches" ADD CONSTRAINT "launches_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
