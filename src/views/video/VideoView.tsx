import { VideoCategoryName } from "@views/video/types";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useVideos } from "./hooks/useVideos";
import { VideoCategoryRoll } from "./components/VideoCategoryRoll";
import { VIDEO_CATEGORY_PARAM, videoOrder } from "./constants";
import Scroller from "@components/scroller/Scroller";
import { SEGMENT_HEIGHT } from "@components/scroller/constants";
import { pxToRem } from "@helpers/conversions";
import { useViewportState } from "@contexts/viewport/hooks";

export const VideoView = () => {
  const [params, setParams] = useSearchParams();
  const { videos } = useVideos();
  const { isDesktop } = useViewportState();
  const videoRefs = useRef<HTMLLIElement[]>([]);
  const title = "VIDEO";

  const sortedVideos = useMemo(() => {
    return videos.sort((a, b) => {
      const indexA = videoOrder.indexOf(a.name as VideoCategoryName);
      const indexB = videoOrder.indexOf(b.name as VideoCategoryName);

      return indexA - indexB;
    });
  }, [videos]);

  const updateCategoryParam = useCallback(
    (categoryName: VideoCategoryName) => {
      const newParams = new URLSearchParams();
      if (!categoryName) {
        setParams(newParams);
        return;
      }
      newParams.set(VIDEO_CATEGORY_PARAM, categoryName);
      setParams(newParams);
    },
    [setParams]
  );

  useEffect(() => {
    if (params.size === 0 && sortedVideos.length > 0 && sortedVideos[0]?.name) {
      updateCategoryParam(sortedVideos[0].name);
    }
  }, [params, updateCategoryParam, sortedVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
            updateCategoryParam(
              (entry.target.getAttribute("data-name") as VideoCategoryName) ??
                ""
            );
          }
        });
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    );

    if (videoRefs.current) {
      videoRefs.current.forEach((el) => {
        observer.observe(el);
      });
    }
    return () => {
      observer.disconnect();
    };
  }, [sortedVideos, updateCategoryParam]);

  return (
    <main className="main-content-layout">
      {!isDesktop && (
        <div className="title-container fluid-container gap-y-0">
          <h2 className="title">{title}</h2>
          <VideoCategoryRoll sortedVideos={sortedVideos} />
        </div>
      )}

      <ul
        className="all-videos grid grid-flow-row w-screen overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth mb-7"
        style={{ gridTemplateColumns: `repeat(${sortedVideos.length}, 100%)` }}
      >
        {sortedVideos.map((category, i) => {
          return (
            <li
              key={category.name}
              className="inline-block h-[inherit] w-full snap-center"
              data-name={category.name}
              ref={(el) => {
                if (videoRefs.current) {
                  videoRefs.current[i] = el as HTMLLIElement;
                }
              }}
            >
              <ul
                className={clsx(
                  category.name,
                  "fluid-container mx-auto space-y-2"
                )}
              >
                {category.video.map((vid) => {
                  return (
                    <li
                      key={vid.name}
                      onClick={() => {
                        window.open(vid.videoUrl, "_blank");
                      }}
                    >
                      <img src={vid.thumbnailUrl} />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <div className="centered-row" style={{ height: pxToRem(SEGMENT_HEIGHT) }}>
        <div className="rotate-[270deg]">
          <Scroller
            pages={sortedVideos.length}
            currIndex={sortedVideos.findIndex(
              (video) => video.name === params.get("category")
            )}
          />
        </div>
      </div>
    </main>
  );
};
