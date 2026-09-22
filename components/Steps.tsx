import { steps } from "@/lib/data";
import { container, section, SectionHead } from "./ui";

export default function Steps() {
  return (
    <section id="proces" className={`${section} border-y border-line bg-surface`}>
      <div className={container}>
        <SectionHead
          eyebrow="Jak pracujemy"
          title="Sprzedaż w sześciu krokach"
          aside={
            <p className="m-0 max-w-[46ch] text-muted">
              Każdy etap ma jasny termin i osobę odpowiedzialną. Co tydzień dostajesz krótki raport:
              ile było wyświetleń, prezentacji i ofert.
            </p>
          }
        />
        <ol className="grid grid-cols-1 border-l border-ink pl-5.5 sm:grid-cols-3 sm:gap-y-7 sm:border-t sm:border-l-0 sm:pl-0 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pb-2 sm:pt-5 sm:pr-5">
              <span className="absolute top-1.5 -left-[27px] size-[9px] rounded-full border border-ink bg-bg sm:-top-[5px] sm:left-0" />
              <span className="font-mono text-[0.78rem] text-sand">Krok {i + 1}</span>
              <h3 className="mt-2 mb-2.5 font-serif text-xl">{s.title}</h3>
              <p className="m-0 text-[0.9rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
