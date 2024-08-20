import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import { lazy, Suspense } from "react";
import { homeRoute } from "./lib/services/routeService";

import "./index.css";

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
