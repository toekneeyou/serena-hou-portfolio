import { LegacyRef, useLayoutEffect, useMemo, useRef } from "react";
import { PropsWithClassName } from "../../types/types";
import { isAriaHidden } from "../../lib/helpers/general";
import clsx from "clsx";

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
}

const Roll = <T,>({
  className,
  selectId,
  items,
  itemRenderFunction,
  currIndex,
  height,
  direction = "up",
}: RollProps<T>) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  /**
   *
   * If height is not provided, use height of tallest item
   *
   */
  useLayoutEffect(() => {
    if (!height) {
      const itemsEl = itemsRef.current;
      const container = containerRef.current;
      if (itemsEl && container) {
        const maxHeight = Math.max(
          ...itemsEl.map((item) => item.getBoundingClientRect().height)
        );
        container.style.height = `${maxHeight}px`;
        itemsEl.forEach((item) => {
          item.style.height = `${maxHeight}px`;
        });
      }
    }
  }, [items, height]);

  const { itemsCopy, yOffset } = useMemo(() => {
    const itemsCopy = [...items];
    let yOffset: number;
    if (direction === "up") {
      yOffset = currIndex * 100;
    } else {
      itemsCopy.reverse();
      const maxTransform = (itemsCopy.length - 1) * 100;
      yOffset = maxTransform - currIndex * 100;
    }
    return { itemsCopy, yOffset };
  }, [items, direction, currIndex]);

  return (
    <ul
      style={{ height }}
      className={clsx("roll", "overflow-hidden", className)}
      ref={containerRef}
    >
      {itemsCopy.map((item, i) => {
        const key =
          selectId !== undefined ? selectId(item) : JSON.stringify(item);

        return (
          <li
            aria-hidden={isAriaHidden(i, currIndex)}
            ref={(el) => (itemsRef.current[i] = el as HTMLLIElement)}
            key={key}
            className="transition-transform duration-300 flex items-center"
            style={{ transform: `translateY(-${yOffset}%)`, height }}
          >
            {itemRenderFunction(item, i)}
          </li>
        );
      })}
    </ul>
  );
};

export default Roll;
