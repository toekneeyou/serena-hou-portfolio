import { useCallback } from "react";
import Roll, { RollProps } from "../../components/roll/Roll";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  Visual,
  visualGetCurrIndex,
  visualGetVisuals,
} from "../../store/visualSlice";

const DateRoll = () => {
  const visuals = useAppSelector(visualGetVisuals);
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

export default DateRoll;
