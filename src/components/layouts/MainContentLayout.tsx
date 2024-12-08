import { classnames } from "@helpers/helpers";
import { FC } from "react";
import { ElementProps } from "src/types/types";

export const MainContentLayout: FC<ElementProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main
      className={classnames("w-full max-w-[1728px] mx-auto pt-16", className)}
      {...props}
    >
      {children}
    </main>
  );
};
