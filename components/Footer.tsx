import Logo from "./Logo";
import { container } from "./ui";

const cols = [
  {
    title: "Nawigacja",
    links: [
      ["Oferty", "#oferty"],
      ["Sprzedaj", "#proces"],
      ["Rynek pierwotny", "#dewelopera"],
      ["Dziennik", "#dziennik"],
      ["Kontakt", "#kontakt"],
    ],
  },
  {
    title: "Usługi",
    links: [
      ["Sprzedaż", "#uslugi"],
      ["Wynajem", "#uslugi"],
      ["Home staging", "#uslugi"],
      ["Fotografia", "#uslugi"],
      ["Finansowanie", "#uslugi"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-bg/15 bg-ink text-[0.85rem] text-bg/70">
      <div className={`${container} grid grid-cols-2 gap-8 py-12 md:grid-cols-[2fr_1fr_1fr]`}>
        <div className="col-span-2 md:col-span-1">
          <Logo light />
          <p className="mt-3 max-w-[40ch]">
            Marka fikcyjna stworzona na potrzeby projektu. Wszystkie dane, adresy, oferty i opinie są
            przykładowe.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 text-[0.78rem] font-semibold tracking-[0.12em] text-bg uppercase">{c.title}</h4>
            {c.links.map(([label, href]) => (
              <a key={label} href={href} className="block py-0.5 hover:text-sand">
                {label}
              </a>
            ))}
          </div>
        ))}
        <div className="col-span-full border-t border-bg/15 pt-5 text-[0.78rem]">
          © {new Date().getFullYear()} Sól &amp; Sosna Nieruchomości (marka przykładowa) · Polityka
          prywatności · Regulamin serwisu
        </div>
      </div>
    </footer>
  );
}
