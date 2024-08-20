import { LegacyRef, useLayoutEffect, useMemo, useRef } from "react";

export interface RollProps<T extends { id: string }> {
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

const Roll = <T extends { id: string }>({
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
    <ul style={{ height }} className="overflow-hidden" ref={containerRef}>
      {itemsCopy.map((item, i) => {
        return (
          <li
            ref={(el) => (itemsRef.current[i] = el as HTMLLIElement)}
            key={item.id}
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
