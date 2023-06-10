import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/header";
import { prisma } from "~/utils/prisma.server";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (id) {
    const checkout = await prisma.stripeCheckout.findUnique({
      where: {
        sessionId: id,
      },
    });

    return json({
      credit: checkout?.credit,
    });
  }

  return json({
    credit: 0,
  });
};

export default function () {
  const { credit } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <div className="flex min-h-screen flex-col">
        <Header credit={credit} />
        <Outlet />
      </div>
    </main>
  );
}
