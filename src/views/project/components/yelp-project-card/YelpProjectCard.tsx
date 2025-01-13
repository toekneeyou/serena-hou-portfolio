import { useViewportState } from "@contexts/viewport/hooks";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import yelpBgTablet from "@assets/tablet/yelp-case-study-bg.jpg";
import yelpCaseStudyMobile from "@assets/mobile/yelp-case-study-visual.png";
import { pxToRem } from "@helpers/conversions";
import yelpPhone1 from "@assets/yelp-phone-1.png";
import yelpPhone2 from "@assets/yelp-phone-2.png";
import yelpPhone3 from "@assets/yelp-phone-3.png";

export const YelpProjectCard = () => {
  const { isDesktop, isMobile } = useViewportState();
  const { yelp } = projectTranslations;
  const background = isDesktop ? undefined : yelpBgTablet;

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
              className="max-w-full"
              src={yelpCaseStudyMobile}
              style={{ width: pxToRem(288) }}
            />
          ) : (
            <div className="relative w-full aspect-square">
              <img
                loading="lazy"
                className="absolute top-[15%] left-[30%] w-[75%] transition-transform duration-300 group-hover:translate-x-[-15%] group-hover:translate-y-[-15%]"
                src={yelpPhone3}
              />
              <img
                loading="lazy"
                className="absolute top-[40%] left-0 w-[75%] transition-transform duration-300 group-hover:translate-x-[-10%] group-hover:translate-y-[-10%]"
                src={yelpPhone1}
              />
              <img
                loading="lazy"
                className="absolute top-[15%] left-0 w-[75%] transition-transform duration-300 group-hover:translate-x-[35%] group-hover:translate-y-[35%]"
                src={yelpPhone2}
              />
            </div>
          )}
        </div>
      }
    />
  );
};
