import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { MotionSection } from "@/components/motion-section";
import { ParallaxPanel } from "@/components/parallax-panel";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import { StatsGrid } from "@/components/stats-grid";
import { whatsappUrl } from "@/components/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Grupo Baronne Transporte e Paletes: transporte, armazenagem, cross dock, fábrica, compra, venda e reforma de paletes.",
  alternates: { canonical: "/" }
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <MotionSection className="px-5 py-24 md:px-8" id="servicos">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Soluções integradas"
            title="Serviços para manter sua operação no ritmo certo."
            text="Da movimentação de cargas à produção e recuperação de paletes, a Baronne entrega suporte completo para empresas que precisam de logística simples, direta e confiável."
          />
          <ServicesGrid />
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Números"
            title="Experiência que aparece no fluxo da sua empresa."
            text="Indicadores construídos com operação real, atendimento próximo e compromisso com entregas que não deixam o cliente no escuro."
          />
          <StatsGrid />
        </div>
      </MotionSection>

      <ParallaxPanel image="/images/paletes-parede.jpg" className="min-h-[72vh]">
        <div className="mx-auto flex min-h-[72vh] max-w-7xl items-center px-5 py-24 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-baronne-lime">Paletes com padrão</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Estrutura, escala e cuidado técnico em cada palete movimentado.
            </h2>
            <p className="mt-6 text-base font-semibold leading-8 text-white/70 sm:text-lg">
              A operação une fabricação, reforma, compra, venda e logística para reduzir gargalos e dar mais previsibilidade ao seu negócio.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-[8px] bg-white px-6 py-4 text-sm font-black text-baronne-black transition hover:-translate-y-0.5 hover:bg-baronne-lime"
            >
              Fale com a Baronne
            </a>
          </div>
        </div>
      </ParallaxPanel>
    </>
  );
}
