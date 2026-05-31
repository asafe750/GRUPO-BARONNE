"use client";

import { motion, useInView } from "framer-motion";
import { BadgeCheck, Handshake, Trophy } from "lucide-react";
import { useRef } from "react";

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
        <div>
          <p className="font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-green">
            Quem Somos
          </p>
          <h2
            id="sobre-title"
            className="mt-4 max-w-3xl font-heading text-5xl font-black uppercase leading-[0.92] text-white md:text-6xl"
          >
            5 anos movendo a Bahia com força e compromisso.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-zinc-300 md:text-lg">
            <p>
              O Grupo Baronne nasceu na Bahia para atender empresas que precisam de uma operação direta,
              confiável e sem rodeios. Atuamos em duas frentes essenciais para a cadeia produtiva:
              transporte de cargas e fornecimento de paletes PBR certificados.
            </p>
            <p>
              Em 5 anos de mercado, construímos uma rotina marcada por pontualidade, padrão técnico e
              compromisso com o cliente. Cada entrega e cada palete carregam o mesmo princípio: fazer o
              que foi combinado, com qualidade e velocidade.
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
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green">
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
