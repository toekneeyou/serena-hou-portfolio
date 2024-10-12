import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  CASE_STUDY_ROUTE,
  GHOST_WRITER_ROUTE,
} from "../../lib/services/routeService";
import { useEffect } from "react";

export function CaseStudyView() {
  const location = useLocation();
  const navigate = useNavigate();
  /**
   * Redirect to Ghost Writer case study if case study is not in pathname
   */
  useEffect(() => {
    if (location.pathname.split(CASE_STUDY_ROUTE).length === 1) {
      navigate(GHOST_WRITER_ROUTE);
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
