import HeroSection from "./heroSection/HeroSection";
import ProjectView from "../project/ProjectView";
import BrandsSection from "./brandsSection/BrandsSection";
import { ContactView } from "../contact/ContactView";
import { MainContentLayout } from "@components/layouts/MainContentLayout";

export const HomeView = () => {
  return (
    <MainContentLayout className="pt-0">
      <HeroSection />
      {/* <BrandsSection /> */}
      {/* <ProjectView /> */}
      {/* <ContactView /> */}
    </MainContentLayout>
  );
};
