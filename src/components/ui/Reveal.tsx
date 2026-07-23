"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "slide" | "pop";

// slide: default for general components - blurred, moves in from the left.
// pop:   buttons/containers - blurred, rises in from the bottom.
const hidden: Record<Variant, string> = {
  slide: "opacity-0 -translate-x-10 blur-md",
  pop: "opacity-0 translate-y-6 blur-md",
};

const shown = "opacity-100 translate-x-0 translate-y-0 blur-none";

/** Blurs + moves its children into view once, respecting reduced-motion. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "slide",
  className,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: Variant;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setIsShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      {...rest}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none motion-reduce:blur-none",
        isShown ? shown : hidden[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
