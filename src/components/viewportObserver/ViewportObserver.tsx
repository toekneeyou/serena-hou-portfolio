import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateViewportSize,
  getViewportState,
  setViewportSize,
} from "../../store/viewportSlice";

const ViewportObserver = () => {
  const { viewportSize } = useSelector(getViewportState);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const newViewportSize = calculateViewportSize();
      if (viewportSize !== newViewportSize)
        dispatch(setViewportSize(calculateViewportSize()));
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [dispatch, viewportSize]);

  return null;
};

export default ViewportObserver;
