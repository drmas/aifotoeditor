import type { ChangeEvent } from "react";
import { useState } from "react";
import { Preview } from "./components/preview";
import { Sidebar } from "./components/sidebar";
import { downloadImage } from "libs/downloadImage";

export const Editor = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      setCurrentImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onAction = async (action: string, params?: any) => {
    if (!currentImage) return alert("Please upload an image first");
    setIsLoading(true);
    try {
      const res = await fetch("/api/actions", {
        method: "POST",
        body: JSON.stringify({
          file: currentImage,
          action,
          params,
        }),
      });

      const { result } = await res.json();
      const data = await downloadImage(result);
      setCurrentImage(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
      setIsLoading(false);
    }
  };

  const onDownload = () => {
    if (!currentImage) return alert("Please upload an image first");
    // save image locally
    const link = document.createElement("a");
    link.download = "ai-enhanced-image.png";
    link.href = currentImage;
    link.click();
  };

  return (
    <div className="flex flex-1 flex-col-reverse md:flex-row ">
      <Sidebar onAction={onAction} onDownload={onDownload} />
      <Preview
        image={currentImage}
        onFileChange={onFileChange}
        isLoading={isLoading}
      />
    </div>
  );
};
