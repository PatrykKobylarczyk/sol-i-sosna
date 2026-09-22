import { stats } from "@/lib/data";
import { container, DemoFlag, section } from "./ui";

export default function Stats() {
  return (
    <section className={`${section} bg-pine text-on-pine`}>
      <div className={container}>
        <p className="eyebrow !text-on-pine/70">
          Sól &amp; Sosna w liczbach <DemoFlag />
        </p>
        <h2 className="mt-3 mb-12 max-w-[20ch] font-serif text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.08]">
          Mniej czekania, lepsza cena.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-on-pine/30 py-6 pr-6">
              <div className="font-serif text-[clamp(2.2rem,4vw,3.3rem)] leading-none tabular-nums">
                {s.value}
                <small className="ml-1 font-mono text-[0.45em]">{s.unit}</small>
              </div>
              <div className="mt-2.5 max-w-[22ch] text-[0.88rem] opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
