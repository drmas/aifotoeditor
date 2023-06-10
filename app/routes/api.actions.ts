import { json, type ActionArgs } from "@remix-run/node";
import { prisma } from "~/utils/prisma.server";
import {
  clean,
  colorise,
  deblur,
  instructions,
  lighten,
  removebg,
} from "~/utils/replicate.server";

const actions: {
  [key: string]: (image: string, params?: any) => Promise<object>;
} = {
  clean,
  colorise,
  deblur,
  lighten,
  removebg,
  instructions,
};

export const action = async ({ request }: ActionArgs) => {
  const data = await request.json();

  if (!data.id) return json({ error: "Please add credit first" }, { status: 404 });

  const session = await prisma.stripeCheckout.findUnique({
    where: {
      sessionId: data.id,
    },
  });

  console.log(session);

  if (!session)
    return json({ error: "Please add credit first" }, { status: 404 });

  if (session.credit < 1)
    return json({ error: "Please add credit first" }, { status: 404 });

  await prisma.stripeCheckout.update({
    where: {
      sessionId: data.id,
    },
    data: {
      credit: session.credit - 1,
    },
  });

  const file = data.file;
  const action = data.action;
  const params = data.params;
  if (file && action) {
    const actionFn = actions[action];
    if (actionFn) {
      const result = await actionFn(file, params);
      return json(result);
    } else {
      return json({ error: "Action not found" }, { status: 404 });
    }
  }
};
