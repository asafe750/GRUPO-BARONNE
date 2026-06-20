import { About } from "@/components/About";
import { PalletsSection, TransportSection } from "@/components/CoverageMap";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FretesConcluidos } from "@/components/FretesConcluidos";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TransportSection />
        <FretesConcluidos />
        <About />
        <PalletsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
