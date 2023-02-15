/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `poketeams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `poketeams_name_key` ON `poketeams`(`name`);
