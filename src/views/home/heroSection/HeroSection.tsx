import { classnames } from "@helpers/helpers";
import SerenaFilm from "./SerenaFilm";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen overflow-hidden grid grid-cols-[50%_50%]"
    >
      {/* Hero Text */}
      <div
        className={classnames(
          "hero-text h-full flex items-center col-start-1 col-end-3 row-start-1 row-end-2 z-hero-text",
          "pl-11 pr-11 sm:pl-16 sm:pr-16 md:pl-24 md:pr-24 lg:pl-44 lg:pr-0 pt-[50%] sm:pt-[25%] md:pt-0"
        )}
      >
        <div>
          <p
            className={classnames(
              "leading-none",
              "text-2xl sm:text-[2.5rem] md:text-[3.25rem] lg:text-[4rem]",
              "pb-4 sm:pb-5 md:pb-6 lg:pb-9"
            )}
          >
            UI Designer
          </p>
          <h1
            data-text="SERENA HOU"
            className={classnames(
              "text-[2.5rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[5rem]",
              "inline-block relative text-nowrap leading-none",
              "pb-3 sm:pb-6 md:pb-9 lg:pb-12"
            )}
          >
            SERENA HOU
          </h1>
          <p className="text-sm sm:text-base md:text-2xl lg:text-[1.75rem]">
            With 10+ Years of Expertise in Video Production
            <br />
            Specializing in Visual Storytelling and Motion Graphics
          </p>
        </div>
      </div>
      {/* Hero Visual */}
      <div className="hero-visual flex items-start col-start-1 sm:col-start-2 col-end-3 row-start-1 row-end-2 z-hero-visual">
        <div className="hero-marquee pointer-events-none flex translate-y-[-100%] -translate-x-20 rotate-45 origin-[0%_100%]">
          <SerenaFilm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
