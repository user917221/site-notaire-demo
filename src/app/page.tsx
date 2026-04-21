import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import Credentials from "@/components/sections/Credentials";
import Services from "@/components/sections/Services";
import Specialites from "@/components/sections/Specialites";
import Manifest from "@/components/sections/Manifest";
import Equipe from "@/components/sections/Equipe";
import Temoignages from "@/components/sections/Temoignages";
import DecodagesPreview from "@/components/sections/DecodagesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <StatsBand />
        <Services />
        <Specialites />
        <Manifest />
        <Equipe />
        <Credentials />
        <Temoignages />
        <DecodagesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
