import SongInfo from "../../users/SongInfo";
import Player from "../../users/Player";
import Controls from "../../users/Controls";

const Footer = () => {
  return (
    <>
      <div className="p-4 fixed inset-x-0 bottom-0 z-20 bg-black">
        <div className="grid grid-cols-3 items-center gap-2">
          <div className="text-center">
            <SongInfo />
          </div>
          <div className="text-center">
            <Player />
          </div>
          <div className="text-center">
            <Controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
