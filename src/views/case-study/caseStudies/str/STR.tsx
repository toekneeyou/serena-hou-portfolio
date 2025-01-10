import { Suspense } from "react";
import { classnames, getCloudUrl } from "../../../../lib/helpers/helpers";
import { useAppSelector } from "../../../../lib/hooks/reduxHooks";
import {
  getIsDesktop,
  getIsMobile,
  getIsTablet,
} from "../../../../store/viewportSlice";
import CaseStudyBody from "../../CaseStudyBody";
import CaseStudyHeader from "../../CaseStudyHeader";

import CaseStudyHero from "../../CaseStudyHero";
import STRContent from "./STRContent";

export const STRCaseStudy = () => {
  const isMobile = useAppSelector(getIsMobile);
  const isTablet = useAppSelector(getIsTablet);
  const isDesktop = useAppSelector(getIsDesktop);

  return (
    <article className="text-black">
      <CaseStudyHero>
        <CaseStudyHeader
          logo={{
            alt: "STR Logo",
            src: getCloudUrl("str/str-logo.png"),
            loading: "eager",
            width: 120,
            height: 17,
          }}
          header="Redesigning The Streaming Experience For 1M Users"
          description="Streaming Platform For Comedy Shows"
        />
      </CaseStudyHero>

      <CaseStudyBody nav={undefined} content={<STRContent />} />
    </article>
  );
};
