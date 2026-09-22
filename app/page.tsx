import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Stats from "@/components/Stats";
import Listings from "@/components/Listings";
import Developer from "@/components/Developer";
import Services from "@/components/Services";
import Journal from "@/components/Journal";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Steps />
        <Stats />
        <Listings />
        <Developer />
        <Services />
        <Journal />
        <Reviews />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
