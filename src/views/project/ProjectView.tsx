import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { projectRoute } from "../../lib/services/routeService";
import ProjectList from "./ProjectCards";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import {
  projectGetShouldFetch,
  projectInitialFetch,
} from "../../store/projectSlice";

const ProjectView = () => {
  const dispatch = useAppDispatch();
  const projectContainerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const shouldFetch = useAppSelector(projectGetShouldFetch);
  /**
   * Initial fetch
   */
  useEffect(() => {
    if (shouldFetch) {
      dispatch(projectInitialFetch());
    }
  }, [dispatch, shouldFetch]);
  /**
   * Scroll project view into view if pathname === '/project'
   */
  useEffect(() => {
    if (location.pathname + location.hash === `${projectRoute.path}`) {
      const projectContainer = projectContainerRef.current!;
      projectContainer.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="project" className="py-[7.5rem]" ref={projectContainerRef}>
      <ProjectHeader />
      <ProjectList />
    </section>
  );
};

const ProjectHeader = () => {
  return (
    <div className="project-header centered-col gap-y-3">
      <h1 className="text-center">PROJECTS</h1>
      <p className="max-w-[54ch] text-center">
        Here are some projects that highlight my passion for visual design and
        creating great web experiences products and brands.
      </p>
    </div>
  );
};

export default ProjectView;
