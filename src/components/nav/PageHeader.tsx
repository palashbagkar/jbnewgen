import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import type { Crumb } from "@/lib/content";

/**
 * Minimal page identity block for the navigation skeleton.
 * Renders only: breadcrumb trail, the page title, and a one-line note about
 * what this page links to. No marketing content.
 * `eyebrow` is accepted for call-site compatibility but no longer rendered.
 */
export function PageHeader({
  title,
  trail,
  note,
  children,
}: {
  eyebrow?: string;
  title: string;
  trail?: Crumb[];
  note?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-ink-100 bg-ink-50/40">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.3]" />
      <div className="pointer-events-none absolute -top-24 right-[-6rem] h-72 w-72 rounded-[7px] bg-flame-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        {trail && (
          <div className="mb-6">
            <Breadcrumbs trail={trail} />
          </div>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl md:text-[3.4rem] md:leading-[1.05]">
          {title}
        </h1>
        {note && <p className="mt-5 max-w-2xl text-pretty text-base text-ink-500 sm:text-lg">{note}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}
