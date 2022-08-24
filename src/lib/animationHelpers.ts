import { animate } from "motion";

export const float = (
  el: HTMLElement | Element,
  opts?: {
    /**
     * @default -5
     */
    max?: number;
    /**
     * @default 0
     */
    start?: number;
  }
) => {
  const start = opts?.start ?? 0;

  const max = opts?.max ?? -5;
  const upper = Math.max(max, -Math.random() * 10);

  return animate(
    el,
    {
      y: [start, max],
    },
    {
      repeat: Infinity,
      direction: "alternate-reverse",
      easing: "ease-in-out",
      duration: Math.random() * 2 + 1,
    }
  );
};
