import { DiscAlbum, CirclePlus } from "lucide-react";

const SongInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-white">
        <DiscAlbum size={45} />
      </div>
      <div className="flex flex-col items-start "> 
        {/* items-start for same line */}
        <div className="text-white text-[0.9rem] font-semibold">
          Sadii Gali Aaja
        </div>
        <div className="text-gray-300 text-[0.8rem]">
          Ayushmann khurana, Neeti Mohan
        </div>
      </div>

      <div className="text-gray-300">
        <CirclePlus size={17}/>
      </div>
    </div>
  );
};

export default SongInfo;
