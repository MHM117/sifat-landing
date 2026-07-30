import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.classList.add("revealed");
      return;
    }

    // A ratio threshold is unreachable for anything taller than the viewport.
    // IntersectionObserver measures visible area as a fraction of the whole
    // element, so a 6000px section in an 800px window peaks at 13% visibility
    // and a 15% threshold never fires, leaving it stuck at opacity 0 forever.
    // Clamp to a ratio this element can actually hit.
    const height = el.getBoundingClientRect().height;
    const reachable = height > 0 ? window.innerHeight / height : 1;
    const effectiveThreshold = Math.min(threshold, reachable * 0.5);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: effectiveThreshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
