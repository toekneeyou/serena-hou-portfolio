import { pxToRem } from "@helpers/conversions";
import igCaseStudyMobile from "@assets/mobile/ig-case-study.png";
import youtubeCaseStudyMobile from "@assets/mobile/youtube-case-study.png";
import yelpCaseStudyMobile from "@assets/mobile/yelp-case-study.png";
import strCaseStudyMobile from "@assets/mobile/str-case-study.png";
import strCaseStudyVisual from "@assets/tablet/str-case-study-visual.png";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import clsx from "clsx";
import { useViewportState } from "@contexts/viewport/hooks";
import yelpPhone1 from "@assets/yelp-phone-1.png";
import yelpPhone2 from "@assets/yelp-phone-2.png";
import yelpPhone3 from "@assets/yelp-phone-3.png";
import ytPhone1 from "@assets/yt-phone-1.png";
import ytPhone2 from "@assets/yt-phone-2.png";
import ytPhone3 from "@assets/yt-phone-3.png";
import igBgTablet from "@assets/tablet/ig-case-study-bg.png";
import yelpBgTablet from "@assets/tablet/yelp-case-study-bg.jpg";
import ytBgTablet from "@assets/tablet/yt-case-study-bg.jpg";
import { StrProjectCard } from "../str-project-card/StrProjectCard";
import { IgProjectCard } from "../ig-project-card/IgProjectCard";
import { YelpProjectCard } from "../yelp-project-card/YelpProjectCard";
import { YoutubeProjectCard } from "../youtube-project-card/YoutubeProjectCard";

const { ig, yelp, youtube } = projectTranslations;

export const ProjectList = () => {
  const { isMobile } = useViewportState();

  return (
    <ul
      className={clsx(
        "project-list",
        "mobile-container md:tablet-container",
        "centered-col gap-y-9"
      )}
    >
      <li>
        <StrProjectCard />
      </li>
      <li>
        <IgProjectCard />
      </li>
      <li>
        <YelpProjectCard />
      </li>
      <li>
        <YoutubeProjectCard />
      </li>
    </ul>
  );
};
