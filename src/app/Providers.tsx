import Fallback from "@components/fallback/Fallback";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ViewportProvider } from "@contexts/viewport/ViewportContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const isDev = import.meta.env.MODE === "development";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={Fallback}>
        <ViewportProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={isDev} />
        </ViewportProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
