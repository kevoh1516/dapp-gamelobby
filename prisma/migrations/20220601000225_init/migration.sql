/*
  Warnings:

  - Added the required column `blue` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `green` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `red` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yellow` to the `Color` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Color" ADD COLUMN     "blue" TEXT NOT NULL,
ADD COLUMN     "green" TEXT NOT NULL,
ADD COLUMN     "red" TEXT NOT NULL,
ADD COLUMN     "yellow" TEXT NOT NULL;
