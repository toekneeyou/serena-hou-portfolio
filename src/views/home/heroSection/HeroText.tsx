import { useLayoutEffect, useRef } from "react";
import { classnames } from "../../../lib/helpers";

const HeroText = () => {
  const heroTextContainerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  /**
   * Sets the max width of the hero text container based off of the width of the h1 element
   */
  useLayoutEffect(() => {
    const h1 = h1Ref.current!;
    const heroTextContainer = heroTextContainerRef.current!;
    const h1Width = h1.getBoundingClientRect().width;
    heroTextContainer.style.maxWidth = `${h1Width}px`;
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

export default HeroText;
