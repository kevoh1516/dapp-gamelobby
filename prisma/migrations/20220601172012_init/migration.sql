-- CreateTable
CREATE TABLE "Color" (
    "id" TEXT NOT NULL,
    "p1" TEXT NOT NULL,
    "p2" TEXT NOT NULL,
    "p3" TEXT NOT NULL,
    "p4" TEXT NOT NULL,
    "red" BOOLEAN NOT NULL,
    "blue" BOOLEAN NOT NULL,
    "yellow" BOOLEAN NOT NULL,
    "green" BOOLEAN NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);
