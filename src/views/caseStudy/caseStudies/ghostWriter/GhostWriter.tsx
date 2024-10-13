import { useAppSelector } from "../../../../lib/hooks/reduxHooks";
import { getIsMobile, getIsTablet } from "../../../../store/viewportSlice";
import { classnames, getCloudUrl } from "../../../../lib/helpers";
import CaseStudyHeader from "../../CaseStudyHeader";
import { CaseStudySection } from "../../CaseStudySection";
import { PropsWithChildren, useRef } from "react";
import DownGreenArrow from "./DownGreenArrow";

export const GhostWriterCaseStudy = () => {
  const ref = useRef(null);
  const isMobile = useAppSelector(getIsMobile);
  const isTablet = useAppSelector(getIsTablet);
  const visualShadow = (() => {
    if (isMobile)
      return "drop-shadow(-16.1487px 15.035px 29.9px rgba(0, 0, 0, 0.2))";
    if (isTablet)
      return "drop-shadow(-20.1236px 18.7358px 6.93917px rgba(0, 0, 0, 0.6))";

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
        className={classnames("relative pb-4")}
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
          className={classnames("mx-auto relative z-[1] translate-y-10", {
            "w-[12rem]": isMobile,
            "max-w-[30vw]": isTablet,
          })}
          style={{
            filter: visualShadow,
          }}
          loading="eager"
          width={347}
          height={707}
        />
      </section>
      <section className="case-study-body">
        <GWCaseStudySection
          description=" A NEW CHAPTER FOR GHOST WRITER"
          header="Transforming Instagram Reels for Success in a YouTube Series"
        >
          <p>
            The social media team for <em>Ghost Writer</em> was struggling with
            the performance of their Instagram Reels. As the visual designer, I
            stepped in, identified the design problems, and collaborated with
            the team to create three new prototypes. These simple changes led to
            a <strong>525% increase in views 🚀</strong>, proving that small
            adjustments can make a significant impact.
          </p>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="What is Ghost Writer?"
          header="A Fun Comedy Series on YouTube"
        >
          <p>
            <em>Ghost Writer</em> is a comedy series on YouTube, with six
            seasons to date. Each episode averages about{" "}
            <strong>750,000 views</strong>, adding up to around{" "}
            <strong>45 million views</strong> across all seasons.
          </p>
          <img
            width={713}
            height={731}
            src={getCloudUrl("gw/poster.jpg")}
            alt="Ghost Writer Poster"
            loading="lazy"
          />
        </GWCaseStudySection>
        <GWCaseStudySection
          description="What is My Role?"
          header="Leading Visuals for the Ghost Writer Project"
        >
          <p>
            As the post-production lead for <em>Ghost Writer</em>, I&rsquo;m in
            charge of video quality and all things design for the series to help
            the team improve their visuals to engage our audience better.
          </p>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="The Problem"
          header="Reels That Just Didn’t Capture Viewer Attention"
        >
          <p>
            The social media team was unhappy with their Instagram Reels. Views
            were low, and they couldn't figure out why people weren&rsquo;t
            engaged. While the team knew the design needed work, they
            couldn&rsquo;t pinpoint the issues.
          </p>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="The Goal"
          header="Boosting Viewer Retention with Engaging Reels"
        >
          <p>
            Our main focus is viewer retention. We want to create visually
            appealing reels that keep people watching and coming back for more.
          </p>
        </GWCaseStudySection>
        <div>
          <p className="uppercase text-sm font-bold mb-2 text-ghost-writer-primary">
            Main Question
          </p>
          <em className="text-2xl font-bold ">
            How can we create visually engaging reels that capture and hold the
            audience's attention on Instagram?
          </em>
        </div>
        <GWCaseStudySection
          description="My Approach"
          header="Finding Solutions Step by Step"
        >
          <ol className="space-y-1 md:space-y-2">
            {[
              {
                icon: "🙋🏻",
                step: "Understand",
                title: "1. Listening to Feedback",
                description:
                  "I started by paying close attention to the social media team’s concerns. Their confusion about the reel’s design got me investigating.",
              },
              {
                icon: "🔬",
                step: "Analyze",
                title: "2. Spotting the Issues",
                description:
                  "We realized that the design inconsistencies between the feed and reels were confusing viewers and affecting engagement.",
              },
              {
                icon: "🔍",
                step: "Research",
                title: "3. Doing Research",
                description:
                  "We gathered user feedback and checked engagement metrics to see what resonated with our audience.",
              },
              {
                icon: "🎨",
                step: "Redesign",
                title: "4. Redesigning with Purpose",
                description:
                  "I crafted three redesigns, each aimed at fixing the feedback while keeping our visual identity.",
              },
              {
                icon: "🗣",
                step: "Test",
                title: "5. Getting User Insights",
                description:
                  "I also sought direct feedback from users to refine each design. Their insights were crucial in shaping the final solution.",
              },
            ].map((item, i) => {
              return (
                <li
                  key={item.step}
                  className="grid grid-cols-[6.75rem,1fr] gap-4 md:gap-9"
                >
                  <div className="centered-col gap-2">
                    <div className="rounded-full centered-col bg-ghost-writer-secondary py-4 md:py-5 self-start w-full">
                      <span className="block">{item.icon}</span>
                      <span className="block text-sm font-bold">
                        {item.step}
                      </span>
                    </div>
                    {i !== 4 && !isMobile && <DownGreenArrow />}
                  </div>
                  <div className="self-center md:self-start">
                    <p className="font-bold md:text-2xl">{item.title}</p>
                    {!isMobile && <p>{item.description}</p>}
                  </div>
                </li>
              );
            })}
          </ol>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Listening to Feedback"
          header="Understanding the Team's Needs"
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
                img: {
                  src: getCloudUrl("gw/design-flexibility.png"),
                  alt: "Text conversation about design flexiblity.",
                },
              },
              {
                title: "2. Primary Adjustments",
                description:
                  "My priority was to enhance the design based on team needs. The social media manager requested a more polished, cohesive look.",
                img: {
                  src: getCloudUrl("gw/primary-adjustments.png"),
                  alt: "Text conversation about making everything look nicer and better.",
                },
              },
              {
                title: "3. Sponsored Content Placement",
                description:
                  "The ad size had to remain unchanged, but I had flexibility to adjust its position, as long as it stayed at the top.",
                img: {
                  src: getCloudUrl("gw/sponsored-content-placement.png"),
                  alt: "Text conversation about sponsored content placement.",
                },
              },
              {
                title: "4. Necessity of the Logo",
                description:
                  "I assessed if the logo was helping or hurting engagement to decide if a cleaner design would be better.",
                img: {
                  src: getCloudUrl("gw/necessity-of-the-logo.png"),
                  alt: "Text conversation about the necessity of the logo on our reels.",
                },
              },
            ].map((item) => {
              return (
                <li key={item.title}>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="mb-6">{item.description}</p>
                  <img {...item.img} loading="lazy" className="mx-auto" />
                </li>
              );
            })}
          </ol>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Spotting the Issues"
          header="Logo Blockage and Frame Position Problems"
        >
          <p>
            As I looked over the initial reel designs, I spotted a few problems
            that were affecting engagement and overall impact. Here’s what stood
            out:
          </p>
          <ul className="space-y-6">
            <li className="space-y-6">
              <h3>Logo Blockage and Frame Position Issues</h3>
              <img src={getCloudUrl("gw/logo-blockage.png")} loading="lazy" />
            </li>
            <li className="space-y-6">
              <h3>Frame Size Issues</h3>
              <img
                src={getCloudUrl("gw/frame-size-issues.png")}
                loading="lazy"
              />
            </li>
          </ul>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Doing Research"
          header="Analyzing Competitors"
        >
          <p>
            I teamed up with the social media crew to dive into how Instagram's
            algorithm boosts visibility and engagement. We checked out reels
            from similar accounts and noticed they used full-screen visuals with
            minimal branding to keep viewers hooked. Our research showed that
            over-branding, like big logos, could actually hurt engagement, so we
            decided to go with a more subtle approach. From our competitors, we
            learned that using the full screen and keeping branding simple makes
            a big difference.
          </p>
          <ol className="space-y-3">
            {[
              {
                title: "1. Laugh Factory",
                description:
                  "They use full-screen visuals focused on the comedian, starting with catchy moments to grab attention and keeping branding minimal.",
                img: {
                  src: getCloudUrl("gw/laugh-factory-screenshot.png"),
                  alt: "Screenshot of Laugh Factory reel",
                },
              },
              {
                title: "2. Comedy Central Standup",
                description:
                  "They prioritize full-screen videos with clear visuals and use light text overlays to highlight punchlines without cluttering the screen.",
                img: {
                  src: getCloudUrl("gw/comedy-central-screenshot.png"),
                  alt: "Screenshot of Comedy Central reel",
                },
              },
              {
                title: "3. 404 by L.A. Times",
                description:
                  "They use dynamic transitions and clean visuals with minimal distractions, allowing the comedy to take center stage without heavy branding.",
                img: {
                  src: getCloudUrl("gw/404-screenshot.png"),
                  alt: "Screenshot of 404 reel.",
                },
              },
              {
                title: "4. Buzzfeed",
                description:
                  "Their reels are vibrant with quick cuts and smooth visuals, keeping branding subtle and avoiding large logos or distracting elements.",
                img: {
                  src: getCloudUrl("gw/buzzfeed-screenshot.png"),
                  description: "Screenshot of Buzzfeed reel",
                },
              },
            ].map((item, i) => {
              return (
                <li
                  key={item.title}
                  className={classnames(
                    "rounded-[2rem] p-6 border-[0.25rem]",
                    "md:flex md:items-center md:gap-6",
                    {
                      "bg-ghost-writer-secondary border-transparent":
                        i % 2 === 0,
                      "border-ghost-writer-secondary": i % 2 !== 0,
                    }
                  )}
                >
                  <div>
                    <h3 className="text-2xl mb-4">{item.title}</h3>
                    <p className="mb-6">{item.description}</p>
                  </div>
                  <img
                    className="h-[20rem] mx-auto"
                    {...item.img}
                    loading="lazy"
                  />
                </li>
              );
            })}
          </ol>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Important Consideration"
          header="Cropping and Safe Zones Matter"
        >
          <p>
            To make sure key visuals don’t get cut off or covered by things like
            captions and buttons, we kept everything important centered in a 4:5
            safe zone. It’s crucial to avoid placing key elements too close to
            the edges.
          </p>
          <img
            className="mx-auto"
            src={getCloudUrl("gw/safe-zone.png")}
            alt="Safe zones in an instagram reel"
          />
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Redesigning with Purpose"
          header="Turning Insights into Action"
        >
          <p>
            Here’s where things get exciting. I redesigned our Instagram Reels
            based on everything we learned. Now, check out the before-and-after
            transformation that not only boosted engagement but also grabbed the
            attention of our followers.
          </p>
          {[
            {
              src: getCloudUrl("gw/before.png"),
              alt: "Original Instagram reel layout",
            },
            {
              src: getCloudUrl("gw/v1.png"),
              alt: "V1 Instagram Reel Layout",
            },
            {
              src: getCloudUrl("gw/v2.png"),
              alt: "V2 Instagram Reel Layout",
            },
            {
              src: getCloudUrl("gw/v3.png"),
              alt: "V3 Instagram Reel Layout",
            },
          ].map((img) => (
            <img
              key={img.src}
              className="rounded-3xl drop-shadow-xl mx-auto"
              {...img}
            />
          ))}
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Getting User Insights"
          header="Gathering Team Input on Designs"
        >
          <p>
            To ensure our redesigned Reel appealed to a broad audience, we
            conducted an internal survey across departments. We asked colleagues
            to pick their favorite design and explain their choices. Here are
            some key responses that shaped our final design:
          </p>
          <ul className="space-y-6 py-6">
            {[
              {
                avatar: getCloudUrl("gw/rierson-avatar.png"),
                name: "Rierson",
                team: "Video Production Team",
                message:
                  "Comparing all options, I find Design 3 to be the most clear at a glance. It incorporates the main visual color scheme without affecting the content.",
              },
              {
                avatar: getCloudUrl("gw/doreen-avatar.png"),
                name: "Doreen",
                team: "Event Management Team",
                message:
                  "I think the full-screen layout of Design 3 looks more pleasing to the eye.",
              },
              {
                avatar: getCloudUrl("gw/oliver-avatar.png"),
                name: "Oliver",
                team: "Project Management Team",
                message: "I liked Design 3! The layout looks clean and simple.",
              },
            ].map((item) => (
              <li className="flex gap-3">
                <img className="self-start" loading="lazy" src={item.avatar} />
                <div>
                  <div className="flex items-center">
                    <span className="font-bold text-base">{item.name}</span>・
                    <span className="text-taupe text-xs">{item.team}</span>
                  </div>
                  <p>{item.message}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>
            Most people preferred Design 3, which confirmed that our adjustments
            were on the right track. Their feedback was essential in finalizing
            a design that looked great and functioned well, leading to a
            noticeable boost in our Reels' performance.
          </p>
          <h3>Final Design</h3>
          <p>Her's the final version of the redesign work.</p>
          <img
            loading="lazy"
            className="mx-auto drop-shadow-xl"
            src={getCloudUrl("gw/final.png")}
            alt="final Design"
          />
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Results of the Redesign"
          header="A 525% Increase in Reel Views!"
        >
          <p>
            Our new approach worked wonders! We saw an amazing 525% increase in
            reel views! Engagement on our posts skyrocketed, with more likes,
            comments, and shares than ever before. The full-screen visuals and
            minimal branding really hit the mark, making our content more
            appealing and keeping viewers hooked for longer. The feedback was
            fantastic, proving that these changes truly made a difference.
          </p>
        </GWCaseStudySection>
        <GWCaseStudySection
          description="Lessons From The Project"
          header="Balancing Looks and Function Is Key"
        >
          <p>
            Working on this Instagram Reels project taught me a lot. Here are
            the key takeaways:
          </p>
          <ul className="list-disc ml-4 md:ml-8 space-y-6">
            {[
              {
                title: "User-Centric Design",
                description:
                  "Feedback from different teams highlighted the importance of creating content that viewers love. A clean, simple design was the clear favorite.",
              },
              {
                title: "Team Collaboration",
                description:
                  "Involving colleagues from various departments gave us fresh perspectives and helped us craft a design that appeals to a wider audience.",
              },
              {
                title: "Iterative Process",
                description:
                  "Refining our designs based on research and feedback proved invaluable. This ongoing process significantly boosted the visual appeal and effectiveness of our Reels.",
              },
              {
                title: "Balancing Looks and Function",
                description:
                  " I learned how crucial it is to balance attractive visuals with functionality, ensuring the design supports the core message without distractions.",
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="inline-block text-lg">{item.title}</h3>:{" "}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
          <p>
            This project not only improved our Instagram Reels but also enhanced
            my skills in social media content optimization and user-centered
            design.
          </p>
        </GWCaseStudySection>
        <div className="rounded-[2rem] bg-white drop-shadow-xl p-9 md:p-[4rem]">
          <p className="text-sm md:text-xl md:text-center leading-[120%] italic">
            Big shoutout to the incredible STR Network team! Special thanks to
            our social media heroes and all our colleagues who made this project
            happen!
          </p>
        </div>
      </section>
    </article>
  );
};

interface GWCaseStudySectionProps extends PropsWithChildren {
  header: string;
  description: string;
}

const GWCaseStudySection = ({
  description,
  header,
  children,
}: GWCaseStudySectionProps) => {
  return (
    <CaseStudySection
      description={description}
      header={header}
      descriptionColor="text-ghost-writer-primary"
    >
      {children}
    </CaseStudySection>
  );
};
