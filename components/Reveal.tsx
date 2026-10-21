"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Reveal-on-scroll wrapper. Its children start hidden (faded + nudged down) and
 * rise into place the first time they enter the viewport — then stay. It reuses
 * the hero's motion (translateY with the same cubic-bezier and duration) so the
 * whole site shares one entrance feel, on every page and once per element.
 *
 * Reduced-motion users get the content shown immediately with no transition.
 * Once shown, the transform and will-change are dropped so the element never
 * becomes a containing block for any fixed-position descendant (e.g. modals).
 */
export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  y = 26,
  as,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  as?: ElementType;
  [key: string]: unknown;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        willChange: shown ? "auto" : "opacity, transform",
        transition: `opacity 1.05s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 1.05s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
