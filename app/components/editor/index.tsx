import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { Preview } from "./components/preview";
import { Sidebar } from "./components/sidebar";
import { downloadImage } from "~/utils/downloadImage";
import type { Prediction } from "replicate";
import prepareImageFileForUpload from "~/utils/prepareImageFileForUpload";
import {
  useRevalidator,
  useRouteLoaderData,
  useSearchParams,
} from "@remix-run/react";

export const Editor = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [searchParams] = useSearchParams();
  const revalidator = useRevalidator();

  const rootData = useRouteLoaderData("routes/_root") as { credit: string };

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const image = await prepareImageFileForUpload(file);
    setCurrentImage(image);
  };

  const onAction = async (action: string, params?: any) => {
    if (!currentImage) return alert("Please upload an image first");

    if (!rootData.credit) return alert("Please add credit card first");

    setIsLoading(true);
    try {
      const res = await fetch("/api/actions", {
        method: "POST",
        body: JSON.stringify({
          file: currentImage,
          action,
          params,
          id: searchParams.get("id"),
        }),
      });
      if (res.ok) {
        const prediction = (await res.json()) as Prediction;
        setPrediction(prediction);

        revalidator.revalidate();
      } else {
        alert("Please add credit card first");
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
      setIsLoading(false);
    }
  };

  const checkStatus = useCallback(
    async (id: string) => {
      let prediction = await fetch(`/api/status/${id}`).then((res) =>
        res.json()
      );
      while (
        prediction?.status === "starting" ||
        prediction?.status === "processing"
      ) {
        try {
          const res = await fetch(`/api/status/${id}`);
          prediction = (await res.json()) as Prediction;
          if (prediction.status === "succeeded") {
            const image = await downloadImage(prediction.output);
            setCurrentImage(image);
            setIsLoading(false);
            setPrediction(null);
          } else if (prediction.status === "failed") {
            alert("Something went wrong");
            setIsLoading(false);
          }
        } catch (e) {
          console.error(e);
          alert("Something went wrong");
          setIsLoading(false);
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    },
    [setPrediction, setCurrentImage, setIsLoading]
  );

  useEffect(() => {
    if (!prediction) return;
    checkStatus(prediction.id);
  }, [checkStatus, prediction]);

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
