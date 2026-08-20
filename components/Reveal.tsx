"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied to the reveal transition. */
  delay?: number;
  className?: string;
};

/**
 * Fades/rises children into view on scroll. The server-rendered HTML carries
 * no hidden state: `data-hidden` is only set after mount, so the exported
 * page is complete for no-JS readers and crawlers. Under
 * prefers-reduced-motion nothing is hidden and nothing transitions.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at load (anchor links, restored scroll): show as-is.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHidden(false);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      data-hidden={hidden ? "" : undefined}
      style={style}
    >
      {children}
    </div>
  );
}
