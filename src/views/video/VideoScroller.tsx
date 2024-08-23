import Scroller from "../../components/scroller/Scroller";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetAllVideoIds,
  videoGetCurrIndex,
  videoSetCurrIndex,
} from "../../store/video/videoSlice";

const VideoScroller = () => {
  const dispatch = useAppDispatch();
  const currIndex = useAppSelector(videoGetCurrIndex);
  const videoIds = useAppSelector(videoGetAllVideoIds);
  const handleSelection = (index: number) => {
    dispatch(videoSetCurrIndex(index));
  };
  return (
    <Scroller
      currIndex={currIndex}
      pages={videoIds.length}
      handleSelection={handleSelection}
    />
  );
};

export default VideoScroller;
