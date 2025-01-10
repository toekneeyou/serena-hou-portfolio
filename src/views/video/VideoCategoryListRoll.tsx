import { isAriaHidden } from "../../lib/helpers/general";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  videoSetCurrIndex,
  videoGetAllVideoIds,
  videoGetCategoryEntities,
  videoGetCategoryIds,
  videoGetCategoryCurrIndex,
  videoGetVideoEntities,
} from "../../store/video/videoSlice";

const HEIGHT = 1.5; // rem

const VideoCategoryListRoll = () => {
  const dispatch = useAppDispatch();
  const categoryIds = useAppSelector(videoGetCategoryIds);
  const categoryEntities = useAppSelector(videoGetCategoryEntities);
  const categoryCurrIndex = useAppSelector(videoGetCategoryCurrIndex);
  const allVideoIds = useAppSelector(videoGetAllVideoIds);
  const videoEntities = useAppSelector(videoGetVideoEntities);

  const createListElements = (categoryId: string, i: number) => {
    const categoryEntity = categoryEntities[categoryId];
    if (categoryEntity) {
      const categoryTitle = categoryEntities[categoryId].title;
      const handleClick = () => {
        const index = allVideoIds.findIndex((id) => {
          const video = videoEntities[id!];
          return video.categoryId === categoryId;
        });
        if (index >= 0) {
          dispatch(videoSetCurrIndex(index));
        }
      };

      return (
        <li
          aria-hidden={isAriaHidden(i, categoryCurrIndex)}
          key={categoryTitle}
          className="transition-all flex gap-x-4 items-center group hover:ml-2"
          style={{
            transform: `translateY(-${(categoryCurrIndex + 1) * 175}%)`,
          }}
        >
          <div className="w-[2px] h-[1.125rem] transition-transform bg-white group-hover:-rotate-90" />
          <button
            className="text-nowrap inline-block uppercase transition-transform group-hover:translate-x-4 group-hover:scale-[1.1]"
            onClick={handleClick}
          >
            {categoryTitle}
          </button>
        </li>
      );
    } else {
      console.log(`category entity: ${categoryId} not found`);
      return null;
    }
  };

  return (
    <ul
      style={{ height: `${(categoryIds.length - 1) * HEIGHT * 1.75}rem` }}
      className="overflow-hidden space-y-[1.125rem] px-7"
    >
      {categoryIds.map(createListElements)}
    </ul>
  );
};

export default VideoCategoryListRoll;
