import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ROUTES } from "@constants/routes";
import { ProjectList } from "./components/project-list/ProjectList";
import { headerHeightMobile } from "@theme/height";
import { useViewportState } from "@contexts/viewport/hooks";
import clsx from "clsx";

export const ProjectView = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLElement>(null);
  const { isMobile } = useViewportState();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (location.pathname === ROUTES.PROJECT && projectsRef.current) {
        const top = projectsRef.current.getBoundingClientRect().top;
        const fromTop = isMobile ? headerHeightMobile : 0;
        const scrollToPosition = window.scrollY + top - fromTop;
        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth",
        });
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, isMobile]);

  return (
    <section ref={projectsRef} className={clsx("centered-col w-full")}>
      <div className="title-container">
        <h2 className={clsx("title")}>PROJECTS</h2>
        <p className="description">
          Explore my featured projects, showcasing my passion for design and
          user experience.
        </p>
      </div>

      <ProjectList />
    </section>
  );
};
