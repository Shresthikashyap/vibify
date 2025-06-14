import {
  Shuffle,
  StepBack,
  StepForward,
  CirclePlay,
  Repeat,
} from "lucide-react";

const Player = () => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="flex items-center gap-3 text-white">
        <Shuffle size={19} />
        <StepBack size={19} />
        <CirclePlay size={30} className="" />
        <StepForward size={19} />
        <Repeat size={19} />
      </div>

      <div className="flex justify-center gap-1.5 items-center">
        <div className="text-gray-300 text-xs">
          0:00
        </div>
        <div className="bg-gray-600 h-1.5 w-[28rem] rounded-full"></div>
        <div className="text-xs text-gray-300">
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
