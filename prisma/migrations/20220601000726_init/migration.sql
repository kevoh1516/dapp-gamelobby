/*
  Warnings:

  - Changed the type of `blue` on the `Color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `green` on the `Color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `red` on the `Color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `yellow` on the `Color` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Color" DROP COLUMN "blue",
ADD COLUMN     "blue" BOOLEAN NOT NULL,
DROP COLUMN "green",
ADD COLUMN     "green" BOOLEAN NOT NULL,
DROP COLUMN "red",
ADD COLUMN     "red" BOOLEAN NOT NULL,
DROP COLUMN "yellow",
ADD COLUMN     "yellow" BOOLEAN NOT NULL;
