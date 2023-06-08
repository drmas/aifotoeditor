import { useEffect, useState } from "react";

const MAX_WAIT_TIME = 30000;
export const LoadingOverlay = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, MAX_WAIT_TIME / 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40">
      <div className="bg-grey-light w-96 rounded bg-white shadow-sm shadow-white/30">
        <div
          className="rounded bg-indigo-500 py-1 text-center text-xs leading-none text-white"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-center text-xs leading-none text-white shadow-2xl ">
        {progress === 100 && isLoading
          ? "Still Processing ..."
          : "Processing ..."}
      </p>
    </div>
  );
};
