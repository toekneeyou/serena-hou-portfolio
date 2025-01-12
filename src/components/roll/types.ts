import { LegacyRef } from "react";
import { PropsWithClassName } from "src/types/types";

export interface RollProps<T> extends PropsWithClassName {
  selectId?: (item: T) => string;
  items: T[];
  itemRenderFunction: (
    item: T,
    index?: number,
    ref?: LegacyRef<HTMLElement>
  ) => JSX.Element;
  currIndex: number;
  height?: string;
  direction?: "up" | "down";
  alignment?: "start" | "center" | "end";
}
