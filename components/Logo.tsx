export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Sól & Sosna — strona główna"
      className={`flex items-baseline gap-1.5 font-serif text-[1.55rem] tracking-tight no-underline ${light ? "text-bg" : ""}`}
    >
      Sól <i className="text-sand">&amp;</i> Sosna
      {!light && (
        <small className="hidden font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase sm:inline">
          Nieruchomości
        </small>
      )}
    </a>
  );
}
