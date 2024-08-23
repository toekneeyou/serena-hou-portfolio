import { useEffect } from "react";
import {
  injectVisualSlice,
  visualGetLastUpdatedTime,
  visualInitialFetch,
  visualSetCurrIndex,
} from "../../store/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";

const FIVE_MINUTES = 600000;

const VisualInitializer = () => {
  const dispatch = useAppDispatch();
  const lastUpdatedTime = useAppSelector(visualGetLastUpdatedTime);
  const shouldFetch = lastUpdatedTime
    ? new Date().getMilliseconds() - lastUpdatedTime.getMilliseconds() >
      FIVE_MINUTES
    : true;
  /**
   * Inject visual slice into redux store
   */
  useEffect(() => {
    injectVisualSlice();

    return () => {
      dispatch(visualSetCurrIndex(0));
    };
  }, [dispatch]);
  /**
   * Initial fetch of visuals
   */
  useEffect(() => {
    if (shouldFetch) {
      dispatch(visualInitialFetch());
    }
  }, [shouldFetch, dispatch]);

  return null;
};

export default VisualInitializer;
