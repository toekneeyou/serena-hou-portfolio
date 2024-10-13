import { useAppSelector } from "../../../../lib/hooks/reduxHooks";
import { getIsMobile, getIsTablet } from "../../../../store/viewportSlice";
import { classnames, getCloudUrl } from "../../../../lib/helpers";
import CaseStudyHeader from "../../CaseStudyHeader";
import { CaseStudySection } from "../../CaseStudySection";
import { useRef } from "react";

export const GhostWriterCaseStudy = () => {
  const ref = useRef(null);
  const isMobile = useAppSelector(getIsMobile);
  const isTablet = useAppSelector(getIsTablet);
  const visualShadow = (() => {
    if (isMobile)
      return "drop-shadow(-16.1487px 15.035px 29.9px rgba(0, 0, 0, 0.2))";
    return undefined;
  })();
  const backgroundImage = isMobile
    ? getCloudUrl("gw/bg-mobile.jpg")
    : isTablet
    ? getCloudUrl("gw/bg-tablet.jpg")
    : getCloudUrl("gw/bg-desktop.jpg");

  return (
    <article ref={ref} className="case-study bg-white text-black">
      <section
        className={classnames("relative")}
        style={{
          background: `url(${backgroundImage}) center / cover no-repeat`,
        }}
      >
        <CaseStudyHeader
          logo={{
            alt: "Ghost Writer Logo",
            src: getCloudUrl("gw/ghost-writer-logo.png"),
          }}
          header={
            <>
              <span className="text-xl block">Instagram Reels Redesign:</span>
              How We Boosted Views by 525%
            </>
          }
          description="Simple Layout Changes For A Big Impact On A Youtube Series"
        />
        <img
          src={getCloudUrl("gw/iphone-mockup.png")}
          alt="Mobile Redesign of Ghost Writer"
          className={classnames("mx-auto", { "w-[12rem]": isMobile })}
          style={{
            filter: visualShadow,
          }}
        />
      </section>
      <section className="case-study-body -translate-y-[4rem]">
        <CaseStudySection
          description=" A NEW CHAPTER FOR GHOST WRITER"
          header="Transforming Instagram Reels for Success in a YouTube Series"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            The social media team for <em>Ghost Writer</em> was struggling with
            the performance of their Instagram Reels. As the visual designer, I
            stepped in, identified the design problems, and collaborated with
            the team to create three new prototypes. These simple changes led to
            a <strong>525% increase in views 🚀</strong>, proving that small
            adjustments can make a significant impact.
          </p>
        </CaseStudySection>
        <CaseStudySection
          description="What is Ghost Writer?"
          header="A Fun Comedy Series on YouTube"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            Ghost Writer is a comedy series on YouTube, with six seasons to
            date. Each episode averages about 750,000 views, adding up to around
            45 million views across all seasons and drawing fans to live
            recordings.
          </p>
          <img src={getCloudUrl("gw/poster.jpg")} alt="Ghost Writer Poster" />
        </CaseStudySection>
        <CaseStudySection
          description="What is My Role?"
          header="Leading Visuals for the Ghost Writer Project"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            As the post-production lead for Ghost Writer, I’m in charge of video
            quality and all things design for the series to help the team
            improve their visuals to engage our audience better.
          </p>
        </CaseStudySection>
        <CaseStudySection
          description="The Problem"
          header="Reels That Just Didn’t Capture Viewer Attention"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            The social media team for Ghost Writer was unhappy with their
            Instagram Reels. Views were low, and they couldn't figure out why
            people weren’t engaged. While the team knew the design needed work,
            they couldn’t pinpoint the issues.
          </p>
        </CaseStudySection>
        <CaseStudySection
          description="The Goal"
          header="Boosting Viewer Retention with Engaging Reels"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            Our main focus is viewer retention. We want to create visually
            appealing reels that keep people watching and coming back for more.
          </p>
        </CaseStudySection>
        <div>
          <p className="uppercase text-sm font-bold mb-2 text-ghost-writer-primary">
            Main Question
          </p>
          <em className="text-2xl font-bold ">
            How can we create visually engaging reels that capture and hold the
            audience's attention on Instagram?
          </em>
        </div>
        <CaseStudySection
          description="My Approach"
          header="Finding Solutions Step by Step"
          descriptionColor="text-ghost-writer-primary"
        >
          <ol className="space-y-1">
            {[
              {
                icon: "🙋🏻",
                step: "Understand",
                description: "1. Listening to Feedback",
              },
              {
                icon: "🔬",
                step: "Analyze",
                description: "2. Spotting the Issues",
              },
              {
                icon: "🔍",
                step: "Research",
                description: "3. Doing Research",
              },
              {
                icon: "🎨",
                step: "Redesign",
                description: "4. Redesigning with Purpose",
              },
              { icon: "🗣", step: "Test", description: "Getting User Insights" },
            ].map((item) => {
              return (
                <li className="grid grid-cols-[6.75rem,1fr] gap-4">
                  <div className="rounded-full centered-col bg-ghost-writer-secondary py-4">
                    <span className="block">{item.icon}</span>
                    <span className="block text-sm font-bold">{item.step}</span>
                  </div>
                  <p className="self-center font-bold">{item.description}</p>
                </li>
              );
            })}
          </ol>
        </CaseStudySection>
        <CaseStudySection
          description="Listening to Feedback"
          header="Understanding the Team's Needs"
          descriptionColor="text-ghost-writer-primary"
        >
          <p>
            Before diving into the design work, I asked the social media team
            four key questions. This helped me grasp their concerns and set
            clear goals for the new design.
          </p>
          <ol className="space-y-6">
            {[
              {
                title: "1. Design Flexiblity",
                description:
                  "I ensured my design stayed within brand guidelines, as directed by the social media manager: keep the current theme, ad section, and limit changes to reels.",
                imgSrc: getCloudUrl("gw/design-flexibility.png"),
                imgAlt: "Text conversation about design flexiblity.",
              },
              {
                title: "2. Primary Adjustments",
                description:
                  "My priority was to enhance the design based on team needs. The social media manager requested a more polished, cohesive look.",
                imgSrc: getCloudUrl("gw/primary-adjustments.png"),
                imgAlt:
                  "Text conversation about making everything look nicer and better.",
              },
              {
                title: "3. Sponsored Content Placement",
                description:
                  "The ad size had to remain unchanged, but I had flexibility to adjust its position, as long as it stayed at the top.",
                imgSrc: getCloudUrl("gw/sponsored-content-placement.png"),
                imgAlt: "Text conversation about sponsored content placement.",
              },
              {
                title: "4. Necessity of the Logo",
                description:
                  "I assessed if the logo was helping or hurting engagement to decide if a cleaner design would be better.",
                imgSrc: getCloudUrl("gw/necessity-of-the-logo.png"),
                imgAlt:
                  "Text conversation about the necessity of the logo on our reels.",
              },
            ].map((item) => {
              return (
                <li key={item.title}>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="mb-6">{item.description}</p>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </li>
              );
            })}
          </ol>
        </CaseStudySection>
      </section>
    </article>
  );
};
