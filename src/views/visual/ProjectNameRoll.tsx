import Roll, { RollProps } from "../../components/roll/Roll";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  Visual,
  visualGetCurrIndex,
  visualGetVisuals,
} from "../../store/visualSlice";

const ProjectNameRoll = () => {
  const visuals = useAppSelector(visualGetVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);

  const projectNameRenderFunction: RollProps<Visual>["itemRenderFunction"] = (
    item
  ) => {
    return <span>{item.name}</span>;
  };

  return (
    <div className="project-name-roll flex gap-x-[1ch] h-6">
      Project:{" "}
      <Roll
        items={visuals}
        itemRenderFunction={projectNameRenderFunction}
        currIndex={currIndex}
      />
    </div>
  );
};

export default ProjectNameRoll;
