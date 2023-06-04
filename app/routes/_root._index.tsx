import type { V2_MetaFunction } from "@remix-run/node";
import { Editor } from "~/components/editor";
import { Preview } from "~/components/preview";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1">
      <Editor />
    </div>
  );
}
