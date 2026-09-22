"use client";

import { useState, type FormEvent } from "react";

const label = "grid gap-1.5 text-[0.78rem] tracking-[0.08em] uppercase opacity-75";
const field =
  "rounded-none border-0 border-b border-bg/35 bg-transparent py-2 text-base tracking-normal text-bg normal-case outline-none focus:border-sand";

export default function ContactForm() {
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      setNote("Wpisz imię i nazwisko, żebyśmy wiedzieli, jak się do Ciebie zwracać.");
      return;
    }
    // TODO: podłącz wysyłkę, np. Route Handler (app/api/contact/route.ts) albo usługę typu Resend / Formspree.
    setNote(`Dziękujemy, ${name.split(" ")[0]}! To wersja demonstracyjna, więc formularz niczego nie wysyła.`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3.5 border border-bg/20 bg-bg/5 p-7">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <label htmlFor="f-name" className={label}>
          Imię i nazwisko
          <input id="f-name" name="name" autoComplete="name" required className={field} />
        </label>
        <label htmlFor="f-phone" className={label}>
          Telefon
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <label htmlFor="f-type" className={label}>
          Chcę
          <select id="f-type" name="type" className={field} defaultValue="sprzedać">
            {["sprzedać", "kupić", "wynająć", "porozmawiać o inwestycji"].map((o) => (
              <option key={o} className="text-[#14201d]">{o}</option>
            ))}
          </select>
        </label>
        <label htmlFor="f-city" className={label}>
          Miasto
          <select id="f-city" name="city" className={field} defaultValue="Gdynia">
            {["Gdańsk", "Gdynia", "Sopot", "inne"].map((o) => (
              <option key={o} className="text-[#14201d]">{o}</option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="f-msg" className={label}>
        Kilka słów o nieruchomości
        <textarea
          id="f-msg"
          name="msg"
          rows={3}
          placeholder="np. mieszkanie 3-pokojowe, 74 m², Gdynia Redłowo, 2. piętro"
          className={`${field} min-h-20 resize-y placeholder:text-bg/40`}
        />
      </label>
      <button
        type="submit"
        className="justify-self-start rounded-sm border border-sand bg-sand px-6 py-3.5 text-[0.92rem] font-semibold text-[#1b1710] transition-opacity hover:opacity-90"
      >
        Poproś o wycenę
      </button>
      <p aria-live="polite" className="m-0 min-h-[1.4em] text-[0.88rem] text-sand">
        {note}
      </p>
    </form>
  );
}
