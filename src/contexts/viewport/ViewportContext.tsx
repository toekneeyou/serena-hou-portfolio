import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ViewportSize, ViewportStateValues } from "./types";
import {
  calculateViewportSize,
  isDesktop,
  isMobile,
  isTablet,
} from "./helpers";

export const ViewportStateContext = createContext<ViewportStateValues | null>(null);

export const ViewportProvider: FC<PropsWithChildren> = ({ children }) => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>(
    calculateViewportSize
  );
  const prevViewportSize = useRef<ViewportSize>(viewportSize);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const newViewportSize = calculateViewportSize();
      if (prevViewportSize.current !== newViewportSize) {
        setViewportSize(calculateViewportSize());
        prevViewportSize.current = newViewportSize;
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const viewportStateValues: ViewportStateValues = useMemo(() => {
    return {
      viewportSize,
      isMobile: isMobile(viewportSize),
      isTablet: isTablet(viewportSize),
      isDesktop: isDesktop(viewportSize),
    };
  }, [viewportSize]);

  return (
    <ViewportStateContext.Provider value={viewportStateValues}>
      {children}
    </ViewportStateContext.Provider>
  );
};
