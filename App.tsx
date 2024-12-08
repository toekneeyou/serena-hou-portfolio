import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ViewportObserver from "@components/viewportObserver/ViewportObserver";
import Fallback from "@components/fallback/Fallback";
import AppLayout from "@components/layouts/AppLayout";

import "./index.css";

const App = () => {
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <ViewportObserver />
      <AppLayout>
        <Outlet />
      </AppLayout>
    </ErrorBoundary>
  );
};

export default App;
