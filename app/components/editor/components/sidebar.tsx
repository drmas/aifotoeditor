import { useRef } from "react";
import { Button } from "~/components/button";
import {
  CleanSVG,
  ColoriseSVG,
  DeblurSVG,
  DownloadSVG,
  LightupSVG,
  RemoveBackgroundSVG,
  UpscaleSVG,
} from "~/components/icons";

export const Sidebar = ({
  onAction,
  onDownload,
}: {
  onAction: (action: string, params?: any) => void;
  onDownload: () => void;
}) => {
  const instructionsRef = useRef<HTMLTextAreaElement>(null);
  return (
    <aside className="flex w-full flex-col gap-4 border-r-2 border-gray-200 p-4 md:w-80">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm[14px]">Apply changes using commands</h2>
        <textarea
          ref={instructionsRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const instructions = instructionsRef.current?.value;
              if (!instructions) return;
              onAction("instructions", instructions);
            }
          }}
          className="text-sm[14px] h-48 w-full rounded-md border-2 border-gray-200 p-2"
          placeholder="Write instruction to edit the photo.
Examples:
  Make it at night
  Change the color to red"
        ></textarea>
        <button
          className="rounded-full bg-indigo-600 p-3 text-white"
          type="button"
          onClick={() => {
            const instructions = instructionsRef.current?.value;
            if (!instructions) return;
            onAction("instructions", instructions);
          }}
        >
          Apply changes
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <h2 className="text-sm[14px]">Actions</h2>
        <Button
          title="Colorise"
          icon={ColoriseSVG}
          onClick={() => onAction("colorise")}
        />
        <Button
          title="Clean"
          icon={CleanSVG}
          onClick={() => onAction("clean")}
        />
        <Button
          title="De-blur"
          icon={DeblurSVG}
          onClick={() => onAction("deblur")}
        />
        <Button
          title="Lighten Up"
          icon={LightupSVG}
          onClick={() => onAction("lighten")}
        />
        <Button
          title="Remove Background"
          icon={RemoveBackgroundSVG}
          onClick={() => onAction("removebg")}
        />
        {/* <Button
          title="Upscale"
          icon={UpscaleSVG}
          onClick={() => onAction("upscale")}
        /> */}
      </div>
      <hr />
      <Button title="Download" icon={DownloadSVG} onClick={onDownload} />
    </aside>
  );
};
