import { useEffect } from "react";
import {
  injectVisualSlice,
  visualGetShouldFetch,
  visualInitialFetch,
  visualSetCurrIndex,
} from "../../store/visual/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";

const VisualInitializer = () => {
  const dispatch = useAppDispatch();
  const shouldFetch = useAppSelector(visualGetShouldFetch);
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
