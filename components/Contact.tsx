import { contact } from "@/lib/data";
import ContactForm from "./ContactForm";
import { container, section } from "./ui";

export default function Contact() {
  return (
    <section id="kontakt" className={`${section} bg-ink text-bg`}>
      <div className={`${container} grid gap-10 md:grid-cols-2 lg:gap-18`}>
        <div>
          <p className="eyebrow !text-bg/65">Kontakt</p>
          <h2 className="mt-3 mb-7 font-serif text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.08]">
            Zacznijmy od kawy i wyceny
          </h2>
          <div className="mb-7 grid gap-5 sm:grid-cols-3">
            {contact.offices.map((o) => (
              <div key={o.city}>
                <b className="mb-1 block font-serif text-xl font-normal">{o.city}</b>
                <span className="text-[0.88rem] opacity-75">
                  {o.street}
                  <br />
                  {o.zip}
                </span>
              </div>
            ))}
          </div>
          <div className="grid gap-1.5 font-mono">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span className="text-[0.85rem] opacity-60">{contact.hours}</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
