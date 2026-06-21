"use client";

import { motion, useInView } from "framer-motion";
import { CalendarClock, ClipboardList, MapPinned, MessageSquareText } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP } from "@/lib/constants";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Envie os dados da carga",
    description: "Fale com a gente pelo WhatsApp e conte o que precisa transportar."
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Receba sua cotação",
    description: "Retorno rápido com valores e prazos para sua operação."
  },
  {
    number: "03",
    icon: CalendarClock,
    title: "Coleta agendada",
    description: "Organizamos a coleta no melhor horário para sua empresa."
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Entrega com acompanhamento",
    description: "Sua carga é acompanhada do ponto de origem ao destino final."
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
      className="relative isolate overflow-hidden bg-black px-5 py-24 md:px-8"
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
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="interactive-card relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-brand-green/45 bg-black font-heading text-3xl font-black text-brand-interactive shadow-[0_0_42px_rgba(126,211,33,0.18)]">
                    {number}
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-interactive">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-3xl font-black uppercase leading-none text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <a
          href={WHATSAPP.quote}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-extrabold text-black transition hover:bg-brand-interactive"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          Faça Sua Cotação!
        </a>
      </div>
    </motion.section>
  );
}
