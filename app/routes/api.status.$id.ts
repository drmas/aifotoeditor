import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { status } from "~/utils/replicate.server";

export const loader = async ({ params }: LoaderArgs) => {
  const { id } = params;

  if (!id) {
    return json({ error: "No id provided" }, { status: 404 });
  }

  return json(await status(id));
};
