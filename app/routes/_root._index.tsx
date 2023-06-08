import type { V2_MetaFunction } from "@remix-run/node";
import { Editor } from "~/components/editor";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "AI FotoEditor" },
    { name: "description", content: "Edit, fix and enahce photos using AI" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1">
      <Editor />
    </div>
  );
}
