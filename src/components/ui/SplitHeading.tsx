"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const STEP_MS = 16;

type SplitResult = { output: ReactNode; count: number };

function letterSpans(text: string, startIndex: number, shown: boolean, delay: number): SplitResult {
  const words = text.split(" ");
  const nodes: ReactNode[] = [];
  let index = startIndex;
  words.forEach((word, wi) => {
    nodes.push(
      <span key={`w-${startIndex}-${wi}`} className="inline-block whitespace-nowrap">
        {word.split("").map((ch, ci) => {
          const i = index;
          index += 1;
          return (
            <span
              key={ci}
              className={cn("inline-block", shown ? "animate-letter-in motion-reduce:animate-none" : "opacity-0")}
              style={shown ? { animationDelay: `${delay + i * STEP_MS}ms` } : undefined}
            >
              {ch}
            </span>
          );
        })}
      </span>,
    );
    if (wi < words.length - 1) nodes.push(" ");
  });
  return { output: nodes as ReactNode, count: index - startIndex };
}

/** Walks children so nested styled runs (e.g. a colored accent word) still split and animate. */
function splitNode(node: ReactNode, startIndex: number, shown: boolean, delay: number): SplitResult {
  if (typeof node === "string") return letterSpans(node, startIndex, shown, delay);

  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    let count = 0;
    const newChildren = Children.map(el.props.children, (child) => {
      const res: SplitResult = splitNode(child, startIndex + count, shown, delay);
      count += res.count;
      return res.output;
    });
    return { output: cloneElement(el, undefined, newChildren), count };
  }

  return { output: node, count: 0 };
}

/** Headline text that blurs in letter by letter, left to right, once scrolled into view. */
export function SplitHeading({
  children,
  as: Tag = "h2",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
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
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let count = 0;
  const output = Children.map(children, (child) => {
    const res = splitNode(child, count, isShown, delay);
    count += res.count;
    return res.output;
  });

  return (
    <Tag ref={ref as never} className={className}>
      {output}
    </Tag>
  );
}
