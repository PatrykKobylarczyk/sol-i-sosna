// Wszystkie dane poniżej są przykładowe — podmień na własne.

export const contact = {
  phone: "+48 58 000 00 00",
  email: "kontakt@solisosna.example",
  hours: "pon.–pt. 9:00–18:00 · sob. po umówieniu",
  offices: [
    { city: "Gdańsk", street: "ul. Przykładowa 1", zip: "80-000 Gdańsk" },
    { city: "Gdynia", street: "ul. Przykładowa 2", zip: "81-000 Gdynia" },
    { city: "Sopot", street: "ul. Przykładowa 3", zip: "81-700 Sopot" },
  ],
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: "Oferty",
    href: "#oferty",
    children: [
      { label: "Nowe na rynku", href: "#oferty" },
      { label: "Trójmiasto", href: "#oferty" },
      { label: "Wybrzeże Hiszpanii", href: "#oferty" },
      { label: "Katalogi PDF", href: "#oferty" },
    ],
  },
  { label: "Rynek pierwotny", href: "#dewelopera" },
  {
    label: "Usługi",
    href: "#uslugi",
    children: [
      { label: "Sprzedaż", href: "#uslugi" },
      { label: "Wynajem", href: "#uslugi" },
      { label: "Home staging", href: "#uslugi" },
      { label: "Fotografia i spacery 3D", href: "#uslugi" },
      { label: "Kredyt i finansowanie", href: "#uslugi" },
    ],
  },
  { label: "Sprzedaj", href: "#proces" },
  { label: "Dziennik", href: "#dziennik" },
  {
    label: "Zespół",
    href: "#kontakt",
    children: [
      { label: "Zarząd", href: "#kontakt" },
      { label: "Biuro Gdańsk", href: "#kontakt" },
      { label: "Biuro Gdynia", href: "#kontakt" },
      { label: "Biuro Sopot", href: "#kontakt" },
    ],
  },
];

export const steps = [
  { title: "Wycena", text: "Analiza transakcji z Twojej ulicy i okolicy, a nie średnich z portali." },
  { title: "Strategia", text: "Cena wyjściowa, grupa kupujących i kanały, do których warto dotrzeć." },
  { title: "Przygotowanie", text: "Drobne naprawy, home staging, sesja zdjęciowa i spacer 3D." },
  { title: "Promocja", text: "Portale, kampanie w social mediach i nasza baza sprawdzonych klientów." },
  { title: "Dokumenty", text: "Księga wieczysta, zaświadczenia i umowa przedwstępna bez niespodzianek." },
  { title: "Finał", text: "Akt notarialny, rozliczenie i protokół przekazania kluczy." },
];

export const stats = [
  { value: "1,8", unit: "mln PLN", label: "średnia wartość sprzedanej nieruchomości" },
  { value: "2,4", unit: "mies.", label: "średni czas od publikacji do aktu notarialnego" },
  { value: "640", unit: "+", label: "zamkniętych transakcji" },
  { value: "+6", unit: "%", label: "średnio powyżej wyceny wyjściowej dzięki home stagingowi" },
];

export type Silhouette = "skyline" | "house" | "interior";

export type Listing = {
  id: string;
  city: "Gdańsk" | "Gdynia" | "Sopot";
  area: string;
  title: string;
  price: string;
  m2: number;
  rooms: number;
  floor: string;
  year: number;
  badge?: string;
  silhouette: Silhouette;
  warm?: boolean;
};

