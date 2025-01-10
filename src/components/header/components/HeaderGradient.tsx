import clsx from "clsx";

export const HeaderGradient = () => {
  return (
    <div
      role="none"
      className={clsx(
        "bg-header h-[40%] w-full fixed left-0 top-0 pointer-events-none z-header-gradient"
      )}
    />
  );
};
