"use client";

import { motion, useInView } from "framer-motion";
import { BadgeCheck, Handshake, Trophy } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ABOUT_IMAGE } from "@/lib/constants";

const badges = [
  { icon: BadgeCheck, label: "[ CERTIFICAÇÃO A PREENCHER ]" },
  { icon: Handshake, label: "[ PARCEIRO A PREENCHER ]" },
  { icon: Trophy, label: "[ RECONHECIMENTO A PREENCHER ]" }
];

export function About() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="sobre"
      aria-labelledby="sobre-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 p-6 shadow-2xl md:p-8">
          <Image
            src={ABOUT_IMAGE}
            alt="Operação logística do Grupo Baronne em Camaçari BA"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.86),rgba(0,0,0,0.75))]" />
          <p className="font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-accent">
            Quem Somos
          </p>
          <h2
            id="sobre-title"
            className="mt-4 max-w-3xl font-heading text-5xl font-black uppercase leading-[0.92] text-white md:text-6xl"
          >
            5 anos movendo operações com força e compromisso.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-zinc-300 md:text-lg">
            <p>
              Com base operacional em Camaçari BA, o Grupo Baronne atua no transporte de cargas em nível
              nacional, atendendo empresas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul com
              segurança, compromisso e eficiência logística.
            </p>
            <p>
              Também fornecemos paletes PBR certificados para empresas que precisam de padrão, escala e
              previsibilidade. Em 5 anos de mercado, construímos uma rotina marcada por pontualidade,
              padrão técnico e compromisso com o cliente.
            </p>
            <p>
              Nossa estrutura atende empresas que valorizam previsibilidade. Da solicitação ao destino,
              a comunicação é próxima, o atendimento é direto e a execução segue o ritmo de quem não pode
              parar.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 border-l-brand-green bg-zinc-900/80 p-6 shadow-2xl md:p-8">
          <p className="font-heading text-2xl font-black uppercase text-white">
            Autoridade em construção
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Espaços preparados para inserir documentos, selos e parceiros após a validação comercial.
          </p>
          <div className="mt-7 grid gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="placeholder-dash flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-accent">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="text-sm font-semibold italic tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
