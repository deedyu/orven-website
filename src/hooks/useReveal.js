import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

export const ease = [0.22, 1, 0.36, 1];

export default function useReveal(delay = 0) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return {};

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -8% 0px" },
    transition: { duration: 0.9, ease, delay },
  };
}
