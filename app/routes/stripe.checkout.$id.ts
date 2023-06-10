import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getCheckoutSession } from "~/models/checkout";
import { prisma } from "~/utils/prisma.server";

const CREDIT_PER_CENT = 0.05;

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;
  if (!id) {
    return { status: 404 };
  }

  const checkout = await getCheckoutSession(id);
  if (!checkout) {
    return { status: 404 };
  }

  if (checkout.payment_status === "paid") {
    if (checkout.amount_total === 1000 && checkout.customer_details?.email) {
      const isRedeemed = await prisma.stripeCheckout.findFirst({
        where: {
          sessionId: checkout.id,
        },
      });

      if (!isRedeemed) {
        await prisma.redeemedCheckouts.create({
          data: {
            sessionId: checkout.id,
          },
        });

        await prisma.stripeCheckout.upsert({
          where: {
            email: checkout.customer_details?.email,
          },
          update: {
            sessionId: checkout.id,
            amount: {
              increment: 1000,
            },
            credit: {
              increment: (checkout.amount_total || 1000) * CREDIT_PER_CENT,
            },
          },
          create: {
            amount: 1000,
            credit: (checkout.amount_total || 1000) * CREDIT_PER_CENT,
            currency: checkout.currency || "",
            email: checkout.customer_details?.email,
            sessionId: checkout.id,
            status: checkout.payment_status,
          },
        });
      }
    }
    return redirect("/?id=" + id);
  }
};
