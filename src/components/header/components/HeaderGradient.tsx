import { classnames } from "@helpers/general";

export const HeaderGradient = () => {
  return (
    <div
      role="none"
      className={classnames(
        "bg-header h-[40%] w-full fixed left-0 top-0 pointer-events-none z-header-gradient"
      )}
    />
  );
};
