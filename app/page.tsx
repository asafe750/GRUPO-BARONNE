import { About } from "@/components/About";
import { ComoFunciona } from "@/components/ComoFunciona";
import { PalletsSection, TransportSection } from "@/components/CoverageMap";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FretesConcluidos } from "@/components/FretesConcluidos";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TiposDeCarga } from "@/components/TiposDeCarga";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TransportSection />
        <TiposDeCarga />
        <ComoFunciona />
        <About />
        <FretesConcluidos />
        <PalletsSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
