import Roll from "@components/roll/Roll";
import { FC, useMemo } from "react";
import { VideoCategory } from "../types";
import { useSearchParams } from "react-router-dom";
import { useViewportState } from "@contexts/viewport/hooks";
import { pxToRem } from "@helpers/conversions";

interface TitleRollProps {
  sortedVideos: VideoCategory[];
}

export const TitleRoll: FC<TitleRollProps> = ({ sortedVideos }) => {
  const [params] = useSearchParams();
  const { viewportSize } = useViewportState();
  const itemRenderFunction = (video: VideoCategory) => {
    return <h2 className={"title"}>{video.title}</h2>;
  };

  const height = useMemo(() => {
    switch (viewportSize) {
      case "3xl":
      case "2xl":
      case "xl":
      case "lg":
      case "md":
        return pxToRem(120);
      default:
        return pxToRem(40);
    }
  }, [viewportSize]);

  return (
    <Roll
      height={height}
      alignment="center"
      currIndex={sortedVideos.findIndex(
        (video) => video.name === params.get("category")
      )}
      items={sortedVideos}
      itemRenderFunction={itemRenderFunction}
    />
  );
};
