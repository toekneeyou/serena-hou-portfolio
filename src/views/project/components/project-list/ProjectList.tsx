import { pxToRem } from "@helpers/conversions";
import igCaseStudyMobile from "@assets/mobile/ig-case-study.png";
import youtubeCaseStudyMobile from "@assets/mobile/youtube-case-study.png";
import yelpCaseStudyMobile from "@assets/mobile/yelp-case-study.png";
import strCaseStudyMobile from "@assets/mobile/str-case-study.png";
import { ProjectCard } from "../project-card/ProjectCard";
import { projectTranslations } from "@views/project/constants";
import { renderProjectCardText } from "@views/project/helpers";
import clsx from "clsx";

export const ProjectList = () => {
  return (
    <ul
      className={clsx(
        "project-list",
        "centered-col gap-9 w-full mobile-container"
      )}
    >
      <li>
        <ProjectCard
          className="bg-cover bg-no-repeat bg-top h-72"
          header={projectTranslations.str.title.map(renderProjectCardText)}
          subheader={projectTranslations.str.description.map(
            renderProjectCardText
          )}
          style={{
            backgroundImage: `url(${strCaseStudyMobile})`,
          }}
        />
      </li>
      <li>
        <ProjectCard
          className="flex flex-col"
          header={projectTranslations.instagram.title.map(
            renderProjectCardText
          )}
          subheader={projectTranslations.instagram.description.map(
            renderProjectCardText
          )}
        >
          <div className="flex items-end justify-center flex-1">
            <img
              className="mr-4"
              src={igCaseStudyMobile}
              style={{ width: pxToRem(140) }}
            />
          </div>
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          className="flex flex-col"
          header={projectTranslations.yelp.title.map(renderProjectCardText)}
          subheader={projectTranslations.yelp.description.map(
            renderProjectCardText
          )}
        >
          <div className="centered-row flex-1">
            <img
              className="max-w-full"
              src={yelpCaseStudyMobile}
              style={{ width: pxToRem(288) }}
            />
          </div>
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          header={projectTranslations.youtube.title.map(renderProjectCardText)}
          subheader={projectTranslations.youtube.description.map(
            renderProjectCardText
          )}
        >
          <div className="centered-row flex-1 flex">
            <img
              src={youtubeCaseStudyMobile}
              style={{ height: pxToRem(188) }}
            />
          </div>
        </ProjectCard>
      </li>
    </ul>
  );
};
