import { useAppSelector } from "../../../../lib/hooks/reduxHooks";
import {
  getIsDesktop,
  getIsMobile,
  getIsTablet,
} from "../../../../store/viewportSlice";
import { classnames, getCloudUrl } from "../../../../lib/helpers";
import CaseStudyHeader from "../../CaseStudyHeader";
import { lazy, Suspense, useRef } from "react";
import CaseStudyBody from "../../CaseStudyBody";
import GhostWriterContent from "../GhostWriterContent";

const GhostWriterSideNav = lazy(() => import("./GhostWriterSideNav"));

export const GhostWriterCaseStudy = () => {
  const ref = useRef(null);
  const isMobile = useAppSelector(getIsMobile);
  const isTablet = useAppSelector(getIsTablet);
  const isDesktop = useAppSelector(getIsDesktop);

  const visualShadow = (() => {
    if (isMobile)
      return "drop-shadow(-16.1487px 15.035px 29.9px rgba(0, 0, 0, 0.2))";
    return "drop-shadow(-20.1236px 18.7358px 6.93917px rgba(0, 0, 0, 0.6))";
  })();
  const backgroundImage = isMobile
    ? getCloudUrl("gw/bg-mobile.jpg")
    : isTablet
    ? getCloudUrl("gw/bg-tablet.jpg")
    : getCloudUrl("gw/bg-desktop.jpg");

  return (
    <article ref={ref} className="case-study bg-white text-black">
      <section
        className={classnames(
          "relative",
          "pt-[4rem] md:pt-[6rem] lg:pt-[25vh]",
          "lg:px-[2.5rem] xl:px-[5rem] 2xl:px-[7.5rem]",
          "lg:flex lg:h-screen lg:overflow-hidden"
        )}
        style={{
          background: `url(${backgroundImage}) center / cover no-repeat`,
        }}
      >
        <CaseStudyHeader
          logo={{
            alt: "Ghost Writer Logo",
            src: getCloudUrl("gw/ghost-writer-logo.png"),
            loading: "eager",
            width: 150,
            height: 55,
          }}
          header={
            <>
              {isMobile && (
                <span className="text-xl block">Instagram Reels Redesign:</span>
              )}
              {!isMobile && "Instagram Reels Redesign:"}
              {!isMobile && <br />}
              How We Boosted Views By 525%
            </>
          }
          description="Simple Layout Changes For A Big Impact On A Youtube Series"
        />
        <img
          src={getCloudUrl("gw/iphone-mockup.png")}
          alt="Mobile Redesign of Ghost Writer"
          className={classnames(
            "mx-auto lg:mx-6",
            "relative translate-y-10 lg:translate-y-0",
            "z-[1] md:z-0",
            "w-[12rem] md:w-auto md:max-w-[30vw] lg:max-w-[25vw] lg:h-auto lg:object-contain xl:w-[22rem]"
          )}
          style={{
            filter: visualShadow,
          }}
          loading="eager"
          width={347}
          height={707}
        />
      </section>

      <CaseStudyBody
        nav={
          isDesktop && (
            <Suspense>
              <GhostWriterSideNav />
            </Suspense>
          )
        }
        content={<GhostWriterContent />}
      />
    </article>
  );
};
