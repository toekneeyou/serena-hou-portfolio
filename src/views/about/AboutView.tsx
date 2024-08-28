import AboutInitializer from "./AboutInitializer";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import ToolsIUse from "./ToolsIUse";

export const aboutContentWidthClassName =
  "w-full max-w-[56rem] macbook-14:max-w-[60rem]";

export const AboutView = () => {
  return (
    <section id="about" className="py-40">
      <AboutInitializer />
      <AboutMe />
      <ToolsIUse />
      <Blog />
    </section>
  );
};
