import clsx from "clsx";
import { FC } from "react";
import { ElementProps } from "src/types/types";

export const Button: FC<ElementProps<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "uppercase py-2 px-6 border hover:bg-white hover:text-charcoal transition-all",
        className
      )}
      {...props}
    />
  );
};
