import type { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDetails } from "@/components/service-details";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços do Grupo Baronne: transporte de cargas, armazenagem, cross dock, fábrica de paletes, compra e venda e reforma de paletes.",
  alternates: { canonical: "/servicos" }
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Tudo que sua operação precisa em transporte e paletes."
        text="Soluções conectadas para reduzir ruído, acelerar fluxos e manter sua empresa abastecida com suporte profissional."
      />

      <MotionSection className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Atuação"
            title="Blocos de serviço com execução objetiva."
            text="Cada frente foi desenhada para resolver uma parte crítica da rotina logística, com atendimento direto e foco no que sustenta a operação do cliente."
          />
          <div className="mt-12">
            <ServiceDetails />
          </div>
        </div>
      </MotionSection>
    </>
  );
}
