import { PropsWithChildren } from "react";

export interface PropsWithClassName {
  className?: string;
}

export interface PropsWithClassNameAndChildren
  extends PropsWithClassName,
    PropsWithChildren {}

export type ApiStatus = "idle" | "loading" | "success" | "fail";
