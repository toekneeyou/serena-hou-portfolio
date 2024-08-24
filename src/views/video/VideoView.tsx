import { useRef, WheelEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetCurrIndexStatus,
  videoNext,
  videoPrev,
} from "../../store/video/videoSlice";

import VideoCurrCategoryRoll from "./VideoCurrCategoryRoll";
import VideoCarousel from "./VideoCarousel";
import VideoCategoryListRoll from "./VideoCategoryListRoll";
import VideoInitializer from "./VideoInitializer";
import VideoNumberRoll from "./VideoNumberRoll";
import VideoScroller from "./VideoScroller";

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
        <VideoCurrCategoryRoll />
        <VideoCategoryListRoll />
      </div>

      <div className="absolute left-0 top-0 w-full h-full overflow-hidden centered-row">
        <div className="relative">
          <VideoCarousel />
          <div className="absolute h-full -right-14 top-0 centered-row">
            <VideoScroller />
          </div>
        </div>
      </div>

      <div className="flex items-end h-full pr-14 pb-28">
        <VideoNumberRoll />
      </div>
    </section>
  );
};
