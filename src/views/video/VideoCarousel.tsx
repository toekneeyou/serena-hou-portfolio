import { classnames } from "../../lib/helpers";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetAllVideoIds,
  videoGetCurrIndex,
  videoGetVideoEntities,
} from "../../store/video/videoSlice";

const VideoCarousel = () => {
  const allVideoIds = useAppSelector(videoGetAllVideoIds);
  const videoEntities = useAppSelector(videoGetVideoEntities);
  const currIndex = useAppSelector(videoGetCurrIndex);
  const diff = (480 + 48) / 480;

  return (
    <ul className="h-[480px] space-y-12">
      {allVideoIds.map((videoId, i) => {
        const video = videoEntities[videoId!];

        if (video) {
          const isCurr = i === currIndex;

          return (
            <li key={videoId}>
              <img
                aria-hidden={isCurr ? "false" : "true"}
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
            </li>
          );
        } else {
          console.log(`Could not find video ${videoId}`);
          return null;
        }
      })}
    </ul>
  );
};

export default VideoCarousel;
