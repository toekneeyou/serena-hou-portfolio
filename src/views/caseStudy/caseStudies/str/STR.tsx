import CaseStudyHeader from "../../CaseStudyHeader";
import { CaseStudySection } from "../../CaseStudySection";
import strLogo from "./assets/str-logo.png";

export const STRCaseStudy = () => {
  return (
    <article className="text-black">
      <section>
        <CaseStudyHeader
          logo={{ src: strLogo, alt: "STR Logo" }}
          header="Redesigning The Streaming Experience For 1M Users"
          description="Streaming Platform For Comedy Shows"
        />
      </section>
      <section className="case-study-body">
        <CaseStudySection
          header="Enhancing the Streaming Experience for Comedy Fans"
          description="It all started with a conversation"
          descriptionColor="text-str-primary"
        >
          <p className="">
            One afternoon, I was hanging out with one of the co-founders of STR
            Network. I mentioned some issues I’d noticed on their website. She
            leaned in, eyes wide with excitement, and said, “We need to fix
            this! Can you come up with a plan?” Her enthusiasm was contagious. I
            went back to my desk, brimming with ideas. That conversation sparked
            this project. Here’s how I redesigned STR Network’s website to make
            it better for comedy fans.
          </p>
        </CaseStudySection>
      </section>
    </article>
  );
};
