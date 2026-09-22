import { posts } from "@/lib/data";
import Placeholder from "./Placeholder";
import { container, section, SectionHead } from "./ui";

const fmt = (iso: string) => iso.split("-").reverse().join(".");

export default function Journal() {
  const [lead, ...rest] = posts;

  return (
    <section id="dziennik" className={section}>
      <div className={container}>
        <SectionHead
          eyebrow="Dziennik"
          title="Z rynku i z okolicy"
          aside={
            <a href="#dziennik" className="border-b border-current pb-0.5 text-[0.92rem] font-semibold text-pine">
              Wszystkie wpisy →
            </a>
          }
        />
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr]">
          <article className="flex flex-col gap-3">
            <Placeholder
              alt="Zdjęcie poglądowe do artykułu"
              silhouette={lead.silhouette}
              label="FOTO 1600×1000"
              className="aspect-[16/10]"
            />
            <time dateTime={lead.date} className="font-mono text-xs text-muted">
              {fmt(lead.date)} · {lead.tag}
            </time>
            <h3 className="font-serif text-[1.8rem] leading-tight">{lead.title}</h3>
            <p className="m-0 text-[0.93rem] text-muted">{lead.excerpt}</p>
          </article>

          <div className="grid gap-6">
            {rest.map((p) => (
              <article key={p.title} className="grid grid-cols-[96px_1fr] items-start gap-4 sm:grid-cols-[140px_1fr]">
                <Placeholder alt="Zdjęcie poglądowe" silhouette={p.silhouette} warm={p.warm} shapeHeight="45%" className="aspect-square" />
                <div>
                  <time dateTime={p.date} className="font-mono text-xs text-muted">
                    {fmt(p.date)} · {p.tag}
                  </time>
                  <h3 className="mt-1 font-serif text-[1.35rem] leading-tight">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
