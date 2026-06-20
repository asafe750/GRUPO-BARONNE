import { About } from "@/components/About";
import { CoverageMap } from "@/components/CoverageMap";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Numbers } from "@/components/Numbers";
import { WhyBaronne } from "@/components/WhyBaronne";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Numbers />
        <WhyBaronne />
        <CoverageMap />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
