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
      className={clsx("overflow-hidden", "lg:pr-0")}
      background={background}
      header={isMobile ? ig.mobile.title : ig.default.title}
      subheader={isMobile ? ig.mobile.description : ig.default.description}
      skills={ig.skills}
      visual={
        <div
          className={clsx("flex items-end justify-center flex-1", "md:h-full")}
        >
          <img
            loading="lazy"
            className={clsx(
              "-mr-8 w-140px",
              "md:w-auto md:h-240px md:group-hover:scale-110 md:transition-transform md:duration-300",
              "lg:h-400px"
            )}
            src={igCaseStudyTablet}
          />
        </div>
      }
    />
  );
};
