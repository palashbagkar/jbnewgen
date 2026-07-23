import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { IconName } from "@/components/ui/Icon";

type Action = { label: string; href: string; icon?: IconName; variant?: "primary" | "light" | "secondary" };

/** Persistent conversion rail - the "next step" present at the foot of every page. */
export function NextStep({
  heading = "No page is a dead end.",
  actions = [
    { label: "Get a quote", href: "/quote", variant: "primary" },
    { label: "Contact us", href: "/contact", variant: "light", icon: "arrowUpRight" },
  ],
}: {
  heading?: string;
  actions?: Action[];
}) {
  return (
    <section className="px-5 pb-20 pt-4 sm:px-8">
      <Reveal className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 overflow-hidden rounded-3xl bg-ink-950 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-12">
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-flame-400">Conversion rail</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
        </div>
        <div className="relative flex flex-wrap gap-3">
          {actions.map((a) => (
            <Button key={a.href + a.label} href={a.href} variant={a.variant ?? "primary"} icon={a.icon}>
              {a.label}
            </Button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
