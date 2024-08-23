import { useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoGetCategoryEntities,
  videoGetCategoryIds,
  videoGetCategoryCurrIndex,
} from "../../store/video/videoSlice";

const VideoCategoryRoll = () => {
  const categoryIds = useAppSelector(videoGetCategoryIds);
  const categoryEntities = useAppSelector(videoGetCategoryEntities);
  const categoryCurrIndex = useAppSelector(videoGetCategoryCurrIndex);

  return (
    <ul
      className="video-category-roll h-[inherit] grid w-24 overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${categoryIds.length}, 6rem)`,
      }}
    >
      {categoryIds.map((categoryId) => {
        const categoryTitle = categoryEntities[categoryId].title;
        return (
          <li
            key={categoryTitle}
            className="centered-row w-24 transition-transform"
            style={{ transform: `translateX(-${categoryCurrIndex * 100}%)` }}
          >
            <h2 className=" text-nowrap inline-block -rotate-90 uppercase font-oswald text-8xl">
              {categoryTitle}
            </h2>
          </li>
        );
      })}
    </ul>
  );
};

export default VideoCategoryRoll;
