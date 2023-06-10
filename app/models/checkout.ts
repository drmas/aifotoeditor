import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

export const getCheckoutSession = async (checkoutId: string) => {
  const session = await stripe.checkout.sessions.retrieve(checkoutId);
  return session;
};