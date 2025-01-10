import Roll, { RollProps } from "../../components/roll/Roll";
import { classnames } from "../../lib/helpers/helpers";
import {
  Visual,
  visualGetCurrIndex,
  visualGetVisuals,
} from "../../store/visual/visualSlice";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import VisualScroller from "./VisualScroller";

const VisualCarousel = () => {
  const currIndex = useAppSelector(visualGetCurrIndex);
  const visuals = useAppSelector(visualGetVisuals);

  return (
    <div className="w-full centered-row relative">
      <div
        className={classnames("centered-row gap-x-6 absolute left-0 z-10 ", {
          "mix-blend-exclusion": visuals[currIndex]?.isBlendText,
        })}
      >
        <div className="h-1 bg-white w-44" />
        <Title />
      </div>
      <div className="centered-row relative">
        <Cover />
        <VisualScroller />
      </div>
    </div>
  );
};

const Title = () => {
  const visuals = useAppSelector(visualGetVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);

  const titleRenderFunction: RollProps<Visual>["itemRenderFunction"] = (
    item
  ) => {
    return (
      <div className="max-w-[42ch]">
        <h2 className="text-7xl">{item.title}</h2>
      </div>
    );
  };
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
  const visuals = useAppSelector(visualGetVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);

  const coverRenderFunction: RollProps<Visual>["itemRenderFunction"] = (
    item
  ) => {
    return (
      <button className="h-[485px]">
        <img src={item.image} className="rounded-[0.5rem]" />
      </button>
    );
  };

  return (
    <Roll
      currIndex={currIndex}
      items={visuals}
      itemRenderFunction={coverRenderFunction}
    />
  );
};

export default VisualCarousel;
