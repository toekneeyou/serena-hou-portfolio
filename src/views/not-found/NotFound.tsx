import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="main-content-layout h-screen centered-col">
      <h1 className="text-8xl font-mango text-120px font-black mb-9">Oops!</h1>
      <p className="text-24px text-neutral-300">
        This film is missing a frame, and it's this one!
      </p>
      <button className="btn mt-60px" onClick={() => navigate(ROUTES.HOME)}>
        Get Back On Set!
      </button>
    </main>
  );
};
