# Sól & Sosna Nieruchomości

Strona agencji nieruchomości premium (marka fikcyjna), zbudowana w **Next.js (App Router) + Tailwind CSS v4 + TypeScript**.

## Uruchomienie

Wymagany Node.js 20.9 lub nowszy.

```bash
npm install
npm run dev
```

Otwórz http://localhost:3000.

Wersja produkcyjna:

```bash
npm run build
npm start
```

## Struktura

```
app/
  layout.tsx       – fonty (next/font), metadane, <html lang="pl">
  page.tsx         – składa stronę z sekcji
  globals.css      – kolory marki, jasny i ciemny motyw, tokeny Tailwinda
components/
  Header.tsx       – górny pasek, menu z rozwijanymi listami, menu mobilne
  Hero.tsx         – nagłówek strony
  Steps.tsx        – 6 kroków sprzedaży
  Stats.tsx        – statystyki
  Listings.tsx     – oferty z filtrem miast
  Developer.tsx    – sekcja dla deweloperów
  Services.tsx     – siatka usług
  Journal.tsx      – blog / dziennik
  Reviews.tsx      – oceny i opinie
  Contact.tsx      – dane kontaktowe + ContactForm.tsx (formularz)
  Footer.tsx       – stopka
  Placeholder.tsx  – zaślepka zdjęcia
  ui.tsx           – wspólne klasy przycisków i nagłówków sekcji
lib/
  data.ts          – WSZYSTKIE treści: oferty, usługi, wpisy, opinie, kontakt
```

## Jak podmienić treści

- **Teksty, oferty, kontakt**: edytuj `lib/data.ts`.
- **Kolory**: zmienne `--pine`, `--sand` itd. w `app/globals.css` (osobno dla jasnego i ciemnego motywu).
  W klasach używasz ich jako `bg-pine`, `text-sand`, `border-line`…
- **Zdjęcia**: wrzuć pliki do `public/zdjecia/` i zamień `<Placeholder … />` na:

  ```tsx
  import Image from "next/image";

  <div className="relative aspect-[3/2]">
    <Image src="/zdjecia/apartament-orlowo.jpg" alt="Salon z widokiem na morze" fill className="object-cover" />
  </div>
  ```

- **Formularz**: w `components/ContactForm.tsx` jest `TODO`: podłącz wysyłkę, np. przez Route Handler
  `app/api/contact/route.ts` albo usługę typu Resend lub Formspree.
