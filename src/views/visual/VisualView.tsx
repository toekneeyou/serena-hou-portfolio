import { useRef, WheelEventHandler } from "react";
import VisualCarousel from "./VisualCarousel";
import {
  visualGetCurrIndexStatus,
  visualNext,
  visualPrev,
} from "../../store/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import VisualInitializer from "./VisualInitializer";
import ProjectNameRoll from "./ProjectNameRoll";
import DateRoll from "./DateRoll";
import ProjectNumberRoll from "./ProjectNumberRoll";
import TagsRoll from "./TagsRoll";

export const VisualView = () => {
  const dispatch = useAppDispatch();
  const doNotInterupt = useRef(false);
  const { canGoToNextVisual, canGoToPrevVisual } = useAppSelector(
    visualGetCurrIndexStatus
  );
  /**
   *
   * Detects wheel event and scrolls to the next or current page
   *
   */
  const handleWheel: WheelEventHandler<HTMLElement> = (e) => {
    if (!doNotInterupt.current) {
      const isNext = e.deltaY >= 32 && canGoToNextVisual;
      const isPrev = e.deltaY <= -32 && canGoToPrevVisual;

      if (isNext || isPrev) {
        doNotInterupt.current = true;
        setTimeout(() => {
          doNotInterupt.current = false;
        }, 300);
        if (isNext) dispatch(visualNext());
        if (isPrev) dispatch(visualPrev());
      }
    }
  };

  return (
    <section className="h-screen w-full centered-col" onWheel={handleWheel}>
      <VisualInitializer />
      <div className="between-row w-full pl-32 pr-14 pb-10">
        <ProjectNameRoll />
        <DateRoll />
      </div>
      <VisualCarousel />
      <div className="between-row w-full pl-32 pr-14 pt-10">
        <TagsRoll />
        <ProjectNumberRoll />
      </div>
    </section>
  );
};
