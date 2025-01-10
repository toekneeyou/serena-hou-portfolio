import { Button } from "@components/button/Button";
import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainContentLayout className="h-screen centered-col">
      <h1 className="text-8xl">404</h1>
      <p className="text-2xl">Page not found</p>
      <Button className="mt-12" onClick={() => navigate(ROUTES.HOME)}>
        Go Home
      </Button>
    </MainContentLayout>
  );
};
