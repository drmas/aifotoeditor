import type { V2_MetaFunction } from "@remix-run/node";
import { Editor } from "~/components/editor";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "AI Foto Editor | AI-Driven Photo Editing Tools" },
    {
      name: "description",
      content:
        "AI Foto Editor offers cutting-edge AI-driven photo editing tools, allowing users to clean, colorize, remove backgrounds, fix lighting, and remove blur from their photos. Experience the power of AI for your image editing needs.",
    },
    {
      name: "keywords",
      content:
        "AI photo editor, AI image editor, photo editing, image editing, remove background, fix lighting, remove blur, colorize photo, clean photo, AI editing",
    },
    {
      property: "og:title",
      content: "AI Foto Editor | Advanced AI-Driven Photo Editing Tools",
    },
    {
      property: "og:description",
      content:
        "Experience the next level of photo editing with AI Foto Editor. Our advanced AI-driven tools enable you to clean, colorize, remove backgrounds, fix lighting, and remove blur from your photos with ease.",
    },
    { property: "og:url", content: "https://aifotoeditor.com" },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://aifotoeditor.com/images/og-image.png",
    },
    { rel: "canonical", href: "https://aifotoeditor.com" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1">
      <Editor />
    </div>
  );
}
