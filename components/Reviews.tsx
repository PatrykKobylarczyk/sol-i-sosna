import { ratings, testimonials } from "@/lib/data";
import { container, DemoFlag } from "./ui";

const fmt = (n: number) => n.toFixed(1).replace(".", ",");

export default function Reviews() {
  return (
    <section className="pb-16 md:pb-24 lg:pb-28">
      <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.2fr] lg:gap-18`}>
        <div>
          <p className="eyebrow">
            Opinie klientów <DemoFlag />
          </p>
          <div className="mt-3 font-serif text-[clamp(4rem,9vw,7rem)] leading-none text-pine">
            4,9<small className="text-[0.35em] text-muted"> / 5</small>
          </div>
          <p className="mt-2 text-muted">Średnia ocen z ankiet po zakończonej transakcji</p>
          <div className="mt-7 grid gap-3.5">
            {ratings.map((r) => (
              <div key={r.label} className="grid grid-cols-[110px_1fr_36px] items-center gap-3 text-[0.9rem] sm:grid-cols-[150px_1fr_40px]">
                <span>{r.label}</span>
                <div className="h-1.5 bg-line">
                  <div className="h-full bg-pine" style={{ width: `${(r.value / 5) * 100}%` }} />
                </div>
                <span className="text-right font-mono">{fmt(r.value)}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {testimonials.map((t, i) => (
            <blockquote key={i} className={`border-b border-line pb-7 ${i > 0 ? "pt-7" : ""}`}>
              <p className="mb-3.5 font-serif text-[1.45rem] leading-snug">„{t.quote}”</p>
              <cite className="text-[0.85rem] text-muted not-italic">{t.who}</cite>
            </blockquote>
          ))}
          <div aria-label="Organizacje branżowe (miejsce na logotypy)" className="mt-9 flex flex-wrap gap-4">
            {["stowarzyszenie branżowe", "system MLS", "izba gospodarcza"].map((m) => (
              <div key={m} className="flex-[1_1_160px] border border-dashed border-line p-4.5 text-center font-mono text-[0.8rem] text-muted">
                LOGO · {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
