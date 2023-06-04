import { LoadingSVG } from "./icons";

export const LoadingOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
    <LoadingSVG />
  </div>
);
