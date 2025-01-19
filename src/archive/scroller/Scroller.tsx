import { useMemo } from "react";
import clsx from "clsx";
import { ScrollerProps } from "./types";
import { SEGMENT_HEIGHT } from "./constants";
import { pxToRem } from "@helpers/conversions";

const Scroller = ({
  pages,
  currIndex,
  handleSelection,
  className,
}: ScrollerProps) => {
  /**
   * create segments to be mapped based on number of pages
   */
  const segments = useMemo(() => {
    return new Array(pages).fill(1).map((one, i) => one * i);
  }, [pages]);

  return (
    <div
      className={clsx(
        "scroller",
        "flex flex-col items-center justify-start w-[24px] overflow-y-hidden",
        className
      )}
      style={{ height: pxToRem(5 * SEGMENT_HEIGHT) }}
    >
      {segments.map((indexNum) => {
        const isCurr = currIndex === indexNum;
        const yOffset = 200 - 100 * currIndex;

        const handleClick = () => {
          handleSelection?.(indexNum);
        };

        return (
          <button
            key={indexNum}
            type="button"
            onClick={handleClick}
            className="centered-row transition-transform"
            style={{
              height: pxToRem(SEGMENT_HEIGHT),
              minHeight: pxToRem(SEGMENT_HEIGHT),
              transform: `translateY(${yOffset}%)`,
            }}
          >
            <div
              className={clsx(
                "h-[6px] w-[12px] rounded-[0.25rem] bg-[#E5DBD0] transition-all",
                { "opacity-30 w-[12px]": !isCurr, "w-[24px]": isCurr }
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Scroller;
