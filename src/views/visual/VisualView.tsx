import { useCallback, useEffect, useRef, WheelEventHandler } from "react";
import VisualCarousel from "./VisualCarousel";
import Roll, { RollProps } from "../../components/roll/Roll";
import { WrenchIcon } from "@heroicons/react/20/solid";
import {
  getVisuals,
  injectVisualSlice,
  Visual,
  visualGetCurrIndex,
  visualGetCurrIndexStatus,
  visualInitialFetch,
  visualNext,
  visualPrev,
} from "../../store/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { classnames } from "../../lib/helpers";

export const VisualView = () => {
  const dispatch = useAppDispatch();
  const doNotInterupt = useRef(false);
  const { canGoToNextVisual, canGoToPrevVisual } = useAppSelector(
    visualGetCurrIndexStatus
  );
  /**
   *
   * Inject visual slice into redux store
   *
   */
  useEffect(() => {
    injectVisualSlice();
  }, []);
  /**
   * Initial fetch of visuals
   */
  useEffect(() => {
    dispatch(visualInitialFetch());
  }, [dispatch]);
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
      <div className="between-row w-full pl-32 pr-14 pb-10">
        <ProjectName />
        <Date />
      </div>
      <VisualCarousel />
      <div className="between-row w-full pl-32 pr-14 pt-10">
        <Tags />
        <ProjectNumber />
      </div>
    </section>
  );
};

const ProjectName = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const projectNameRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return <span>{item.name}</span>;
    }, []);
  return (
    <div className="flex gap-x-[1ch] h-6">
      Project:{" "}
      <Roll
        items={visuals}
        itemRenderFunction={projectNameRenderFunction}
        currIndex={currIndex}
      />
    </div>
  );
};
const Date = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const dateRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return <span>{item.date}</span>;
    }, []);
  return (
    <Roll
      items={visuals}
      currIndex={currIndex}
      itemRenderFunction={dateRenderFunction}
    />
  );
};
const Tags = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const tagsRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return (
        <ul className="flex">
          {item.tags.map((tag, i) => {
            const isLast = i === item.tags.length - 1;
            return (
              <li
                key={tag}
                className={classnames("uppercase", {
                  "after:content-['/'] after:mx-[1ch]": !isLast,
                })}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      );
    }, []);
  return (
    <Roll
      items={visuals}
      currIndex={currIndex}
      itemRenderFunction={tagsRenderFunction}
    />
  );
};
const ProjectNumber = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const itemNumberRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((_, i) => {
      return <span>{(i ?? 0) + 1}</span>;
    }, []);
  return (
    <div className="flex">
      <WrenchIcon className="size-4 mr-[1ch] translate-y-[2px]" />
      00:00:00:0
      <Roll
        items={visuals}
        currIndex={currIndex}
        itemRenderFunction={itemNumberRenderFunction}
      />
    </div>
  );
};
