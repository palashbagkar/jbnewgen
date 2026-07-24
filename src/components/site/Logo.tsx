import Image from "next/image";
import { cn } from "@/lib/cn";
import { brand } from "@/lib/content";
import defaultIcon from "../../../public/images/favicon-src.png";

export type LogoBrand = {
  logoUrl?: string;
  logoAlt?: string;
  brandPrefix?: string;
  brandSuffix?: string;
  tagline?: string;
};

/**
 * Composed logo: the mark + the "JBNewGen" wordmark. Both come from Site
 * Settings in the CMS when set, otherwise from the built-in defaults.
 * Text colour adapts to background via `light`, so it stays crisp on
 * both the header and the dark footer.
 */
export function Logo({
  light = false,
  withTagline = false,
  className,
  logoUrl,
  logoAlt,
  brandPrefix,
  brandSuffix,
  tagline,
}: {
  light?: boolean;
  withTagline?: boolean;
  className?: string;
} & LogoBrand) {
  const prefix = brandPrefix || brand.prefix;
  const suffix = brandSuffix || brand.suffix;
  const line = tagline || brand.tagline;

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={logoUrl || defaultIcon}
        alt={logoAlt || ""}
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain drop-shadow-sm"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-flame-500">{prefix}</span>
          <span className={light ? "text-white" : "text-ink-900"}>{suffix}</span>
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
              light ? "text-ink-200/80" : "text-ink-400",
            )}
          >
            {line}
          </span>
        )}
      </span>
    </span>
  );
}
