export const GhostWriterCaseStudy = () => {
  return <article className="text-white">hello</article>;
};

// import { useParams } from "react-router-dom";
// import { useAppSelector } from "../../lib/hooks/reduxHooks";
// import { getIsMobile } from "../../store/viewportSlice";
// import { CaseStudyLogo } from "./CaseStudyLogo";
// import { classnames } from "../../lib/helpers";
// import { CaseStudySection } from "./CaseStudySection";
// import CaseStudyList from "./CaseStudyList";

// export function CaseStudyView() {
//   const { id } = useParams();
//   const isMobile = useAppSelector(getIsMobile);

//   return (
//     <article className={classnames(`bg-case-study-gws text-black`)}>
//       <section className="pt-16 z-10 relative">
//         <CaseStudyLogo
//           mobileSrc="/src/assets/ghost-writer-mobile.png"
//           alt="ghost writer logo"
//           className="mx-auto mb-6"
//         />

//         <div className="text-center space-y-3 px-6 mb-6">
//           <h1 className="text-4xl">
//             <span className="text-xl block">Instagram Reels Redesign:</span>
//             How We Boosted Views by 525%
//           </h1>
//           <p className="text-xl">
//             Simple Layout Changes For A Big Impact On A Youtube Series
//           </p>
//         </div>
//         {isMobile && (
//           <div className="centered-row mb-6 px-6 -translate-x-[4%]">
//             <img
//               src="/src/assets/ghost-writer-mockup-mobile.png"
//               alt="ghost writer logo"
//             />
//           </div>
//         )}
//       </section>
//       <section className="bg-white rounded-[1.75rem] pt-[6.25rem] px-6 pb-9 -translate-y-[8rem] space-y-16">
//         <CaseStudySection
//           description=" A NEW CHAPTER FOR GHOST WRITER"
//           header="Transforming Instagram Reels for Success in a YouTube Series"
//           descriptionColor={"text-case-study-gwp"}
//         >
//           <p className="text-lg">
//             The social media team for the YouTube series Ghost Writer was
//             struggling with the performance of their Instagram Reels and
//             couldn’t pinpoint the visual issues. As the visual designer, I
//             stepped in, identified the design problems, and collaborated with
//             the team to create three new prototypes. These simple changes led to
//             a 525% increase in views, proving that small adjustments can make a
//             significant impact.
//           </p>
//         </CaseStudySection>
//         <CaseStudySection
//           description="What is Ghost Writer?"
//           header="A Fun Mandarin Comedy Series on YouTube"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p>
//             Ghost Writer is a unique Mandarin comedy series on YouTube that has
//             been entertaining audiences since 2020, with six seasons to date.
//             Celebrities perform live, sharing jokes made just for them. Each
//             episode averages about 750,000 views, adding up to around 45 million
//             views across all seasons and drawing fans to live recordings.
//           </p>
//         </CaseStudySection>
//         <CaseStudySection
//           description="What's My Role?"
//           header="Leading Visuals for the Ghost Writer Project"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p>
//             As the post-production lead for Ghost Writer, I’m in charge of video
//             quality and all things design for the series. I created the theme
//             visuals to give the show a unique look. However, when the social
//             media team tried to use these elements for their reels, the results
//             weren’t quite hitting the mark. So, I decided to dive in, figure out
//             what was going wrong, and help the team improve their visuals to
//             engage our audience better.
//           </p>
//         </CaseStudySection>
//         <CaseStudySection
//           description="The Problem"
//           header="Reels That Just Didn’t Capture Viewer Attention"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p>
//             The social media team for Ghost Writer was unhappy with their
//             Instagram Reels. Views were low, and they couldn't figure out why
//             people weren’t engaged. The goal was clear: we needed reels that
//             looked great and grabbed attention. Fixing this was vital for
//             boosting engagement and growing the show’s online audience. While
//             the team knew the design needed work, they couldn’t pinpoint the
//             issues. The challenge was to redesign the reel frame to enhance its
//             visual appeal and better connect with viewers.
//           </p>
//         </CaseStudySection>
//         <CaseStudySection
//           description="The Goal"
//           header="Boosting Viewer Retention with Engaging Reels"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p>
//             Our main focus is viewer retention. We want to create visually
//             appealing reels that keep people watching and coming back for more.
//             The goal is to improve the visual quality of our reels to attract
//             attention on Instagram, increase views, and build a loyal audience
//             for Ghost Writer.
//           </p>
//         </CaseStudySection>
//         <CaseStudySection
//           description="Main Question"
//           header="How can we create visually engaging reels that capture and hold the audience's attention on Instagram?"
//           descriptionColor="text-case-study-gwp"
//         />
//         <CaseStudySection
//           description="My Approach"
//           header="Finding Solutions Step by Step"
//           descriptionColor="text-case-study-gwp"
//         >
//           <CaseStudyList
//             as="ol"
//             list={[
//               {
//                 header: "Listening to Feedback",
//                 body: "I started by paying close attention to the social media team’s concerns. Their confusion about the reel’s design got me investigating.",
//               },
//               {
//                 header: "Spotting the Issues",
//                 body: "We realized that the design inconsistencies between the feed and reels were confusing viewers and affecting engagement.",
//               },
//               {
//                 header: "Doing Research",
//                 body: "We gathered user feedback and checked engagement metrics to see what resonated with our audience.",
//               },
//               {
//                 header: "Redesigning with Purpose",
//                 body: "I crafted three redesigns, each aimed at fixing the feedback while keeping our visual identity.",
//               },
//               {
//                 header: "Getting User Insights",
//                 body: "I also sought direct feedback from users to refine each design. Their insights were crucial in shaping the final solution.",
//               },
//             ]}
//           />
//         </CaseStudySection>
//         <CaseStudySection
//           description="Listening to Feedback"
//           header="Understanding the Team's Needs"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p className="mb-6">
//             Before diving into the design work, I asked the social media team
//             four key questions. This helped me grasp their concerns and set
//             clear goals for the new design.
//           </p>
//           <CaseStudyList
//             as="ol"
//             list={[
//               {
//                 header: "Design Flexibility",
//                 body: (
//                   <>
//                     <p className="text-lg">
//                       I needed to know how much creative freedom I had without
//                       straying from brand guidelines.
//                     </p>
//                   </>
//                 ),
//               },
//               {
//                 header: "Primary Adjustments",
//                 body: "We realized that the design inconsistencies between the feed and reels were confusing viewers and affecting engagement.",
//               },
//               {
//                 header: "Doing Research",
//                 body: "My focus was on identifying the most important changes to align with the team’s needs.",
//               },
//               {
//                 header: "Sponsored Content Placement",
//                 body: "I checked for any restrictions on placing sponsored content to avoid conflicts with agreements.",
//               },
//               {
//                 header: "Necessity of the Logo",
//                 body: "I assessed if the logo was helping or hurting engagement to decide if a cleaner design would be better.",
//               },
//             ]}
//           />
//         </CaseStudySection>
//         <CaseStudySection
//           description="Spotting The Issues"
//           header="Logo Blockage and Frame Position Problems"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p className="mb-6">
//             As I looked over the initial reel designs, I spotted a few problems
//             that were affecting engagement and overall impact. Here’s what stood
//             out:
//           </p>
//           <CaseStudyList
//             list={[
//               {
//                 header: "Logo Blockage and Frame Position Issues",
//                 body: <></>,
//               },
//               { header: "Frame Size Issues", body: <></> },
//             ]}
//           />
//         </CaseStudySection>
//         <CaseStudySection
//           description="Doing Research"
//           header="Analyzing Competitors"
//           descriptionColor="text-case-study-gwp"
//         >
//           <p className="mb-6">
//             I teamed up with the social media crew to dive into how Instagram's
//             algorithm boosts visibility and engagement. We checked out reels
//             from similar accounts and noticed they used full-screen visuals with
//             minimal branding to keep viewers hooked. Our research showed that
//             over-branding, like big logos, could actually hurt engagement, so we
//             decided to go with a more subtle approach. From our competitors, we
//             learned that using the full screen and keeping branding simple makes
//             a big difference.
//           </p>
//           <CaseStudyList
//             as="ol"
//             variant="card"
//             list={[
//               {
//                 header: "Logo Blockage and Frame Position Issues",
//                 body: <></>,
//               },
//               { header: "Frame Size Issues", body: <></> },
//             ]}
//           />
//         </CaseStudySection>
//       </section>
//     </article>
//   );
// }
