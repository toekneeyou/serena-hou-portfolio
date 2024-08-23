import { useCallback, useRef, WheelEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetAllVideoIds,
  videoGetCurrIndex,
  videoGetCurrIndexStatus,
  videoNext,
  videoPrev,
} from "../../store/video/videoSlice";

import VideoCategoryRoll from "./VideoCategoryRoll";
import VideoCarousel from "./VideoCarousel";
import VideoCategoryListRoll from "./VideoCategoryListRoll";
import VideoInitializer from "./VideoInitializer";
import Roll, { RollProps } from "../../components/roll/Roll";
import { WrenchIcon } from "@heroicons/react/20/solid";

export const VideoView = () => {
  const dispatch = useAppDispatch();
  const doNotInterupt = useRef(false);
  const { canGoToNextVideo, canGoToPrevVideo } = useAppSelector(
    videoGetCurrIndexStatus
  );
  /**
   * Detects wheel event and scrolls to the next or current page
   */
  const handleWheel: WheelEventHandler<HTMLElement> = (e) => {
    if (!doNotInterupt.current) {
      const isNext = e.deltaY >= 32 && canGoToNextVideo;
      const isPrev = e.deltaY <= -32 && canGoToPrevVideo;

      if (isNext || isPrev) {
        doNotInterupt.current = true;
        setTimeout(() => {
          doNotInterupt.current = false;
        }, 300);
        if (isNext) dispatch(videoNext());
        if (isPrev) dispatch(videoPrev());
      }
    }
  };

  return (
    <section
      className="between-row w-full h-screen relative"
      onWheel={handleWheel}
    >
      <VideoInitializer />
      <div className="centered-row h-[inherit] w-max z-[1]">
        <VideoCategoryRoll />
        <VideoCategoryListRoll />
      </div>
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden centered-row">
        <VideoCarousel />
      </div>
      <div className="flex items-end h-full pr-14 pb-28">
        <VideoNumber />
      </div>
    </section>
  );
};

const VideoNumber = () => {
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
