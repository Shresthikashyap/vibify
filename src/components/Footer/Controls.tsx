import {
  SquarePlay,
  MicVocal,
  Logs,
  MonitorSpeaker,
  Volume2,
  TvMinimal,
  Maximize,
} from "lucide-react";

const Controls = () => {
  return (
    <div className="flex justify-end items-center text-gray-300 ">
      <SquarePlay className="mx-2" size={18} />
      <MicVocal className="mx-2" size={18} />
      <Logs className="mx-2" size={18} />
      <MonitorSpeaker className="mx-2" size={18} />
      <Volume2 className="mx-2" size={18} />

      <div className=" bg-gray-700 h-1.5 w-[5rem] rounded-full"></div>

      <TvMinimal className="mx-2" size={18} />
      <Maximize className="mx-2" size={18} />
    </div>
  );
};

export default Controls;
