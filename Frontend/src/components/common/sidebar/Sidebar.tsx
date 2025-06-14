import { Plus, Maximize2 } from "lucide-react";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col  bg-black text-white fixed">
        <div className="mt-4">
          <div className="flex gap-15 px-3.5 ">
            <h3 className="font-bold text-[1rem]">Your Library</h3>
            <div className="flex gap-2">
              <div className="text-gray-300 bg-gray-800 rounded-full p-1.5">
                <Plus size={18} />
              </div>
              <div className="text-gray-300 hover:bg-gray-800 hover:rounded-full p-1.5 ">
                <Maximize2 size={18} />
              </div>
            </div>
          </div>
          <div className="flex my-4 mx-2.5 gap-2">
            <div className="text-gray-300 bg-gray-800 rounded-full  py-1 px-2.5">
              Playlists
            </div>
            <div className="text-gray-300 bg-gray-800 rounded-full py-1 px-2.5">
              Artists
            </div>
          </div>

          <SidebarList />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
