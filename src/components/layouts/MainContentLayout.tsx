import clsx from "clsx";
import { FC } from "react";
import { ElementProps } from "src/types/types";

export const MainContentLayout: FC<ElementProps<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main
      className={clsx("w-full max-w-[1728px] mx-auto pt-28 pb-12", className)}
      {...props}
    >
      {children}
    </main>
  );
};
