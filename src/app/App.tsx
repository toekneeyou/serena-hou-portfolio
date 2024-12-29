import { Outlet } from "react-router-dom";
import AppLayout from "@components/layouts/AppLayout";
import { Providers } from "./Providers";
import "../../index.css";

const App = () => {
  return (
    <Providers>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Providers>
  );
};

export default App;
