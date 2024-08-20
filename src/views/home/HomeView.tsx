import ProjectView from "../project/ProjectView";
import Brands from "./Brands";
import Hero from "./Hero";
import { ContactView } from "../contact/ContactView";

const HomeView = () => {
  return (
    <>
      <Hero />
      <Brands />
      <ProjectView />
      <ContactView />
    </>
  );
};

export default HomeView;
