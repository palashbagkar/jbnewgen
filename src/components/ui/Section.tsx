import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/** Page section wrapper with consistent vertical rhythm + centered container. */
export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2
        className={cn(
          "text-balance text-3xl font-bold sm:text-4xl md:text-[2.7rem] md:leading-[1.08]",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            invert ? "text-ink-200" : "text-ink-500",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
