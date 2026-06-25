"use client";

import { motion, useInView } from "framer-motion";
import { CalendarClock, Check, ClipboardList, MapPinned, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Envie os dados da carga",
    description: "Fale com a gente pelo WhatsApp e conte o que precisa transportar.",
    details: ["Remetente", "Destinatário", "Tipo de Carga", "Peso"]
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Receba sua cotação",
    description: "Retorno rápido com valores e prazos para sua operação.",
    details: ["Sem enrolação", "Preço competitivo", "Garantia inclusa"]
  },
  {
    number: "03",
    icon: CalendarClock,
    title: "Coleta agendada",
    description: "Organizamos a coleta no melhor horário para sua empresa.",
    details: ["Marcação de data", "Horário flexível", "De acordo com sua preferência"]
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Entrega com acompanhamento",
    description: "Sua carga é acompanhada do ponto de origem ao destino final.",
    details: ["Entrega segura", "Acompanhamento do começo ao fim", "Mais controle para sua operação"]
  }
];

export function ComoFunciona() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow relative isolate overflow-hidden bg-black px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(126,211,33,0.08),transparent_24rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Como Funciona</SectionLabel>
        <h2
          id="como-funciona-title"
          className="mt-4 max-w-4xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Do pedido à entrega, sem complicação.
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-zinc-800 lg:block" />
          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-4">
            {steps.map(({ number, icon: Icon, title, description, details }) => (
              <article
                key={number}
                className="interactive-card relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 md:p-6"
              >
                <div className="flex flex-nowrap items-center gap-3 md:gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-brand-green/45 bg-black font-heading text-2xl font-black text-brand-interactive shadow-[0_0_42px_rgba(126,211,33,0.18)] md:h-20 md:w-20 md:text-3xl">
                    {number}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-interactive md:h-12 md:w-12">
                    <Icon aria-hidden="true" className="h-5 w-5 md:h-[23px] md:w-[23px]" />
                  </span>
                </div>
                <h3 className="mt-6 overflow-visible break-normal font-heading text-lg font-black uppercase leading-none text-white md:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>
                {details ? (
                  <ul className="mt-3 grid gap-2 text-xs text-white md:text-sm">
                    {details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-green" />
                        <span className="break-normal">{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <a
          href={WHATSAPP.quote}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-extrabold text-black transition hover:bg-brand-interactive md:w-auto"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          Faça Sua Cotação!
        </a>
      </div>
    </motion.section>
  );
}
