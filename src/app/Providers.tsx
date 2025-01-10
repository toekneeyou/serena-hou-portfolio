import Fallback from "@components/fallback/Fallback";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ViewportProvider } from "@contexts/viewport/ViewportContext";

const queryClient = new QueryClient();

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={Fallback}>
        <ViewportProvider>{children}</ViewportProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
