/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `StripeCheckout` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StripeCheckout_sessionId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "StripeCheckout_email_key" ON "StripeCheckout"("email");

-- CreateIndex
CREATE INDEX "StripeCheckout_sessionId_email_idx" ON "StripeCheckout"("sessionId", "email");
