import { Preview } from "../preview";
import { Sidebar } from "./components/sidebar";

export const Editor = () => (
  <div className="flex flex-1 flex-col-reverse md:flex-row ">
    <Sidebar />
    <Preview />

  </div>
);
