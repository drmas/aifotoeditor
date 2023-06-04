import { Button } from "~/components/button";
import {
  CleanSVG,
  DeblurSVG,
  DownloadSVG,
  LightupSVG,
  RemoveBackgroundSVG,
  UpscaleSVG,
} from "~/components/icons";

export const Sidebar = () => (
  <aside className="flex w-80 flex-col gap-4 border-r-2 border-gray-200 p-4">
    <div className="flex flex-col gap-2">
      <h2 className="text-sm[14px]">Apply changes using commands</h2>
      <textarea
        className="text-sm[14px] h-48 w-full rounded-md border-2 border-gray-200 p-2"
        placeholder="Write instruction to edit the photo.
Examples:
  Make it at night
  Change the color to red"
      ></textarea>
      <button className="rounded-full bg-indigo-600 p-3 text-white">
        Apply changes
      </button>
    </div>
    <hr />
    <div className="flex flex-col gap-2">
      <h2 className="text-sm[14px]">Actions</h2>
      <Button title="Clean Colorise" icon={CleanSVG} />
      <Button title="De-blur" icon={DeblurSVG} />
      <Button title="Lighten Up" icon={LightupSVG} />
      <Button title="Remove Background" icon={RemoveBackgroundSVG} />
      <Button title="Upscale" icon={UpscaleSVG} />
    </div>
    <hr />
    <Button title="Download" icon={DownloadSVG} />
  </aside>
);
