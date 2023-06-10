import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect(process.env.MORE_CREDIT_URL || "");
};
