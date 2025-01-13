import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import youtubeBgTablet from "@assets/tablet/yt-case-study-bg.jpg";
import youtubeCaseStudyMobile from "@assets/mobile/youtube-case-study-visual.png";
import ytPhone1 from "@assets/yt-phone-1.png";
import ytPhone2 from "@assets/yt-phone-2.png";
import ytPhone3 from "@assets/yt-phone-3.png";

export const YoutubeProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { youtube } = projectTranslations;
  const background = isDesktop ? undefined : youtubeBgTablet;

  return (
    <ProjectCard
      background={background}
      header={isMobile ? youtube.mobile.title : youtube.default.title}
      subheader={
        isMobile ? youtube.mobile.description : youtube.default.description
      }
      skills={youtube.skills}
      visual={
        <div className="centered-row flex-1 flex">
          {isMobile ? (
            <img className="h-[188px] md:h-64" src={youtubeCaseStudyMobile} />
          ) : (
            <div className="relative w-full aspect-square">
              <img
                loading="lazy"
                className="absolute top-[23%] left-[26%] w-[35%] rotate-[-45deg] transition-transform duration-300 group-hover:rotate-[-50deg] group-hover:translate-x-[-2%] group-hover-translate-x-[-2%]"
                src={ytPhone1}
              />
              <img
                loading="lazy"
                className="absolute top-[11%] left-[36%] w-[35%] rotate-[-36deg] transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:translate-x-[2%] group-hover:translate-y-[-5%]"
                src={ytPhone2}
              />
              <img
                loading="lazy"
                className="absolute top-[3%] left-[46%] w-[37%] rotate-[-20deg]  transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:translate-x-[15%] group-hover:translate-y-[-8%]"
                src={ytPhone3}
              />
            </div>
          )}
        </div>
      }
    />
  );
};
