import styled from "styled-components";
import { charcoal } from "../../styles/GlobalStyle";
import { useLayoutEffect, useRef } from "react";

const HeroContainer = styled.section`
  height: 100vh;
`;
const HeroText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 11rem;

  h1 {
    display: inline-block;
    font-size: 5.125rem;
    font-weight: 700;
    position: relative;
    text-wrap: nowrap;
    word-spacing: 1rem;

    &::after {
      text-wrap: nowrap;
      content: "SERENA HOU";
      position: absolute;
      left: 0.25rem;
      top: 0.25rem;
      z-index: -1; /* Place behind the original text */
      color: ${charcoal}; /* Make the text transparent */
      text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
        1px 1px 0 white; /* Outline color */
    }
  }

  hr {
    height: 0.125rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    max-width: 28.75rem;
    font-size: 1.125rem;
  }
`;

const Hero = () => {
  const heroTextContainerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const h1 = h1Ref.current!;
    const heroTextContainer = heroTextContainerRef.current!;
    heroTextContainer.style.maxWidth = `${h1.getBoundingClientRect().width}px`;
  }, []);

  return (
    <HeroContainer id="hero">
      <HeroText>
        <div ref={heroTextContainerRef}>
          <h1 ref={h1Ref}>SERENA HOU</h1>
          <hr />
          <h2>MULTI-DISCIPLINARY CREATOR</h2>
          <p>
            Breathing life into visions and solving creative challenges are my
            strengths, powered by an obsession with design and the choreography
            of storytelling.
          </p>
        </div>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
