import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import ytBgTablet from "@assets/tablet/yt-case-study-bg.jpg";
import ytBgDesktop from "@assets/desktop/yt-case-study-bg-desktop.jpg";
import youtubeCaseStudyMobile from "@assets/mobile/youtube-case-study-visual.png";
import ytPhone1 from "@assets/yt-phone-1.png";
import ytPhone2 from "@assets/yt-phone-2.png";
import ytPhone3 from "@assets/yt-phone-3.png";
import clsx from "clsx";

export const YoutubeProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { youtube } = projectTranslations;
  const background = isDesktop ? ytBgDesktop : ytBgTablet;

  return (
    <ProjectCard
      className="lg:pr-0"
      background={background}
      header={isMobile ? youtube.mobile.title : youtube.default.title}
      subheader={
        isMobile ? youtube.mobile.description : youtube.default.description
      }
      skills={youtube.skills}
      visual={
        <div className="centered-row flex-1 flex">
          {isMobile ? (
            <img
              loading="lazy"
              className={clsx("h-192px", "md:h-256px")}
              src={youtubeCaseStudyMobile}
            />
          ) : (
            <div
              className={clsx(
                "relative w-full aspect-square",
                "md:w-[17rem]",
                "lg:w-[29rem]"
              )}
            >
              <img
                loading="lazy"
                className={clsx(
                  "absolute top-[30%] left-[30%] rotate-[-60deg] transition-transform duration-300 group-hover:rotate-[-50deg] group-hover:translate-x-[-2%] group-hover-translate-x-[-2%]",
                  "md:h-200px",
                  "lg:h-320px"
                )}
                src={ytPhone1}
              />
              <img
                loading="lazy"
                className={clsx(
                  "absolute top-[15%] left-[40%] rotate-[-50deg] transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:translate-x-[2%] group-hover:translate-y-[-5%]",
                  "md:h-200px",
                  "lg:h-320px"
                )}
                src={ytPhone2}
              />
              <img
                loading="lazy"
                className={clsx(
                  "absolute top-[0%] left-[50%] rotate-[-40deg] transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:translate-x-[15%] group-hover:translate-y-[-8%]",
                  "md:h-200px",
                  "lg:h-320px"
                )}
                src={ytPhone3}
              />
            </div>
          )}
        </div>
      }
    />
  );
};
