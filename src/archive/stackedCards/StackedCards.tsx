import clsx from "clsx";
import { LegacyRef, useEffect, useRef } from "react";

const MAX_STACK_DEPTH = 7; // rem

export interface StackedCardsProps<T extends { id: string }> {
  cards: T[];
  cardRenderFunction: (
    card: T,
    index: number,
    ref: LegacyRef<HTMLElement>
  ) => JSX.Element;
}
/**
 * StackedCards needs to be inside a scrollable container with position:relative
 */
const StackedCards = <T extends { id: string }>({
  cards,
  cardRenderFunction,
}: StackedCardsProps<T>) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const cardElsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const cardEls = cardElsRef.current!;
    const n = cardEls.length;
    /**
     *
     * Check to see if an element is interecting the viewport
     *
     */
    const isIntersecting = (el: HTMLElement) => {
      if (el) return el.getBoundingClientRect().top <= window.innerHeight;
      return false;
    };

    /**
     *
     * Check to see if an element has reached the top of the viewport
     *
     */
    const hasReachedTop = (el: HTMLElement) => {
      if (el) return el.getBoundingClientRect().top <= el.offsetTop;
      return false;
    };
    /**
     *
     * Check to see if the next el is intersecting the viewport.
     *
     */
    const isNextElShowing = (nextIndex: number) => {
      if (nextIndex <= cardEls.length - 1)
        return isIntersecting(cardEls[nextIndex]);
      return false;
    };
    /**
     *
     * Create `scale` and `yOffset` values based on index value for transitions.
     *
     */
    const createTransitionValuesArray = (size: number) => {
      const scale = new Array(size)
        .fill(0.05)
        .map((percentage, i) => percentage * i)
        .reverse();
      const yOffset = new Array(size)
        .fill(Math.min(1 * cards.length, MAX_STACK_DEPTH))
        .map((y, i) => -y / (i + 1));
      return { scale, yOffset };
    };
    /**
     *
     * Get transition values based off of index value.
     *
     */
    const getTransitionValues = (
      index: number,
      scale: number[],
      yOffset: number[]
    ) => {
      return `scale(${1 - scale[index]}) translateY(${yOffset[index]}rem)`;
    };
    /**
     *
     * Animate el on scroll
     *
     */
    let rafId: ReturnType<typeof requestAnimationFrame>;
    const { scale, yOffset } = createTransitionValuesArray(n);
    const handleScroll = () => {
      /**
       *
       * Cancel pending animation frames
       *
       */
      cancelAnimationFrame(rafId);
      /**
       *
       * request animation frame
       *
       */
      rafId = requestAnimationFrame(() => {
        for (let i = 0; i < n; i++) {
          const el = cardEls[i];
          /**
           *
           * If an el has reached the top and the next el is showing, apply transition values.
           *
           */
          if (hasReachedTop(el) && isNextElShowing(i + 1)) {
            el.style.transform = getTransitionValues(i, scale, yOffset);
          } else {
            el.style.transform = `scale(1) translateY(0)`;
          }
        }
      });
    };
    /**
     *
     * Use IntersectionObserver to add and remove scroll event listener depending on ProjectList visibility.
     *
     */
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    });
    observer.observe(containerRef.current!);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cards]);

  return (
    <ul ref={containerRef} className={clsx("stacked-cards")}>
      {cards.map((card, i) => {
        return (
          <li
            key={card.id}
            className="stacked-cards__item sticky top-0 centered-row h-screen w-full"
          >
            {cardRenderFunction(
              card,
              i,
              (el) => (cardElsRef.current[i] = el as HTMLLIElement)
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default StackedCards;
