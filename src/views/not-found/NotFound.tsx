import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="main-content-layout h-screen centered-col">
      <h1 className="text-8xl">404</h1>
      <p className="text-2xl">Page not found</p>
      <button className="btn mt-12" onClick={() => navigate(ROUTES.HOME)}>
        Go Home
      </button>
    </main>
  );
};
