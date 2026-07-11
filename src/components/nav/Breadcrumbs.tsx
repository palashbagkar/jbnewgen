import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Crumb } from "@/lib/content";

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <Icon name="chevronDown" size={14} className="-rotate-90 text-ink-300" />}
              {last ? (
                <span className="font-medium text-ink-500" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="text-ink-400 transition-colors hover:text-flame-600">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
