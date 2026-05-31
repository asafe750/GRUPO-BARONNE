"use client";

import { motion, useInView } from "framer-motion";
import { Clock3, MapPinned, MessageCircle, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Paletes 100% PBR",
    text: "Certificação, qualidade garantida e padrão pronto para operação."
  },
  {
    icon: Clock3,
    title: "Pontualidade Garantida",
    text: "Entrega no prazo, acompanhamento claro e compromisso com cada rota."
  },
  {
    icon: MessageCircle,
    title: "Atendimento Direto",
    text: "Sem intermediários. Você fala com quem resolve e acompanha de perto."
  },
  {
    icon: MapPinned,
    title: "[ DIFERENCIAL A PREENCHER ]",
    text: "Espaço reservado para inserir um diferencial validado em reunião comercial.",
    placeholder: true
  }
];

export function WhyBaronne() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="diferenciais-title"
          className="max-w-4xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Por que escolher o Grupo Baronne?
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text, placeholder }) => (
            <article
              key={title}
              className={`card-hover rounded-2xl border bg-zinc-900 p-6 ${
                placeholder ? "border-dashed border-brand-green/45" : "border-zinc-800"
              }`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green">
                <Icon aria-hidden="true" size={23} />
              </span>
              <h3
                className={`mt-6 font-heading text-3xl font-black uppercase leading-none ${
                  placeholder ? "italic text-brand-green" : "text-white"
                }`}
              >
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
