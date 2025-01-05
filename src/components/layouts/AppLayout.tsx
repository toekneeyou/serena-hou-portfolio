import { FC, PropsWithChildren } from "react";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";

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
