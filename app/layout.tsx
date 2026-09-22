import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sól & Sosna Nieruchomości · Trójmiasto",
  description:
    "Sprzedaż i wynajem nieruchomości premium w Gdańsku, Gdyni i Sopocie. Wycena, home staging, sesja zdjęciowa i pełna obsługa transakcji.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${bodoni.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-sans text-base leading-relaxed antialiased">{children}</body>
    </html>
  );
}
