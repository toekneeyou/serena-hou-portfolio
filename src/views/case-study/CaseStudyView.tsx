import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { ROUTES } from "@constants/routes";

export function CaseStudyView() {
  const location = useLocation();
  const navigate = useNavigate();
  /**
   * Redirect to Ghost Writer case study if case study is not in pathname
   */
  useEffect(() => {
    if (location.pathname.split("/").length === 2) {
      navigate(`${ROUTES.CASE_STUDY}${ROUTES.STR}`);
    }
  }, [location.pathname, navigate]);

  return <Outlet />;
}
