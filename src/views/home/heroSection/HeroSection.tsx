import { classnames } from "@helpers/helpers";
import SerenaFilm from "./SerenaFilm";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen overflow-hidden grid grid-cols-[50%_50%]"
    >
      {/* Hero Text */}
      <div className="hero-text h-full flex items-center pl-[11rem] col-start-1 col-end-3 row-start-1 row-end-2">
        <div>
          <p className="text-[4rem] leading-none pb-9">UI Designer</p>
          <h1
            data-text="SERENA HOU"
            className={classnames(
              `inline-block relative text-nowrap leading-none pb-[3.25rem]`
            )}
          >
            SERENA HOU
          </h1>
          <p className="text-[1.75rem]">
            With 10+ Years of Expertise in Video Production
            <br />
            Specializing in Visual Storytelling and Motion Graphics
          </p>
        </div>
      </div>
      {/* Hero Visual */}
      <div className="hero-visual flex items-start col-start-2 col-end-3 row-start-1 row-end-2">
        <div className="hero-marquee pointer-events-none flex translate-y-[-100%] -translate-x-20 rotate-45 origin-[0%_100%]">
          <SerenaFilm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
