import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import igBgTablet from "@assets/tablet/ig-case-study-bg.jpg";
import igBgDesktop from "@assets/desktop/ig-case-study-bg-desktop.jpg";
import igCaseStudyTablet from "@assets/tablet/ig-case-study-visual.png";
import clsx from "clsx";

export const IgProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { ig } = projectTranslations;
  const background = isDesktop ? igBgDesktop : igBgTablet;

  return (
    <ProjectCard
      className="overflow-hidden lg:pr-0"
      background={background}
      header={isMobile ? ig.mobile.title : ig.default.title}
      subheader={isMobile ? ig.mobile.description : ig.default.description}
      skills={ig.skills}
      visual={
        <div className="flex items-end justify-center flex-1 md:h-full">
          <img
            loading="lazy"
            className={clsx(
              "-mr-8",
              "md:group-hover:scale-110 md:transition-transform md:duration-300",
              "w-[8.75rem] md:w-auto",
              "md:h-60 lg:h-[25rem]"
            )}
            src={igCaseStudyTablet}
          />
        </div>
      }
    />
  );
};
