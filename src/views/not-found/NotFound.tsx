import { Button } from "@components/button/Button";
import { MainContentLayout } from "@components/layouts/MainContentLayout";
import { ABS_ROUTES } from "@constants/routes";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainContentLayout className="h-screen centered-col">
      <h1 className="text-9xl">404</h1>
      <p className="text-3xl">Page not found</p>
      <Button className="mt-16" onClick={() => navigate(ABS_ROUTES.HOME)}>
        Go Home
      </Button>
    </MainContentLayout>
  );
};
