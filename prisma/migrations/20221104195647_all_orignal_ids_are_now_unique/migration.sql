/*
  Warnings:

  - A unique constraint covering the columns `[originalId]` on the table `events` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[originalId]` on the table `launches` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "events_originalId_key" ON "events"("originalId");

-- CreateIndex
CREATE UNIQUE INDEX "launches_originalId_key" ON "launches"("originalId");
