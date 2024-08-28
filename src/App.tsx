import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import { lazy, Suspense } from "react";
import { homeRoute } from "./lib/services/routeService";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/fallback/Fallback";

const Footer = lazy(() => import("./components/footer/Footer"));

import "./index.css";

const HomeView = lazy(() => import("./views/home/HomeView"));

function App() {
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <ViewportObserver />
      <Header />
      <Main />
      <Suspense>
        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}
/**
 *
 * Main is where Views are rendered
 *
 */
function Main() {
  const location = useLocation();

  return (
    <main className="w-full max-w-[1728px] mx-auto">
      {location.pathname === homeRoute.path && (
        <Suspense>
          <HomeView />
        </Suspense>
      )}
      <Outlet />
    </main>
  );
}

export default App;
