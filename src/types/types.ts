import { PropsWithChildren } from "react";

export interface PropsWithClassName {
  className?: string;
}

export interface PropsWithClassNameAndChildren
  extends PropsWithClassName,
    PropsWithChildren {}

export type ApiStatus = "idle" | "loading" | "success" | "fail";

export type ElementProps<T extends HTMLElement> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;