export const listings: Listing[] = [
  { id: "1", city: "Gdynia", area: "Orłowo", title: "Apartament z tarasem nad klifem", price: "3 450 000 PLN", m2: 124, rooms: 5, floor: "4/4", year: 2024, badge: "Perełka", silhouette: "skyline" },
  { id: "2", city: "Sopot", area: "Dolny Sopot", title: "Kamienica, piętro z widokiem na molo", price: "2 890 000 PLN", m2: 118, rooms: 4, floor: "3/4", year: 1906, badge: "Nowość", silhouette: "interior", warm: true },
  { id: "3", city: "Gdańsk", area: "Oliwa", title: "Dom z ogrodem przy parku", price: "4 200 000 PLN", m2: 236, rooms: 6, floor: "—", year: 2019, silhouette: "house" },
  { id: "4", city: "Gdańsk", area: "Główne Miasto", title: "Loft nad Motławą", price: "1 980 000 PLN", m2: 86, rooms: 3, floor: "5/6", year: 2022, silhouette: "skyline", warm: true },
  { id: "5", city: "Gdynia", area: "Kamienna Góra", title: "Modernistyczna willa, cały parter", price: "2 650 000 PLN", m2: 142, rooms: 5, floor: "0/2", year: 1937, badge: "Perełka", silhouette: "house", warm: true },
  { id: "6", city: "Sopot", area: "Kamienny Potok", title: "Penthouse z sauną i dwoma tarasami", price: "5 100 000 PLN", m2: 168, rooms: 5, floor: "6/6", year: 2025, silhouette: "interior" },
];

export const services = [
  { title: "Sprzedaż", text: "Pełna obsługa: od wyceny po przekazanie kluczy.", icon: "home" },
  { title: "Wynajem", text: "Weryfikujemy najemców, przygotowujemy umowy i protokoły.", icon: "key" },
  { title: "Home staging", text: "Aranżacja wnętrz pod zdjęcia i prezentacje, zwykle w 3–5 dni.", icon: "sofa" },
  { title: "Fotografia", text: "Sesja wnętrz, zdjęcia z drona i ujęcia o złotej godzinie.", icon: "camera" },
  { title: "Spacery 3D", text: "Wirtualna prezentacja w 4K dla kupujących spoza Trójmiasta.", icon: "cube" },
  { title: "Finansowanie", text: "Porównujemy oferty banków i prowadzimy wniosek kredytowy.", icon: "bank" },
  { title: "Remonty", text: "Sprawdzone ekipy do odświeżenia przed sprzedażą.", icon: "brush" },
  { title: "Warunki", text: "Przejrzyste prowizje, bez ukrytych opłat.", icon: "doc" },
] as const;

export const posts = [
  { date: "2026-09-15", tag: "Rynek", title: "Jesień na rynku premium: co się sprzedaje szybciej, a co dłużej czeka", excerpt: "Porównaliśmy czas sprzedaży apartamentów przy plaży i domów w Małym Kacku. Różnica nas zaskoczyła.", silhouette: "skyline" as Silhouette },
  { date: "2026-09-02", tag: "Poradnik", title: "Pięć rzeczy, które warto zrobić przed sesją zdjęciową", silhouette: "interior" as Silhouette, warm: true },
  { date: "2026-08-21", tag: "Okolica", title: "Kaszuby dla mieszkańców Trójmiasta: dom 40 minut od biura", silhouette: "house" as Silhouette },
  { date: "2026-08-05", tag: "Za granicą", title: "Apartament na Costa Blanca: koszty, podatki i formalności", silhouette: "skyline" as Silhouette, warm: true },
];

export const ratings = [
  { label: "Obsługa", value: 5.0 },
  { label: "Wiedza o rynku", value: 4.9 },
  { label: "Jakość ofert", value: 4.8 },
  { label: "Prowizje", value: 4.5 },
];

export const testimonials = [
  { quote: "Zanim ktokolwiek zobaczył mieszkanie, wiedzieliśmy, kto będzie na nie patrzył i dlaczego. Sprzedaż zajęła siedem tygodni.", who: "Opinia przykładowa · sprzedaż apartamentu, Gdynia Orłowo" },
  { quote: "Home staging kosztował mniej niż jedna obniżka ceny, a zdjęcia zrobiły całą robotę.", who: "Opinia przykładowa · sprzedaż domu, Sopot Kamienny Potok" },
];
