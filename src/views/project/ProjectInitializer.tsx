import { useLocation } from "react-router-dom";
import {
  projectGetShouldFetch,
  projectInitialFetch,
} from "../../store/projectSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { useEffect } from "react";
import { projectRoute } from "../../lib/services/routeService";

const ProjectInitializer = ({
  scrollProjectUp,
}: {
  scrollProjectUp: () => void;
}) => {
  const dispatch = useAppDispatch();
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
      scrollProjectUp();
    }
  }, [location, scrollProjectUp]);

  return null;
};

export default ProjectInitializer;
