import Roll, { RollProps } from "../../components/roll/Roll";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  Visual,
  visualGetCurrIndex,
  visualGetVisuals,
} from "../../store/visualSlice";
import { classnames } from "../../lib/helpers";

const TagsRoll = () => {
  const visuals = useAppSelector(visualGetVisuals);
  const currIndex = useAppSelector(visualGetCurrIndex);

  const tagsRenderFunction: RollProps<Visual>["itemRenderFunction"] = (
    item
  ) => {
    return (
      <ul className="tags-roll flex">
        {item.tags.map((tag, i) => {
          const isLast = i === item.tags.length - 1;
          return (
            <li
              key={tag}
              className={classnames("capitalize", {
                "after:content-['/'] after:mx-[1ch]": !isLast,
              })}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Roll
      items={visuals}
      currIndex={currIndex}
      itemRenderFunction={tagsRenderFunction}
    />
  );
};

export default TagsRoll;
