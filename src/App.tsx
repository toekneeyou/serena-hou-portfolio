import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import GlobalStyle from "./styles/GlobalStyle";
import { lazy, Suspense } from "react";

const HomeView = lazy(() => import("./views/home/HomeView"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ViewportObserver />
      <Header />
      <Main />
    </>
  );
}

export default App;

function Main() {
  const location = useLocation();
  return (
    <main>
      {location.pathname === "/" && (
        <Suspense>
          <HomeView />
        </Suspense>
      )}
      <Outlet />
    </main>
  );
}
