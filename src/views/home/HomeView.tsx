import ProjectView from "../project/ProjectView";
import Brands from "./Brands";
import Hero from "./Hero";

const HomeView = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <ProjectView />
    </div>
  );
};

export default HomeView;
