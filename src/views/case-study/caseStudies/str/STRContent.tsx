import { PropsWithChildren } from "react";
import { CaseStudySection } from "../../CaseStudySection";
import { classnames, getCloudUrl } from "../../../../lib/helpers/helpers";
import CaseStudyUL from "../../CaseStudyUL";
import { useAppSelector } from "../../../../lib/hooks/reduxHooks";
import { getIsMobile } from "../../../../store/viewportSlice";

const VERTICAL_SPACING = "space-y-[3.75rem] md:space-y-[5rem]";

export default function STRContent() {
  const isMobile = useAppSelector(getIsMobile);

  return (
    <div
      className={classnames(
        "mx-auto",
        VERTICAL_SPACING,
        "lg:max-w-[40rem] 2xl:max-w-[45rem]"
      )}
    >
      <div className={VERTICAL_SPACING}>
        <STRCaseStudySection
          description="It All Started With A Conversation"
          header="Enhancing the Streaming Experience for Comedy Fans"
        >
          <p>
            One afternoon, I was hanging out with one of the co-founders of STR
            Network. I mentioned some issues I’d noticed on their website. She
            leaned in, eyes wide with excitement, and said, “We need to fix
            this! Can you come up with a plan?” Her enthusiasm was contagious. I
            went back to my desk, brimming with ideas. That conversation sparked
            this project. Here’s how I redesigned STR Network’s website to make
            it better for comedy fans.
          </p>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="What is STR Network?"
          header="A Comedy Streaming Platform for Asia"
        >
          <p>
            Since launching in 2022, STR Network has aimed to be the go-to
            online platform for comedy in Asia. It offers a wide variety of
            comedy specials for purchase, making it a favorite spot for comedy
            lovers across the continent.
          </p>
          <p>
            In this case study, I’ll focus on a key part of the redesign:
            improving the calls-to-action (CTAs). While there were a few issues
            with the website, the unclear CTAs were really getting in the way of
            a smooth user experience and the buying process. I’ll share how I
            redesigned these CTAs to make them clearer, more engaging, and
            effective.
          </p>
          <img
            src={getCloudUrl("str/str-poster.jpg")}
            loading="lazy"
            width={696}
            height={752}
            alt="Screenshot of STR's streaming platform."
            className="mx-auto"
          />
        </STRCaseStudySection>
        <STRCaseStudySection
          description="What is my Role?"
          header="Leading as a UX/UI Designer for STR Network"
        >
          <p>
            After identifying website issues during a chat with a co-founder, I
            took charge of redesigning STR Network website. As a product and
            UX/UI designer, I recreated the site to enhance user experience.
          </p>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="Before I Started"
          header="What the Stakeholders Want"
        >
          <p>
            Before jumping into the project, I spoke with the stakeholders to
            grasp their vision for the STR Network redesign.
          </p>
          <CaseStudyUL
            options={[
              {
                title: "They Love Netflix",
                description: `They expressed a strong admiration for Netflix's design and wanted STR Network to capture a similar feel.`,
              },
              {
                title: "Simplicity is Key",
                description: `They emphasized the need for a simple and clear design that allows users to navigate easily and make purchases without any hassle.`,
              },
              {
                title: "Boost Video Purchases",
                description:
                  "Their main goal was to increase video sales, so they needed clear calls-to-action (CTAs) and a straightforward buying process.",
              },
            ]}
          />
          <p>
            These discussions helped me align my design with their expectations,
            ensuring we created an attractive, functional, and user-friendly
            platform.
          </p>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="The Problem"
          header="Confusing Navigation and CTAs Are Hurting User Experience and Sales"
        >
          <p>
            Users are struggling to find their way and make purchases because
            the design is confusing and the calls-to-action aren’t clear. This
            causes frustration, leads to abandoned purchases, and results in
            lost revenue. By making navigation simpler and highlighting key
            actions like the "Buy" button, we can improve user satisfaction and
            increase sales.
          </p>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="The Goal"
          header="Boosting Conversations with Clear CTAs"
        >
          <p>
            The goal is to increase monetization by improving the visibility of
            key CTAs, like the "Buy" button. Users want a seamless, hassle-free
            experience where they can quickly and confidently make purchases. By
            enhancing the prominence of CTAs and reducing friction in the user
            journey, we aim to create an intuitive experience that not only
            boosts user satisfaction but also drives higher conversions and
            retention, ultimately supporting revenue growth.
          </p>
        </STRCaseStudySection>
        <div className="bg-str-secondary px-6 py-14">
          <STRCaseStudySection
            description="Key Question"
            header="How can we simplify navigation and clarify calls-to-action to enhance user experience and drive more conversions?"
          />
        </div>
        <STRCaseStudySection
          description="Understanding the Challenge"
          header="User Insights from Usability Interviews"
        >
          <p>
            To identify key pain points, I conducted interviews with five users
            as they navigated the website. My goal was to remain unbiased and
            focused on their experiences. Here are three critical questions I
            asked, along with user feedback:
          </p>
          <ul className="space-y-6">
            {[
              {
                title:
                  "Can you show me how you would buy a comedy special on this website?",
                img: {
                  src: getCloudUrl(isMobile ? "str/how-to-buy-mobile.png" : ""),
                  alt: "Users are unable to find the buy button.",
                },
              },
              {
                title:
                  "What do you think about the information layout on the purchase page?",
                img: {
                  src: getCloudUrl(
                    isMobile ? "str/information-layout-mobile.png" : ""
                  ),
                  alt: "Too much information. Layout is overwhelming.",
                },
              },
              {
                title:
                  "How do you feel about the colors and overall design of the website?",
                img: {
                  src: getCloudUrl(
                    isMobile ? "str/overall-colors-mobile.png" : ""
                  ),
                  alt: "The design feels inconsistent.",
                },
              },
            ].map((item) => (
              <li key={item.title} className="space-y-6">
                <p className="font-bold">{item.title}</p>
                <img {...item.img} loading="lazy" className="mx-auto" />
              </li>
            ))}
          </ul>
          <p>
            From these sessions, it was clear that users struggled to locate the
            "Buy" button and found the information disorganized and
            overwhelming. They appreciated the variety of content but were
            frustrated by poor navigation, inconsistent colors, and unclear
            calls-to-action.
          </p>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="Competitive Insights"
          header="Learning from Industry Leaders"
        >
          <p>
            In addition to user interviews, I conducted a competitive analysis
            of top streaming platforms to understand their approach to CTAs
            (Calls-to-Action). This helped me identify best practices to adapt
            for the STR Network redesign. By blending user feedback with these
            insights, I aimed to create a more intuitive and user-friendly
            experience.
          </p>
          <ul className="space-y-6">
            {[
              {
                title: "Amazon Prime Video",
                description: `Amazon Prime Video showcases a streamlined purchasing process. On movie or TV show pages, the "Buy" button is prominently positioned next to the video player, highlighted in a distinct color, making it easy to find and encouraging immediate action.`,
                img: { src: getCloudUrl("str/amazon-prime-mobile.png") },
              },
              {
                title: "Netflix",
                description:
                  'Netflix excels in guiding user engagement through consistent and clear CTAs. The "Play" and "Add to My List" buttons are always in the same location, making interactions simple and navigation effortless.',
                img: { src: getCloudUrl("str/netflix-mobile.png") },
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mb-6">{item.description}</p>
                <img {...item.img} loading="lazy" className="mx-auto" />
              </li>
            ))}
          </ul>
        </STRCaseStudySection>
        <STRCaseStudySection
          description="Issues & Solutions"
          header="Areas for Improvement & How I Fixed Them"
        >
          <ul className="space-y-9">
            {[
              {
                title: "Issue: Design System Challenges",
                solutions: [
                  {
                    title: "1. Poor Accessibility",
                    description:
                      "The CTA buttons on the home page failed to meet the Color Contrast AA Rule, making the text difficult to read. This poses a barrier for users, especially those with visual impairments.",
                    img: {},
                  },
                  {
                    title: "2. Inconsistent Branding",
                    description:
                      "While the home page maintained color consistency, subpages displayed a chaotic mix of colors and styles, leading to confusion and a fragmented visual experience across the site.",
                    img: {},
                  },
                ],
              },
              {
                title: "Solution: Created Consistent Design Elements",
                solutions: [
                  {
                    title: "1. Redefined Color Palette",
                    description: `I selected a cohesive color palette of black, blue, and white that aligns with STR Network's brand identity. By following UI principles of contrast and consistency, this approach ensures readability and a modern, clean appearance that enhances user focus on essential elements like the "Buy" button.`,
                    img: {},
                  },
                  {
                    title: "2. Standardized Button Design",
                    description:
                      "Buttons play a crucial role in user interaction, especially for a content-selling platform. I designed buttons in various states (default, hover, pressed, disabled) to ensure a consistent and intuitive user experience. The primary blue buttons stand out against the black background, making them easy to locate and click.",
                    img: {},
                  },
                ],
              },
            ].map((item, i) => (
              <li
                key={item.title}
                className={classnames({
                  "bg-str-secondary": i % 4 === 2 || i % 4 === 3,
                })}
              >
                <h3 className="text-3xl font-normal mb-6">{item.title}</h3>
                <ol>
                  {item.solutions.map((solution) => (
                    <li key={solution.title}>
                      <h4 className="text-2xl font-bold mb-3">
                        {solution.title}
                      </h4>
                      <p className="mb-6">{solution.description}</p>
                      <img {...solution.img} loading="lazy" />
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </STRCaseStudySection>
      </div>
    </div>
  );
}

interface STRCaseStudySectionProps extends PropsWithChildren {
  header: string;
  description: string;
  id?: string;
}

const STRCaseStudySection = ({
  description,
  header,
  children,
  id,
}: STRCaseStudySectionProps) => {
  return (
    <CaseStudySection
      description={description}
      header={header}
      descriptionColor="text-str-primary"
      id={id}
    >
      {children}
    </CaseStudySection>
  );
};
