import { useEffect, useRef } from "react";
import {
  calculateViewportSize,
  setViewportSize,
  ViewportSize,
} from "../../store/viewportSlice";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";

const ViewportObserver = () => {
  const dispatch = useAppDispatch();
  const prevViewportSize = useRef<ViewportSize>();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const newViewportSize = calculateViewportSize();
      if (prevViewportSize.current !== newViewportSize) {
        dispatch(setViewportSize(calculateViewportSize()));
        prevViewportSize.current = newViewportSize;
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [dispatch]);

  return null;
};

export default ViewportObserver;
