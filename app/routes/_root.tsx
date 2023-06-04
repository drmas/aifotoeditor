import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";

export default function () {
  return (
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
    >
      <div className="flex min-h-screen flex-col">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
