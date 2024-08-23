import { classnames } from "../../lib/helpers";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetAllVideoIds,
  videoGetCurrIndex,
  videoGetVideoEntities,
} from "../../store/video/videoSlice";
import VideoScroller from "./VideoScroller";

const VideoCarousel = () => {
  const allVideoIds = useAppSelector(videoGetAllVideoIds);
  const videoEntities = useAppSelector(videoGetVideoEntities);
  const currIndex = useAppSelector(videoGetCurrIndex);

  const diff = (480 + 48) / 480;

  return (
    <div className="relative">
      <ul className="h-[480px] space-y-12">
        {allVideoIds.map((videoId, i) => {
          const video = videoEntities[videoId!];

          if (video) {
            const isCurr = i === currIndex;

            return (
              <img
                key={videoId}
                className={classnames("transition-transform", {
                  "brightness-50": !isCurr,
                })}
                src={video.thumbnailUrl}
                style={{
                  transform: `translateY(calc(${
                    currIndex * -100 * diff
                  }%)) scale(${isCurr ? 1 : 0.75})`,
                }}
              />
            );
          } else {
            console.log(`Could not find video ${videoId}`);
            return null;
          }
        })}
      </ul>
      <div className="absolute h-full -right-14 top-0 centered-row">
        <VideoScroller />
      </div>
    </div>
  );
};

export default VideoCarousel;
