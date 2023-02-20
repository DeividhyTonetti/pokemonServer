-- CreateTable
CREATE TABLE "poketeams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pokemon_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "poketeams_pkey" PRIMARY KEY ("id")
);
