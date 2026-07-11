import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export type NavGridItem = {
  label: string;
  href: string;
  desc?: string;
  icon?: IconName;
  external?: boolean;
};

const cols: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function NavGrid({
  title,
  caption,
  items,
  columns = 3,
  className,
}: {
  title?: string;
  caption?: string;
  items: NavGridItem[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16", className)}>
      {(title || caption) && (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            {title && (
              <h2 className="text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">{title}</h2>
            )}
            {caption && <p className="mt-1 text-sm text-ink-500">{caption}</p>}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            {items.length} link{items.length === 1 ? "" : "s"}
          </span>
        </div>
      )}

      <div className={cn("grid grid-cols-1 gap-4", cols[columns])}>
        {items.map((item, i) => (
          <Reveal key={item.href + item.label} delay={(i % 3) * 60}>
            <Link
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-28px_rgba(8,21,39,0.45)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-flame-500 to-flame-500 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-flame-500/12 to-flame-500/12 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                <Icon name={item.icon ?? "arrowUpRight"} size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 font-semibold text-ink-900">
                  {item.label}
                  <Icon
                    name={item.external ? "arrowUpRight" : "arrowRight"}
                    size={15}
                    className="text-flame-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </span>
                {item.desc && <span className="mt-1 block text-sm text-ink-500">{item.desc}</span>}
                <span className="mt-2 block truncate font-mono text-[0.7rem] text-ink-300">
                  {item.href}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
