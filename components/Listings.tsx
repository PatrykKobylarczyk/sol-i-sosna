"use client";

import { useState } from "react";
import { listings, type Listing } from "@/lib/data";
import Placeholder from "./Placeholder";
import { container, section, SectionHead } from "./ui";

const cities = ["all", "Gdańsk", "Gdynia", "Sopot"] as const;
type CityFilter = (typeof cities)[number];

export default function Listings() {
  const [city, setCity] = useState<CityFilter>("all");
  const visible = listings.filter((l) => city === "all" || l.city === city);

  return (
    <section id="oferty" className={section}>
      <div className={container}>
        <SectionHead
          eyebrow="Wybrane oferty"
          title="Z widokiem, z historią, z ogrodem"
          aside={
            <div role="group" aria-label="Filtruj według miasta" className="flex flex-wrap gap-1.5">
              {cities.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={city === c}
                  onClick={() => setCity(c)}
                  className="rounded-sm border border-line px-4 py-2 text-[0.85rem] font-medium aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-bg"
                >
                  {c === "all" ? "Wszystkie" : c}
                </button>
              ))}
            </div>
          }
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>

        <p className="mt-9">
          <a href="#oferty" className="border-b border-current pb-0.5 text-[0.92rem] font-semibold text-pine">
            Zobacz wszystkie oferty →
          </a>
        </p>
      </div>
    </section>
  );
}

function ListingCard({ listing: l }: { listing: Listing }) {
  const specs = [
    ["Metraż", `${l.m2} m²`],
    ["Pokoje", l.rooms],
    ["Piętro", l.floor],
    ["Rok", l.year],
  ] as const;

  return (
    <a
      href="#kontakt"
      className="flex flex-col border border-line bg-surface transition-transform duration-300 hover:-translate-y-1"
    >
      <Placeholder
        alt={`Zdjęcie poglądowe: ${l.title}`}
        silhouette={l.silhouette}
        warm={l.warm}
        label="FOTO 1200×800"
        shapeHeight="42%"
        className="aspect-[3/2]"
      >
        {l.badge && (
          <span className="absolute top-3 left-3 bg-sand px-2.5 py-1 font-mono text-[0.68rem] tracking-widest text-[#1b1710] uppercase">
            {l.badge}
          </span>
        )}
      </Placeholder>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[0.84rem] text-muted">
          {l.city} · {l.area}
        </span>
        <h3 className="font-serif text-[1.3rem] leading-tight">{l.title}</h3>
        <dl className="mt-2 grid grid-cols-4 border-t border-line pt-3">
          {specs.map(([k, v]) => (
            <div key={k}>
              <dt className="text-[0.66rem] tracking-widest text-muted uppercase">{k}</dt>
              <dd className="mt-0.5 font-mono text-[0.88rem]">{v}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-auto pt-2 font-mono text-[1.05rem] font-medium text-pine">{l.price}</span>
      </div>
    </a>
  );
}
