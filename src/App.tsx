import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import { lazy, Suspense } from "react";

import "./index.css";
import { homeRoute, projectRoute } from "./lib/services/routeService";

const HomeView = lazy(() => import("./views/home/HomeView"));

function App() {
  return (
    <>
      <ViewportObserver />
      <Header />
      <Main />
    </>
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
    <main className="w-full">
      {location.pathname === homeRoute.path ||
        (location.pathname === `/${projectRoute.path}` && (
          <Suspense>
            <HomeView />
          </Suspense>
        ))}
      <Outlet />
    </main>
  );
}

export default App;
