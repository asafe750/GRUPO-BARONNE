import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { MotionSection } from "@/components/motion-section";
import { ParallaxPanel } from "@/components/parallax-panel";
import { SectionHeading } from "@/components/section-heading";
import { Timeline, ValuesGrid } from "@/components/about-sections";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, missão, visão e valores do Grupo Baronne Transporte e Paletes.",
  alternates: { canonical: "/sobre" }
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre o Grupo Baronne"
        title="Uma operação feita para entregar confiança."
        text="Atuamos com transporte, logística e paletes para empresas que precisam de uma parceira ágil, séria e comprometida com o resultado."
      />

      <MotionSection className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Institucional"
            title="Baronne é presença operacional, não promessa distante."
            text="O Grupo Baronne Transporte e Paletes nasceu para atender empresas que dependem de logística funcional, paletes bem preparados e comunicação direta. Nosso trabalho une transporte de cargas, armazenagem, cross dock, fabricação, compra, venda e reforma de paletes em uma estrutura pensada para reduzir atrasos, proteger mercadorias e simplificar a rotina dos clientes."
          />
          <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
            <p className="text-lg font-bold leading-9 text-white/70">
              Com 10 anos de experiência, a Baronne construiu sua reputação em cima de atendimento próximo, compromisso com prazos e soluções práticas para o dia a dia de empresas que precisam seguir produzindo, vendendo e entregando.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Direção"
            title="Missão, visão e valores."
            text="Princípios simples, aplicados com disciplina em cada atendimento."
            align="center"
          />
          <div className="mt-12">
            <ValuesGrid />
          </div>
        </div>
      </MotionSection>

      <ParallaxPanel image="/images/galeria-paletes.jpg" className="min-h-[52vh]">
        <div className="mx-auto flex min-h-[52vh] max-w-7xl items-center px-5 py-20 md:px-8">
          <h2 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
            A história da Baronne acompanha a evolução das operações que atende.
          </h2>
        </div>
      </ParallaxPanel>

      <MotionSection className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="História"
            title="Uma trajetória construída no trabalho diário."
            text="Cada fase ampliou a capacidade de atendimento e fortaleceu a entrega de valor para empresas parceiras."
          />
          <Timeline />
        </div>
      </MotionSection>
    </>
  );
}
