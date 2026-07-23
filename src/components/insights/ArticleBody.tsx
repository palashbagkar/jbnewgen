import type { ArticleSection } from "@/lib/insightsBodies";

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

/** Group consecutive "• "-prefixed paragraphs into a single list block. */
function toBlocks(paragraphs: string[]): Block[] {
  const blocks: Block[] = [];
  for (const p of paragraphs) {
    if (p.startsWith("• ")) {
      const item = p.slice(2).trim();
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(item);
      else blocks.push({ type: "ul", items: [item] });
    } else {
      blocks.push({ type: "p", text: p });
    }
  }
  return blocks;
}

function Blocks({ paragraphs, lead = false }: { paragraphs: string[]; lead?: boolean }) {
  return (
    <>
      {toBlocks(paragraphs).map((b, i) =>
        b.type === "ul" ? (
          <ul key={i} className="my-5 space-y-2.5 pl-1">
            {b.items.map((it, j) => (
              <li key={j} className="flex gap-3 text-ink-600">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500" aria-hidden />
                <span className="leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p
            key={i}
            className={
              lead
                ? "text-lg leading-relaxed text-ink-700"
                : "text-[1.02rem] leading-[1.8] text-ink-600"
            }
          >
            {b.text}
          </p>
        ),
      )}
    </>
  );
}

/** Renders an article's structured body as a centered reading column. */
export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="mx-auto max-w-[46rem] space-y-5 px-5 sm:px-8">
      {sections.map((s, i) => (
        <section key={i} className="space-y-5">
          {s.heading && s.level === 3 ? (
            <h3 className="pt-4 text-xl font-bold tracking-tight text-ink-900">{s.heading}</h3>
          ) : s.heading ? (
            <h2 className="flex items-center gap-3 pt-8 text-2xl font-bold tracking-tight text-ink-900">
              <span className="h-5 w-1.5 shrink-0 rounded-full bg-flame-500" aria-hidden />
              {s.heading}
            </h2>
          ) : null}
          {s.paragraphs.length > 0 && <Blocks paragraphs={s.paragraphs} lead={i === 0} />}
        </section>
      ))}
    </div>
  );
}
