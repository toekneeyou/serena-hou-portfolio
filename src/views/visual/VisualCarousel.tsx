import { useCallback } from "react";
import Roll, { RollProps } from "../../components/roll/Roll";
import { classnames } from "../../lib/helpers";
import {
  getVisualIds,
  getVisuals,
  Visual,
  visualGetCurrIndex,
  visualSetCurrIndex,
} from "../../store/visualSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";

const VisualCarousel = () => {
  const currIndex = useAppSelector(visualGetCurrIndex);

  return (
    <div className="w-full centered-row relative">
      <div
        className={classnames("centered-row gap-x-6 absolute left-0 z-10 ", {
          "mix-blend-exclusion": currIndex !== 1 && currIndex !== 6,
        })}
      >
        <div className="h-1 bg-white w-44" />
        <Title />
      </div>
      <div className="centered-row relative">
        <Cover />
        <Scroller />
      </div>
    </div>
  );
};

const Title = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const titleRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return (
        <div className="max-w-[42ch]">
          <h2 className="text-7xl">{item.title}</h2>
        </div>
      );
    }, []);
  return (
    <Roll
      currIndex={currIndex}
      items={visuals}
      direction="down"
      itemRenderFunction={titleRenderFunction}
    />
  );
};

const Cover = () => {
  const visuals = useAppSelector(getVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  const coverRenderFunction: RollProps<Visual>["itemRenderFunction"] =
    useCallback((item) => {
      return (
        <button className="h-[485px]">
          <img src={item.image} className="rounded-[0.5rem]" />
        </button>
      );
    }, []);
  return (
    <Roll
      currIndex={currIndex}
      items={visuals}
      itemRenderFunction={coverRenderFunction}
    />
  );
};

const Scroller = () => {
  const dispatch = useAppDispatch();
  const visualIds = useAppSelector(getVisualIds);
  const currIndex = useAppSelector(visualGetCurrIndex);
  return (
    <div className="flex flex-col items-center justify-start absolute -right-14 w-[24px]">
      {visualIds.map((id, i) => {
        const isCurr = currIndex === i;
        const yOffset =
          Math.floor(visualIds.length / 2) * 100 - 100 * currIndex;

        const handleClick = () => {
          dispatch(visualSetCurrIndex(i));
        };

        return (
          <button
            key={id}
            type="button"
            onClick={handleClick}
            className="centered-row h-5 transition-transform"
            style={{ transform: `translateY(${yOffset}%)` }}
          >
            <div
              className={classnames(
                "h-[6px] w-[12px] rounded-[0.25rem] bg-[#E5DBD0] transition-all",
                { "opacity-30 w-[12px]": !isCurr, "w-[24px]": isCurr }
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export default VisualCarousel;
