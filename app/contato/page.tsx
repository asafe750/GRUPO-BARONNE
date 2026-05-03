import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Baronne pelo WhatsApp ou Instagram para transporte, armazenagem e paletes.",
  alternates: { canonical: "/contato" }
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos falar sobre sua operação."
        text="Envie uma mensagem com sua demanda e a equipe Baronne retorna pelo WhatsApp com o atendimento certo."
      />

      <MotionSection className="px-5 pb-24 pt-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ContactForm />
        </div>
      </MotionSection>
    </>
  );
}
