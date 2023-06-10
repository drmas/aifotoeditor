-- CreateTable
CREATE TABLE "RedeemedCheckouts" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "RedeemedCheckouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RedeemedCheckouts_sessionId_key" ON "RedeemedCheckouts"("sessionId");

-- CreateIndex
CREATE INDEX "RedeemedCheckouts_sessionId_idx" ON "RedeemedCheckouts"("sessionId");
