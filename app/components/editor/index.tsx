import { Preview } from "../preview";
import { Sidebar } from "./components/sidebar";

export const Editor = () => (
  <div className="flex flex-1 ">
    <Sidebar />
    <Preview />

  </div>
);
