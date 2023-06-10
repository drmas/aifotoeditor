-- CreateTable
CREATE TABLE "StripeCheckout" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "credit" INTEGER NOT NULL,

    CONSTRAINT "StripeCheckout_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StripeCheckout_sessionId_key" ON "StripeCheckout"("sessionId");

-- CreateIndex
CREATE INDEX "StripeCheckout_sessionId_idx" ON "StripeCheckout"("sessionId");
