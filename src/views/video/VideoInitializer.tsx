import { useEffect } from "react";
import {
  injectVideoSlice,
  videoGetShouldFetch,
  videoInitialFetch,
  videoSetCurrIndex,
} from "../../store/video/videoSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";

const VideoInitializer = () => {
  const dispatch = useAppDispatch();
  const shouldFetch = useAppSelector(videoGetShouldFetch);
  /**
   * Inject video reducer into redux store
   */
  useEffect(() => {
    injectVideoSlice();

    return () => {
      dispatch(videoSetCurrIndex(0));
    };
  }, [dispatch]);

  /**
   * Initial fetch of video categories and video entities
   */
  useEffect(() => {
    if (shouldFetch) {
      dispatch(videoInitialFetch());
    }
  }, [dispatch, shouldFetch]);

  return null;
};

export default VideoInitializer;
