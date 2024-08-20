import { useCallback, useEffect, useRef, WheelEventHandler } from "react";
import VisualCarousel from "./VisualCarousel";
import Roll, { RollProps } from "../../components/roll/Roll";
import { WrenchIcon } from "@heroicons/react/20/solid";
import {
  getCurrPage,
  getCurrPageStatus,
  getVisuals,
  injectVisualSlice,
  nextVisual,
  prevVisual,
  Visual,
} from "../../store/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";

export const VisualView = () => {
  const dispatch = useAppDispatch();
  const doNotInterupt = useRef(false);
  const { canGoToNextPage, canGoToPrevPage } =
    useAppSelector(getCurrPageStatus);
  /**
   *
   * Inject visual slice into redux store
   *
   */
  useEffect(() => {
    injectVisualSlice();
  }, [dispatch]);
  /**
   *
   * Detects wheel event and scrolls to the next or current page
   *
   */
  const handleWheel: WheelEventHandler<HTMLElement> = (e) => {
    if (!doNotInterupt.current) {
      const isNext = e.deltaY >= 32 && canGoToNextPage;
      const isPrev = e.deltaY <= -32 && canGoToPrevPage;

      if (isNext || isPrev) {
        doNotInterupt.current = true;
        setTimeout(() => {
          doNotInterupt.current = false;
        }, 300);
        if (isNext) dispatch(nextVisual());
        if (isPrev) dispatch(prevVisual());
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
        <Duties />
        <ProjectNumber />
      </div>
    </section>
  );
};

const ProjectName = () => {
  const visuals = useAppSelector(getVisuals);
  const currPage = useAppSelector(getCurrPage);
  const projectNameRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return <span>{item.projectName}</span>;
    }, []);
  return (
    <div className="flex gap-x-[1ch] h-6">
      Project:{" "}
      <Roll
        items={visuals}
        itemRenderFunction={projectNameRenderFunction}
        currIndex={currPage}
      />
    </div>
  );
};
const Date = () => {
  const visuals = useAppSelector(getVisuals);
  const currPage = useAppSelector(getCurrPage);
  const dateRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return <span>{item.date}</span>;
    }, []);
  return (
    <Roll
      items={visuals}
      currIndex={currPage}
      itemRenderFunction={dateRenderFunction}
    />
  );
};
const Duties = () => {
  const visuals = useAppSelector(getVisuals);
  const currPage = useAppSelector(getCurrPage);
  const dutiesRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return <span>{item.duties}</span>;
    }, []);
  return (
    <Roll
      items={visuals}
      currIndex={currPage}
      itemRenderFunction={dutiesRenderFunction}
    />
  );
};
const ProjectNumber = () => {
  const visuals = useAppSelector(getVisuals);
  const currPage = useAppSelector(getCurrPage);
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
        currIndex={currPage}
        itemRenderFunction={itemNumberRenderFunction}
      />
    </div>
  );
};
