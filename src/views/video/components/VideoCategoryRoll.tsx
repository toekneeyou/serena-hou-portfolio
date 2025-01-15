import Roll from "@components/roll/Roll";
import { FC, useMemo } from "react";
import { VideoCategory } from "../types";
import { useSearchParams } from "react-router-dom";
import { useViewportState } from "@contexts/viewport/hooks";
import { pxToRem } from "@helpers/conversions";

interface VideoCategoryRollProps {
  sortedVideos: VideoCategory[];
}

export const VideoCategoryRoll: FC<VideoCategoryRollProps> = ({
  sortedVideos,
}) => {
  const [params] = useSearchParams();
  const { viewportSize } = useViewportState();
  const itemRenderFunction = (video: VideoCategory) => {
    return <h3 className="text-20px font-light">{video.title}</h3>;
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
        return pxToRem(30);
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
