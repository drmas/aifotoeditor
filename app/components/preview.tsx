import { LoadingOverlay } from "./loading";

export const Preview = ({ isLoading }: { isLoading?: boolean }) => (
  <div className="relative flex h-full flex-1 flex-col items-center justify-center">
    <div className="flex flex-col">
      <img
        src="/images/image-placeholder.png"
        alt=""
        className=" min-h-full bg-white md:min-w-full lg:min-h-[600px] lg:min-w-[600px]"
      />
      {isLoading && <LoadingOverlay />}
    </div>
  </div>
);
