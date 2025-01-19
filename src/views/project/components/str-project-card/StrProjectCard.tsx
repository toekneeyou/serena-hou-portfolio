import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import strBgTablet from "@assets/tablet/str-case-study-bg.jpg";
import strBgDesktop from "@assets/desktop/str-case-study-bg.jpg";
import strVisualTablet from "@assets/tablet/str-case-study-visual.png";
import clsx from "clsx";
import { ROUTES } from "@constants/routes";

export const StrProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { str } = projectTranslations;
  const background = isDesktop ? strBgDesktop : strBgTablet;

  return (
    <ProjectCard
      url={`${ROUTES.CASE_STUDY}${ROUTES.STR}`}
      className={clsx("group", "lg:pr-0")}
      header={isMobile ? str.mobile.title : str.default.title}
      subheader={isMobile ? str.mobile.description : str.default.description}
      background={background}
      skills={projectTranslations.str.skills}
      visual={
        <div
          className={clsx(
            "flex items-end justify-center flex-1",
            "md:h-full md:group-hover:scale-110 md:transition-transform md:duration-300"
          )}
        >
          <img
            loading="lazy"
            className={clsx(
              "w-192px -translate-y-6",
              "md:w-272px md:group-hover:scale-105 md:group-hover:translate-y-[-20%] md:transition-transform md:duration-300",
              "lg:-translate-y-10 lg:w-full lg:max-w-464px"
            )}
            src={strVisualTablet}
          />
        </div>
      }
    />
  );
};
