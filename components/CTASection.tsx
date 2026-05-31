"use client";

import { motion, useInView } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { useRef } from "react";
import { COMPANY, WHATSAPP } from "@/lib/constants";

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
      className="px-5 py-24 md:px-8"
    >
      <div className="mx-auto overflow-hidden rounded-[2rem] border border-brand-green/25 bg-gradient-to-br from-[#0d371b] via-[#0f2415] to-black p-8 shadow-glow md:p-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2
              id="contato-title"
              className="font-heading text-5xl font-black uppercase leading-none text-white md:text-7xl"
            >
              Pronto para mover sua carga?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-100/75">
              Fale com o Grupo Baronne e receba um atendimento direto para transporte de cargas ou
              fornecimento de paletes PBR certificados.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={WHATSAPP.general}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-extrabold text-black transition hover:bg-brand-accent"
            >
              <MessageCircle aria-hidden="true" size={20} />
              {COMPANY.phoneDisplay} — Fale agora
            </a>
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm font-extrabold text-white transition hover:border-brand-green hover:text-brand-green"
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
