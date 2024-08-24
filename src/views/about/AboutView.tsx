import AboutInitializer from "./AboutInitializer";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import ToolsIUse from "./ToolsIUse";

export const AboutView = () => {
  return (
    <section>
      <AboutInitializer />
      <AboutMe />
      <ToolsIUse />
      <Blog />
    </section>
  );
};
