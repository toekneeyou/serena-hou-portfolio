import { classnames } from "../../lib/helpers/helpers";
import { aboutContentWidthClassName } from "./AboutView";

const AboutMe = () => {
  return (
    <div className="w-full centered-col relative">
      <AboutMeTitle />
      <AboutMeShort />
      <AboutMeLong />
    </div>
  );
};

const AboutMeTitle = () => {
  return (
    <div className="flex justify-end items-start w-24 transition-transform absolute left-0 top-0">
      <h2 className="text-nowrap inline-block -rotate-90 origin-bottom-right uppercase font-oswald text-8xl -translate-y-16">
        About Me
      </h2>
    </div>
  );
};

const AboutMeShort = () => {
  return (
    <div
      className={classnames(
        "flex items-center justify-between mb-16",
        aboutContentWidthClassName
      )}
    >
      <div>
        <p className="w-[23rem]">
          <span className="block text-3xl font-bold mb-10">
            Hey there, I'm Serena!
          </span>
          <span className="block mb-4 text-3xl">
            I’m a UX/UI designer / post-production supervisor based in Los
            Angeles.
          </span>
        </p>
      </div>
      <div>
        <img
          src="/src/assets/about-me.gif"
          className="rounded-2xl w-80 macbook-14:w-[22rem]"
        />
      </div>
    </div>
  );
};

const AboutMeLong = () => {
  return (
    <div className={classnames("centered-row", aboutContentWidthClassName)}>
      <p className="text-lg">
        <span className="block mb-4">
          With over <strong>10 years of video production experience</strong>,
          I've done it all – directing, producing, designing, editing &ndash;
          you name it. From comedy videos to documentaries and eye-catching ads,
          I've brought plenty of ideas to life.
        </span>
        <span className="block mb-4">
          "With your eye for design and storytelling, have you ever thought
          about UI/UX design?"After crafting stories through video production
          for years, that question from a UI designer friend sparked a curiosity
          in me. It was the push I needed to start a new chapter in my creative
          journey—into the world of <strong>UI/UX design</strong>.
        </span>
        <span className="block mb-4">
          But hey, life isn't all frames and designs! You can find me sharing
          bits of my adventures on social media. What started as a fun hobby
          turned into a big passion project. Oh, and I've even tried my hand at
          marketing and social media strategy &ndash; because, why not, right?
        </span>
        <span className="block">
          Let's chat and share stories &ndash; I'm excited to get to know you!
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
