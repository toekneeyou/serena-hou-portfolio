import { pxToRem } from "@helpers/conversions";
import { ProjectCard } from "./components/project-card/ProjectCard";
import { projectTranslations } from "./constants";
import { renderProjectCardText } from "./helpers";
import igCaseStudyMobile from "@assets/mobile/ig-case-study.png";
import youtubeCaseStudyMobile from "@assets/mobile/youtube-case-study.png";
import yelpCaseStudyMobile from "@assets/mobile/yelp-case-study.png";
import strCaseStudyMobile from "@assets/mobile/str-case-study.png";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ROUTES } from "@constants/routes";

export const ProjectView = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (location.pathname === ROUTES.PROJECT && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <section ref={projectsRef} className="centered-col gap-9 px-8 w-full">
      <div className="max-w-mobile-container">
        <h2
          className={`text-40 text-center mb-2 font-mango font-black leading-none tracking-wider`}
        >
          PROJECTS
        </h2>
        <p className="text-16 text-center">
          Explore my featured projects, showcasing my passion for design and
          user experience.
        </p>
      </div>

      <ul className="centered-col gap-9 w-full max-w-mobile-container">
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
            header={projectTranslations.youtube.title.map(
              renderProjectCardText
            )}
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
    </section>
  );
};
