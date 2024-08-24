import { WrenchIcon } from "@heroicons/react/20/solid";
import Roll, { RollProps } from "../../components/roll/Roll";
import { useCallback } from "react";
import {
  videoGetAllVideoIds,
  videoGetCurrIndex,
} from "../../store/video/videoSlice";
import { useAppSelector } from "../../lib/hooks/reduxHooks";

const VideoNumberRoll = () => {
  const videoIds = useAppSelector(videoGetAllVideoIds);
  const currIndex = useAppSelector(videoGetCurrIndex);

  const itemNumberRenderFunction: RollProps<string>["itemRenderFunction"] =
    useCallback((_, i) => {
      return <span>{(i ?? 0) + 1}</span>;
    }, []);
  return (
    <div className="flex">
      <WrenchIcon className="size-4 mr-[1ch] translate-y-[2px]" />
      00:00:00:0
      <Roll
        items={videoIds}
        currIndex={currIndex}
        itemRenderFunction={itemNumberRenderFunction}
      />
    </div>
  );
};

export default VideoNumberRoll;
