import { services } from "@/lib/data";
import { container, section, SectionHead } from "./ui";

const icons: Record<(typeof services)[number]["icon"], React.ReactNode> = {
  home: (<><path d="M3 11l9-7 9 7v9H3z" /><path d="M9 20v-6h6v6" /></>),
  key: (<><circle cx="8" cy="12" r="4" /><path d="M12 12h9M18 12v3M21 12v2" /></>),
  sofa: (<><path d="M4 18v-5a3 3 0 013-3h10a3 3 0 013 3v5M4 18h16M6 18v2M18 18v2" /><path d="M8 10V7h8v3" /></>),
  camera: (<><rect x="3" y="7" width="18" height="13" rx="1" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></>),
  cube: (<><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></>),
  bank: <path d="M3 20h18M5 20V10M9.5 20V10M14.5 20V10M19 20V10M2 10l10-6 10 6z" />,
  brush: (<><path d="M14 4l6 6-9 9H5v-6z" /><path d="M12 6l6 6" /></>),
  doc: (<><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v4h4M9 12h7M9 16h7" /></>),
};

export default function Services() {
  return (
    <section id="uslugi" className={`${section} border-y border-line bg-surface`}>
      <div className={container}>
        <SectionHead
          eyebrow="Usługi"
          title="Wszystko wokół jednej transakcji"
          aside={
            <p className="m-0 max-w-[46ch] text-muted">
              Nie musisz szukać fotografa, stylisty i doradcy kredytowego osobno. Wszystkich masz u nas.
            </p>
          }
        />
        <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.title}
              href="#kontakt"
              className="flex flex-col gap-2.5 border-r border-b border-line px-6 pt-7 pb-8 transition-colors hover:bg-bg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="size-7 text-pine" aria-hidden="true">
                {icons[s.icon]}
              </svg>
              <h3 className="font-serif text-[1.3rem]">{s.title}</h3>
              <p className="m-0 text-[0.9rem] text-muted">{s.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
