import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ROUTES } from "@constants/routes";
import { ProjectList } from "./components/project-list/ProjectList";

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
      <div className="mobile-container">
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

      <ProjectList />
    </section>
  );
};
