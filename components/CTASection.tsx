"use client";

import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import { useRef } from "react";
import { COMPANY, WHATSAPP } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function CTASection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="contato"
      aria-labelledby="contato-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow section-glow-top-right bg-black px-4 py-10 md:px-8 md:py-24"
    >
      <div className="mx-auto overflow-hidden rounded-[1.5rem] border border-brand-green/25 bg-gradient-to-br from-[#0d371b] via-[#0f2415] to-black p-5 shadow-glow md:rounded-[2rem] md:p-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div>
            <h2
              id="contato-title"
              className="font-heading text-[36px] font-black uppercase leading-none text-white sm:text-[42px] md:text-7xl"
            >
              Pronto para mover sua carga?
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-200 md:mt-5 md:text-base md:leading-8">
              Fale com o Grupo Baronne e receba um atendimento direto para transporte de cargas ou
              fornecimento de paletes PBR certificados.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap lg:flex-col lg:items-start xl:flex-row xl:items-center">
            <a
              href={WHATSAPP.general}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-extrabold text-black shadow-[0_18px_50px_rgba(126,211,33,0.22)] transition hover:bg-brand-interactive sm:w-64 sm:whitespace-nowrap"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              Faça Sua Cotação!
            </a>
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm font-extrabold text-white transition hover:border-brand-interactive hover:text-brand-interactive sm:w-64"
            >
              <Instagram aria-hidden="true" size={20} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
