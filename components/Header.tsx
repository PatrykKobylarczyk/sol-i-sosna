"use client";

import { useEffect, useRef, useState } from "react";
import { contact, nav } from "@/lib/data";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Zamknij menu po kliknięciu poza nim lub klawiszem Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      <div className="border-b border-line text-[0.82rem] text-muted">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 px-4 py-2 sm:px-10">
          <div>Gdańsk · Gdynia · Sopot · Warszawa</div>
          <div className="font-mono">
            {contact.phone} · {contact.email}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-4 py-3.5 sm:px-10">
          <Logo />

          <button
            type="button"
            className="border border-line px-3 py-2 text-sm font-semibold lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="main-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "Zamknij" : "Menu"}
          </button>

          <nav
            ref={navRef}
            id="main-menu"
            aria-label="Główna nawigacja"
            className={`${mobileOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col items-stretch border-b border-line bg-bg px-4 pt-3 pb-5 sm:px-10 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    onClick={() => setOpenDropdown((d) => (d === item.label ? null : item.label))}
                    className="w-full rounded-sm px-3 py-2 text-left text-[0.9rem] font-medium hover:bg-surface"
                  >
                    {item.label} <span className="text-[0.7em] text-muted">▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-3 grid border-l-2 border-line pl-2 lg:absolute lg:top-[calc(100%+8px)] lg:left-0 lg:ml-0 lg:min-w-[220px] lg:border lg:border-line lg:bg-surface lg:p-2 lg:shadow-[0_18px_40px_-20px_rgba(0,0,0,.35)]">
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          onClick={closeAll}
                          className="px-3 py-2 text-[0.88rem] hover:bg-bg hover:text-pine"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  className="rounded-sm px-3 py-2 text-[0.9rem] font-medium hover:bg-surface"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href="#kontakt"
              onClick={closeAll}
              className="mt-3 inline-flex items-center justify-center rounded-sm border border-pine bg-pine px-5 py-3 text-sm font-semibold text-on-pine transition-colors hover:bg-pine-2 lg:mt-0 lg:ml-2"
            >
              Umów wycenę
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
