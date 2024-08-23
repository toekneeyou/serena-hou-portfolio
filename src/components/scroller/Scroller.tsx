import { useMemo } from "react";
import { classnames } from "../../lib/helpers";

interface ScrollerProps {
  pages: number;
  currIndex: number;
  handleSelection: (index: number) => void;
}

const SEGMENT_HEIGHT = 1.25; // rem

const Scroller = ({ pages, currIndex, handleSelection }: ScrollerProps) => {
  /**
   * create segments to be mapped based on number of pages
   */
  const segments = useMemo(() => {
    return new Array(pages).fill(1).map((one, i) => one * i);
  }, [pages]);

  return (
    <div
      className="flex flex-col items-center justify-start absolute -right-14 w-[24px] overflow-y-hidden"
      style={{ height: `${5 * SEGMENT_HEIGHT}rem` }}
    >
      {segments.map((indexNum) => {
        const isCurr = currIndex === indexNum;
        const yOffset = 200 - 100 * currIndex;

        const handleClick = () => {
          handleSelection(indexNum);
        };

        return (
          <button
            key={indexNum}
            type="button"
            onClick={handleClick}
            className="centered-row transition-transform"
            style={{
              height: `${SEGMENT_HEIGHT}rem`,
              minHeight: `${SEGMENT_HEIGHT}rem`,
              transform: `translateY(${yOffset}%)`,
            }}
          >
            <div
              className={classnames(
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
