import { Outlet, useLocation } from "react-router-dom";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/fallback/Fallback";
import { HOME_ROUTE } from "./lib/services/routeService";

import "./index.css";

const HomeView = lazy(() => import("./views/home/HomeView"));

function App() {
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <ViewportObserver />
      <Main />
    </ErrorBoundary>
  );
}

/**
 * Main is where Views are rendered
 */
function Main() {
  const location = useLocation();

  return (
    <main className="w-full max-w-[1728px] mx-auto">
      {location.pathname === HOME_ROUTE && (
        <Suspense>
          <HomeView />
        </Suspense>
      )}
      <Outlet />
    </main>
  );
}

export default App;
