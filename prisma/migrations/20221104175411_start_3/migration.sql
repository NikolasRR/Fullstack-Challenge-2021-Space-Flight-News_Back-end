-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "originalId" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "launches" (
    "id" SERIAL NOT NULL,
    "originalId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "launches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "originalId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "articles_originalId_key" ON "articles"("originalId");

-- AddForeignKey
ALTER TABLE "launches" ADD CONSTRAINT "launches_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
