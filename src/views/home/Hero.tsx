import { useLayoutEffect, useRef } from "react";
import { classnames } from "../../lib/helpers";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen overflow-hidden grid grid-cols-[max-content_1fr]"
    >
      <HeroText />
      <HeroVisual />
    </section>
  );
};
/**
 *
 * Hero text content
 *
 */
const HeroText = () => {
  const heroTextContainerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  /**
   *
   * Sets the max width of the hero text container based off of the width of the h1 element
   */
  useLayoutEffect(() => {
    const h1 = h1Ref.current!;
    const heroTextContainer = heroTextContainerRef.current!;
    heroTextContainer.style.maxWidth = `${h1.getBoundingClientRect().width}px`;
  }, []);

  return (
    <div className="hero-text h-full flex items-center pl-[11rem]">
      <div ref={heroTextContainerRef}>
        <h1
          ref={h1Ref}
          data-text="SERENA HOU"
          className={classnames(
            "inline-block relative text-nowrap [word-spacing:1rem]",
            "after:text-nowrap after:content-[attr(data-text)] after:absolute after:left-1 after:top-1 after:z-[-1] after:text-charcoal after:serena-hou-h1-shadow"
          )}
        >
          SERENA HOU
        </h1>
        <hr className="h-[0.125rem] my-4 mx-0" />
        <h2 className="mb-4">MULTI-DISCIPLINARY CREATOR</h2>
        <p className="max-w-[28.75rem] text-[1.125rem]">
          Breathing life into visions and solving creative challenges are my
          strengths, powered by an obsession with design and the choreography of
          storytelling.
        </p>
      </div>
    </div>
  );
};
/**
 *
 * Serena film marquee visual
 *
 */
const HeroVisual = () => {
  return (
    <div className="hero-visual flex items-start">
      <div className="hero-marquee pointer-events-none flex translate-y-[-100%] -translate-x-20 rotate-45 origin-[0%_100%]">
        <SerenaFilm />
      </div>
    </div>
  );
};
/**
 *
 * Individual Serena film strips
 *
 */
const SerenaFilm = () => (
  <img
    className={classnames("max-w-[initial]", {
      "animate-hero-film-marquee": false,
    })}
    src="/src/assets/hero-film.jpg"
    alt="film strip of serena in different poses"
  />
);

export default Hero;
