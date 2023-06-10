import { LoadingOverlay } from "../../loading";

export const Preview = ({
  isLoading,
  image,
  onFileChange,
}: {
  isLoading?: boolean;
  image?: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative flex h-full flex-1 flex-col items-center justify-center">
      <div className="flex flex-col">
        {image ? (
          <img
            src={image}
            alt=""
            className=" min-h-full bg-white md:min-w-full lg:min-h-[600px] lg:min-w-[600px]"
          />
        ) : (
          <div className="flex w-full items-center justify-center mt-5">
            <label
              htmlFor="dropzone-file"
              className="flex w-full cursor-pointer flex-col items-center justify-center 
          rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-white"
            >
              <div className="flex flex-col items-center justify-center p-12 lg:p-48">
                <svg
                  aria-hidden="true"
                  className="mb-3 h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 1024x1024px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={onFileChange}
              />
            </label>
          </div>
        )}
        {isLoading && <LoadingOverlay />}
      </div>
    </div>
  );
};
