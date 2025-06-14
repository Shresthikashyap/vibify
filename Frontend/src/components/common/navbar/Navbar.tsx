import { House } from "lucide-react";
import { Search } from "lucide-react";
import {
  FolderSearch2,
  ArrowDownToLine,
  Bell,
  Handshake,
  User,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-black h-[4rem] flex  items-center gap-110 ">
      {/* <div className="flex items-center gap-5"> */}
      <div>
        <img src="./spotify-icon.png" alt="Logo" className="h-8 pl-5 my-4 " />
      </div>

      <div className="flex justify-end gap-19 items-center ">
        <div className="flex my-2 items-center gap-4">
          <div className="bg-gray-800 p-3 rounded-full">
            <House className="text-white" />
          </div>

          <div className="relative flex items-center">
            <Search className="absolute text-white left-3" />
            <input
              type="text"
              className="bg-gray-800 h-[3rem] w-[30rem] rounded-full text-gray-200 pl-10"
              placeholder="What do you want to listen to?"
            />
            <FolderSearch2 className="absolute text-white right-3" />
          </div>
        </div>

        <div className="flex gap-2 ">
          <button className="bg-white h-8 px-2.5 flex items-center rounded-full text-[0.9rem] font-bold mt-2">
            Explore Premium
          </button>
          <div className="flex justify-between gap-9 mt-3">
            <div className="flex font-bold text-lg hover:text-white hover:text- transition">
              <ArrowDownToLine className="flex text-gray-400" size={20} />
              <div className="text-gray-300 text-[0.9rem] ">Install App</div>
            </div>

            <Bell className="text-gray-200 hover:text-white" size={20} />
            <Handshake className="text-gray-200 hover:text-white" size={20} />
            <User className="text-gray-200 hover:text-white" size={20} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
