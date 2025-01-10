import Roll, { RollProps } from "../../components/roll/Roll";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  Visual,
  visualGetCurrIndex,
  visualGetVisuals,
} from "../../store/visual/visualSlice";
import { WrenchIcon } from "@heroicons/react/20/solid";

const ProjectNumberRoll = () => {
  const visuals = useAppSelector(visualGetVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);
  /**
   * Renders project numbers inside Roll
   */
  const itemNumberRenderFunction: RollProps<Visual>["itemRenderFunction"] = (
    _,
    i
  ) => {
    return <span>{(i ?? 0) + 1}</span>;
  };

  return (
    <div className="project-number-roll flex">
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

export default ProjectNumberRoll;
