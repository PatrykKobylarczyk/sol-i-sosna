import { contact } from "@/lib/data";
import Placeholder from "./Placeholder";
import { btnGhost, btnSolid, container } from "./ui";

export default function Hero() {
  return (
    <section className="pt-10 pb-14 md:pt-16 md:pb-24">
      <div className={`${container} grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-18`}>
        <div>
          <p className="eyebrow">Nieruchomości premium · Trójmiasto</p>
          <h1 className="mt-4 font-serif text-[clamp(2.6rem,6.2vw,5.2rem)] leading-[1.05] tracking-tight">
            Dom nad zatoką zasługuje na <em className="text-pine">spokojną</em> sprzedaż.
          </h1>
          <p className="mt-6 mb-8 max-w-[44ch] text-lg text-muted">
            Przygotowujemy, pokazujemy i sprzedajemy mieszkania, apartamenty i domy od Oliwy po
            Orłowo. Jedna osoba prowadzi Twoją transakcję od wyceny aż po akt notarialny.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#kontakt" className={btnSolid}>
              Bezpłatna wycena
            </a>
            <a href="#oferty" className={btnGhost}>
              Przeglądaj oferty
            </a>
            <span className="ml-2 font-mono">{contact.phone}</span>
          </div>
        </div>

        <div className="relative">
          <Placeholder
            alt="Zdjęcie poglądowe: apartament z widokiem na morze"
            label="FOTO 1600×2000 · widok z tarasu"
            shapeHeight="38%"
            className="aspect-[4/3] md:aspect-[4/5]"
          />
          <div className="absolute right-3 bottom-8 min-w-[230px] border border-line bg-surface px-4.5 py-4 shadow-[0_24px_50px_-28px_rgba(0,0,0,.45)] md:-right-3">
            <div className="eyebrow">Nowość · Sopot, Dolny</div>
            <b className="my-0.5 block font-serif text-xl font-normal">Apartament z widokiem na molo</b>
            <div className="font-mono text-[0.78rem] text-muted">118 m² · 4 pok. · 4/4 · 2 890 000 PLN</div>
          </div>
        </div>
      </div>
    </section>
  );
}
