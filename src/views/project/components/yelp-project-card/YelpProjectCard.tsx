import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import yelpBgTablet from "@assets/tablet/yelp-case-study-bg.jpg";
import yelpBgDesktop from "@assets/desktop/yelp-case-study-bg-desktop.jpg";
import yelpCaseStudyMobile from "@assets/mobile/yelp-case-study-visual.png";
import yelpPhone1 from "@assets/yelp-phone-1.png";
import yelpPhone2 from "@assets/yelp-phone-2.png";
import yelpPhone3 from "@assets/yelp-phone-3.png";
import clsx from "clsx";

export const YelpProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { yelp } = projectTranslations;
  const background = isDesktop ? yelpBgDesktop : yelpBgTablet;

  return (
    <ProjectCard
      background={background}
      header={isMobile ? yelp.mobile.title : yelp.default.title}
      subheader={isMobile ? yelp.mobile.description : yelp.default.description}
      skills={yelp.skills}
      visual={
        <div className="centered-row flex-1 h-full">
          {isMobile ? (
            <img
              loading="lazy"
              className="w-[18rem] max-w-full"
              src={yelpCaseStudyMobile}
            />
          ) : (
            <div
              className={clsx(
                "relative w-full aspect-square",
                "lg:w-[29rem] lg:-mr-12"
              )}
            >
              <img
                loading="lazy"
                className={clsx(
                  "absolute transition-transform duration-300 group-hover:translate-x-[-15%] group-hover:translate-y-[-15%]",
                  "md:top-[10%] md:left-[40%] md:w-[85%]",
                  "lg:top-[15%] lg:left-[30%] lg:w-[70%]"
                )}
                src={yelpPhone3}
              />
              <img
                loading="lazy"
                className={clsx(
                  "absolute top-[40%] left-0 transition-transform duration-300 group-hover:translate-x-[-10%] group-hover:translate-y-[-10%]",
                  "md:w-[85%]",
                  "lg:w-[70%]"
                )}
                src={yelpPhone1}
              />
              <img
                loading="lazy"
                className={clsx(
                  "absolute top-[15%] transition-transform duration-300 group-hover:translate-x-[35%] group-hover:translate-y-[35%]",
                  "md:left-[10%] md:w-[85%]",
                  "lg:left-0 lg:w-[70%]"
                )}
                src={yelpPhone2}
              />
            </div>
          )}
        </div>
      }
    />
  );
};
