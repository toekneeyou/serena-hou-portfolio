import { FC, PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full max-w-[1728px] mx-auto">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
