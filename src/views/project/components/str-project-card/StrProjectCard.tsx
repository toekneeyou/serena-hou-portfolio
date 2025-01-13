import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import strBgTablet from "@assets/tablet/str-case-study-bg.jpg";
import strVisualTablet from "@assets/tablet/str-case-study-visual.png";
import clsx from "clsx";

export const StrProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { str } = projectTranslations;
  const background = isDesktop ? undefined : strBgTablet;

  return (
    <ProjectCard
      className="group"
      header={isMobile ? str.mobile.title : str.default.title}
      subheader={isMobile ? str.mobile.description : str.default.description}
      background={background}
      skills={projectTranslations.str.skills}
      visual={
        <div className="flex items-end justify-center flex-1 md:h-full md:group-hover:scale-110 md:transition-transform md:duration-300">
          <img
            loading="lazy"
            className={clsx(
              "w-[12rem] md:w-[17rem] -translate-y-6 md:group-hover:scale-105 md:group-hover:translate-y-[-20%] md:transition-transform md:duration-300"
            )}
            src={strVisualTablet}
          />
        </div>
      }
    />
  );
};
