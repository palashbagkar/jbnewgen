import Image from "next/image";
import { cn } from "@/lib/cn";
import icon from "../../../public/images/favicon-src.png";

/**
 * Composed logo: the amber-bulb / blue-hand mark + "JBNewGen" wordmark.
 * Text colour adapts to background via `light`, so it stays crisp on
 * both the header and the dark footer.
 */
export function Logo({
  light = false,
  withTagline = false,
  className,
}: {
  light?: boolean;
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={icon}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 drop-shadow-sm"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-flame-500">JB</span>
          <span className={light ? "text-white" : "text-ink-900"}>NewGen</span>
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
              light ? "text-ink-200/80" : "text-ink-400",
            )}
          >
            Empowering Digital Future
          </span>
        )}
      </span>
    </span>
  );
}
