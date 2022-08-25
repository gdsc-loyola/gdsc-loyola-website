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
    min?: number;
    /**
     * @default 0
     */
    start?: number;

    /**
     * @description When given this will be the max dy of the animation. If not given it will be random within the min and max.
     */
    constant?: number;

    /**
     * @description When given this will be the duration of the animation.
     */
    duration?: number;

    delay?: number;
  }
) => {
  const start = opts?.start ?? 0;

  const max = opts?.max ?? -5;
  const min = opts?.min ?? 0;

  const upper = Math.max(max, Math.min(-Math.random() * 10, min));

  return animate(
    el,
    {
      y: [start, upper],
    },
    {
      repeat: Infinity,
      direction: "alternate-reverse",
      easing: "ease-in-out",
      duration: opts?.duration ?? Math.random() * 2 + 1,
      delay: opts?.delay ?? 0,
    }
  );
};
