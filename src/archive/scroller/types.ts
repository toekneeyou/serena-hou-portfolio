import { PropsWithClassName } from "src/types/types";

export interface ScrollerProps extends PropsWithClassName {
  pages: number;
  currIndex: number;
  handleSelection?: (index: number) => void;
}
