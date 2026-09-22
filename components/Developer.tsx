import Placeholder from "./Placeholder";
import { btnSolid, container } from "./ui";

const points = [
  "Cennik i podział na etapy oparte na danych z rynku",
  "Dedykowany zespół w biurze sprzedaży i na budowie",
  "Materiały marketingowe, wizualizacje i spacery 3D",
  "Raporty sprzedaży co tydzień, w jednym zestawieniu",
];

export default function Developer() {
  return (
    <section id="dewelopera" className="pb-16 md:pb-24 lg:pb-28">
      <div className={`${container} grid items-center gap-10 md:grid-cols-2 lg:gap-18`}>
        <Placeholder
          alt="Zdjęcie poglądowe: wizualizacja inwestycji"
          silhouette="house"
          warm
          label="WIZUALIZACJA 1500×1200 · inwestycja"
          shapeHeight="45%"
          className="aspect-[5/4]"
        />
        <div>
          <p className="eyebrow">Dla deweloperów</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4.2vw,3.1rem)] leading-[1.08]">
            Biuro sprzedaży Twojej inwestycji, prowadzone od pierwszego dnia
          </h2>
          <p className="mt-5 max-w-[46ch] text-muted">
            Budujesz kameralną inwestycję? Przejmiemy całą sprzedaż: od cennika i strategii etapów po
            obsługę klienta aż do odbioru lokalu.
          </p>
          <ul className="my-6 grid gap-3">
            {points.map((p) => (
              <li key={p} className="relative pl-5.5 text-muted before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-3 before:bg-sand">
                {p}
              </li>
            ))}
          </ul>
          <a href="#kontakt" className={btnSolid}>
            Porozmawiajmy o inwestycji
          </a>
        </div>
      </div>
    </section>
  );
}
