import { FC, PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
