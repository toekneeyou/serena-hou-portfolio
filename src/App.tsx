import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import ViewportObserver from "./components/viewportObserver/ViewportObserver";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ViewportObserver />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
