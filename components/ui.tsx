// Drobne, współdzielone elementy UI

export const container = "mx-auto max-w-[1200px] px-4 sm:px-10";
export const section = "py-16 md:py-24 lg:py-28";

const btnBase =
  "inline-flex items-center gap-2 rounded-sm border border-pine px-6 py-3.5 text-[0.92rem] font-semibold transition-colors";

export const btnSolid = `${btnBase} bg-pine text-on-pine hover:bg-pine-2 hover:border-pine-2`;
export const btnGhost = `${btnBase} bg-transparent text-pine hover:bg-pine hover:text-on-pine`;

export function SectionHead({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: React.ReactNode;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.08]">{title}</h2>
      </div>
      {aside}
    </div>
  );
}

export function DemoFlag() {
  return (
    <span className="ml-2 bg-sand px-2 py-0.5 font-mono text-[0.7rem] tracking-normal text-[#1b1710] normal-case">
      dane przykładowe
    </span>
  );
}
