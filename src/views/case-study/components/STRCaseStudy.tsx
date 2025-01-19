import strLogo from "@assets/logos/str-logo.png";
import strVisualMobile from "@assets/mobile/str-case-study.png";
import strBgTablet from "@assets/tablet/str-case-study-bg.jpg";
import strBgDesktop from "@assets/desktop/str-case-study-bg.jpg";
import strVisualTablet from "@assets/tablet/str-case-study-visual.png";
import aComedyPlatformMobile from "@assets/mobile/str-a-comedy-streaming-platform.jpg";
import clsx from "clsx";

export const STRCaseStudy = () => {
  return (
    <main className="cs-layout bg-white items-stretch p-0 text-black">
      <section
        className={clsx("cs-hero pt-140px px-gutter-md h-[800px]")}
        style={{
          backgroundImage: `url(${strBgTablet})`,
          backgroundSize: "cover",
        }}
      >
        <div className="centered-col gap-y-12px w-full mb-120px">
          <img src={strLogo} role="presentation" className="h-16px" />
          <h1 className="text-24px font-bold text-center">
            Redesigning the Streaming Experience for 1M Users
          </h1>
          <p className="text-neutral-700 text-14px">
            Streaming Platform for Comedy Showscomoep
          </p>
        </div>
        <div className="centered-col">
          <img src={strVisualTablet} className="max-w-320px" />
        </div>
      </section>

      <section className="cs-body -mt-120px">
        <nav className="cs-nav"></nav>
        <div className="flex flex-col gap-y-60px">
          <ul className="cs-info">
            {[
              { label: "Timeline", value: "Aug 2024 - Present" },
              { label: "Role", value: "UX/UI Designer" },
              { label: "Platform", value: "Website" },
              { label: "Skill Used", value: "UX Research, UI Design" },
            ].map((item) => {
              return (
                <li key={item.label}>
                  <div>
                    <p className="text-8px text-neutral-500 mb-4px">
                      {item.label}
                    </p>
                    <p className="text-12px">{item.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <article className="cs-article">
            <div className="cs-article__section">
              <h3 className="str-article__section__subtitle text-center">
                Overview
              </h3>
              <div className="str-article__card">
                <h4 className="cs-article__card__title">The Problem</h4>
                <p>
                  Users feel lost and don&apos;t know what to click on STR
                  Network&apos;s site.
                </p>
                <p>
                  How can we make navigation simple and actions clear to fix
                  this?
                </p>
              </div>
              <div className="str-article__card">
                <h4 className="cs-article__card__title">The Outcome</h4>
                <p>Stakeholders loved the fresh design!</p>
                <p>
                  They found it much easier to buy, and the feedback was
                  fantastic.
                </p>
              </div>
            </div>

            <div className="cs-article__section">
              <div>
                <h3 className="str-article__section__subtitle">
                  It all started with a conversation
                </h3>
                <h2 className="cs-article__section__title">
                  Enhancing the Streaming Experience for Comedy Fans
                </h2>
              </div>
              <p>
                One afternoon, I was talking with a co-founder of STR Network. I
                brought up some problems I saw on their website. She leaned
                forward, excited, and said, “We need to fix this! Can you make a
                plan?” Her excitement was catching. I went back to my desk, full
                of ideas. That chat started this project. Here&apos;s how I
                improved STR Network&apos;s website for comedy fans.
              </p>
            </div>

            <div className="cs-article__section">
              <div>
                <h3 className="str-article__section__subtitle">
                  What is STR Network?
                </h3>
                <h2 className="cs-article__section__title">
                  A Comedy Streaming Platform
                </h2>
              </div>
              <p>
                STR Network, launched in 2022, has emerged as a leading comedy
                streaming platform in Asia. Users can purchase and enjoy a
                diverse collection of comedy specials through their website.
              </p>
              <img src={aComedyPlatformMobile} role="presentation" />
            </div>

            <div className="cs-article__section">
              <div>
                <h3 className="str-article__section__subtitle">
                  What is my role?
                </h3>
                <h2 className="cs-article__section__title">
                  Leading as a UX/UI Designer
                </h2>
              </div>
              <p>
                I led the redesign of the STR Network website as a product and
                UX/UI designer. My role was to identify key issues and create
                solutions to improve the user experience.
              </p>
            </div>

            <div className="cs-article__section">
              <div>
                <h3 className="str-article__section__subtitle">
                  Before I started
                </h3>
                <h2 className="cs-article__section__title">
                  Understanding the Clients
                </h2>
              </div>
              <ul>
                <li></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
