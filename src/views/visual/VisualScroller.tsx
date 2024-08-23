import Scroller from "../../components/scroller/Scroller";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  visualGetCurrIndex,
  visualGetVisualIds,
  visualSetCurrIndex,
} from "../../store/visualSlice";

const VisualScroller = () => {
  const dispatch = useAppDispatch();
  const currIndex = useAppSelector(visualGetCurrIndex);
  const visualIds = useAppSelector(visualGetVisualIds);

  const handleSelection = (index: number) => {
    dispatch(visualSetCurrIndex(index));
  };

  return (
    <Scroller
      pages={visualIds.length}
      currIndex={currIndex}
      handleSelection={handleSelection}
    />
  );
};

export default VisualScroller;
