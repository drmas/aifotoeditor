import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { Editor } from "~/components/editor";
import { upload } from "~/actions/upload";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "AI FotoEditor" },
    { name: "description", content: "Edit, fix and enahce photos using AI" },
  ];
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const command = formData.get("command");
  switch (command) {
    case "upload":
      upload(request);
      break;
  }
};

export default function Index() {
  return (
    <div className="flex flex-1">
      <Editor />
    </div>
  );
}
