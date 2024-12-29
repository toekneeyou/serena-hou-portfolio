import Fallback from "@components/fallback/Fallback";
import ViewportObserver from "@components/viewportObserver/ViewportObserver";
import { store } from "@store/store";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider as ReduxProvider } from "react-redux";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ErrorBoundary fallbackRender={Fallback}>
        <ViewportObserver />
        {children}
      </ErrorBoundary>
    </ReduxProvider>
  );
};
