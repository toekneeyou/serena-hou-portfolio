import { useViewportState } from "@contexts/viewport/hooks";
import clsx from "clsx";
import { useVideos } from "./hooks/useVideos";

export const VideoView = () => {
  const { videos } = useVideos();
  const { isDesktop } = useViewportState();
  const title = "VIDEOS";

  return (
    <main className="main-content-layout">
      <div
        className={clsx(
          "fluid-container",
          "lg:grid lg:grid-cols-[10rem_1fr] lg:gap-x-44",
          "xl:gap-x-60"
        )}
      >
        {isDesktop && (
          <div className="h-full centered-row">
            <h2 className="text-160px font-black font-mango text-nowrap -rotate-90">
              {title}
            </h2>
          </div>
        )}

        {!isDesktop && (
          <div className="title-container">
            <h2 className="title">{title}</h2>
          </div>
        )}

        <div className="lg:flex lg:flex-col lg:items-start">
          <ul className={clsx("grid grid-cols-1 gap-9", "md:grid-cols-2")}>
            {videos.map((video) => {
              return (
                <li key={video.name} className="w-full">
                  <button onClick={() => window.open(video.videoUrl, "_blank")}>
                    <img
                      src={video.thumbnailUrl}
                      className={clsx(
                        "mb-2 rounded-xl h-52 object-cover",
                        "lg:h-64"
                      )}
                    />
                    <h3
                      className={clsx(
                        "text-18px font-bold mb-1 text-start",
                        "lg:text-20px"
                      )}
                    >
                      {video.title}
                    </h3>
                    <p
                      className={clsx(
                        "text-12px text-neutral-300 text-start",
                        "lg:text-14px"
                      )}
                    >
                      {video.category.title}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};
