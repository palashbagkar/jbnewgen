import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[7px] font-semibold focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

// Full treatment - glow + hover lift.
const variants: Record<Variant, string> = {
  primary:
    "transition-all duration-200 bg-flame-500 text-white shadow-[0_10px_30px_-10px_rgba(247,148,29,0.7)] hover:bg-flame-600 hover:shadow-[0_14px_34px_-8px_rgba(247,148,29,0.7)] hover:-translate-y-0.5",
  secondary:
    "transition-all duration-200 bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(8,21,39,0.6)]",
  ghost:
    "transition-all duration-200 bg-transparent text-ink-800 ring-1 ring-inset ring-ink-200 hover:ring-ink-400 hover:bg-ink-50",
  light:
    "transition-all duration-200 bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur hover:bg-white/20",
};

// Flat treatment - no glow, no motion. Just a plain colour change on hover.
const flatVariants: Record<Variant, string> = {
  primary: "transition-colors duration-200 bg-flame-500 text-white hover:bg-flame-600",
  secondary: "transition-colors duration-200 bg-ink-900 text-white hover:bg-ink-800",
  ghost:
    "transition-colors duration-200 bg-transparent text-ink-800 ring-1 ring-inset ring-ink-200 hover:bg-ink-50",
  light:
    "transition-colors duration-200 bg-white/10 text-white ring-1 ring-inset ring-white/25 backdrop-blur hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Drop the glow + hover motion (used for the hero CTAs). */
  flat?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  icon = "arrowRight",
  flat = false,
  className,
  children,
  href,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={cn(base, (flat ? flatVariants : variants)[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      <Icon
        name={icon}
        size={18}
        className={cn("shrink-0", !flat && "transition-transform duration-200 group-hover:translate-x-0.5")}
      />
    </Link>
  );
}
