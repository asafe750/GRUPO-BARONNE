"use client";

import { motion, useInView } from "framer-motion";
import { Boxes, FlaskConical, Truck } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const cargoTypes = [
  {
    icon: Truck,
    title: "Lotação",
    description: "Carga completa e exclusiva, o caminhão sai dedicado apenas à sua operação."
  },
  {
    icon: Boxes,
    title: "Fracionado",
    description: "Volumes menores compartilhando rota, com custo proporcional ao que você envia."
  },
  {
    icon: FlaskConical,
    title: "Químico",
    description: "Transporte de cargas químicas com os cuidados e o manuseio que o material exige."
  }
];

export function TiposDeCarga() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="tipos-de-carga"
      aria-labelledby="tipos-de-carga-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow relative isolate overflow-hidden bg-black px-5 py-12 md:px-8 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(126,211,33,0.08),transparent_24rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Tipos de Carga</SectionLabel>
        <h2
          id="tipos-de-carga-title"
          className="mt-4 max-w-4xl font-heading text-[40px] font-black uppercase leading-none text-white md:text-6xl"
        >
          Carga certa, no transporte certo.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
          Atendemos diferentes perfis de operação logística.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {cargoTypes.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="interactive-card rounded-2xl border border-zinc-800 bg-zinc-900 p-4 md:p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-green/10 text-brand-interactive md:h-12 md:w-12">
                <Icon aria-hidden="true" className="h-5 w-5 md:h-[23px] md:w-[23px]" />
              </span>
              <h3 className="mt-4 font-heading text-2xl font-black uppercase leading-none text-white md:mt-6 md:text-3xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-800 border-l-brand-green bg-zinc-900 p-5 text-base leading-8 text-white md:p-6 md:text-lg">
          Não encontrou seu tipo de carga?{" "}
          <strong className="font-extrabold text-brand-accent">
            Transportamos todo tipo de carga.
          </strong>{" "}
          Fale com a gente e monte sua cotação.
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/5571999990385?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-interactive focus:outline-none focus:ring-4 focus:ring-brand-interactive/25 sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Faça Sua Cotação!
          </a>
        </div>
      </div>
    </motion.section>
  );
}
