import { classnames } from "@helpers/helpers";

export const HeaderGradient = () => {
  return (
    <div
      role="none"
      className={classnames(
        "header-gradient",
        "bg-header h-[40%] w-full fixed left-0 top-0 pointer-events-none z-[49]"
      )}
    />
  );
};
