import Roll from "@components/roll/Roll";
import { FC } from "react";
import { VideoCategory } from "../types";
import { useSearchParams } from "react-router-dom";

interface TitleRollProps {
  sortedVideos: VideoCategory[];
}

export const TitleRoll: FC<TitleRollProps> = ({ sortedVideos }) => {
  const [params] = useSearchParams();
  const itemRenderFunction = (video: VideoCategory) => {
    return <h2 className={"title"}>{video.title}</h2>;
  };

  return (
    <Roll
      height="40px"
      alignment="center"
      currIndex={sortedVideos.findIndex(
        (video) => video.name === params.get("category")
      )}
      items={sortedVideos}
      itemRenderFunction={itemRenderFunction}
    />
  );
};
