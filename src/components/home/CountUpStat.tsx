"use client";

import { useEffect, useRef, useState } from "react";

/** Split "200–500%" / "7,000+" into alternating text/number tokens. */
function parseValue(raw: string) {
  const parts: { text: string; target?: number }[] = [];
  const re = /\d[\d,]*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw))) {
    if (m.index > lastIndex) parts.push({ text: raw.slice(lastIndex, m.index) });
    parts.push({ text: m[0], target: Number(m[0].replace(/,/g, "")) });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < raw.length) parts.push({ text: raw.slice(lastIndex) });
  return parts;
}

// Slow start → fast middle → slow finish.
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

const DURATION_MS = 3200;

export function CountUpStat({ value, delayMs = 0 }: { value: string; delayMs?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setProgress(1);
      return;
    }

    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();

          if (reduceMotion) {
            setProgress(1);
            return;
          }

          timeout = setTimeout(() => {
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / DURATION_MS);
              setProgress(easeInOutCubic(t));
              if (t < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
          }, delayMs);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [delayMs]);

  const parts = parseValue(value);

  return (
    <span ref={ref} className="tabular-nums">
      {parts.map((p, i) =>
        p.target === undefined ? (
          <span key={i}>{p.text}</span>
        ) : (
          <span key={i}>{Math.round(p.target * progress).toLocaleString("en-US")}</span>
        ),
      )}
    </span>
  );
}
