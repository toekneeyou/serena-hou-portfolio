import HeroVisual from "./HeroVisual";
import HeroText from "./HeroText";

const HeroSection = () => {
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

export default HeroSection;
