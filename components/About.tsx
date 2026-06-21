"use client";

import { motion, useInView } from "framer-motion";
import { CalendarClock, Handshake, MapPin, Truck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { ABOUT_IMAGE } from "@/lib/constants";

const aboutStats = [
  { icon: CalendarClock, value: "5 ANOS", label: "de mercado" },
  { icon: Truck, value: "+600", label: "entregas realizadas" },
  { icon: Handshake, value: "+30", label: "clientes ativos" },
  { icon: MapPin, value: "5 REGIÕES", label: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul" }
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
      className="section-flow section-glow-bottom-right bg-black px-5 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div className="interactive-card relative isolate overflow-hidden rounded-2xl border border-zinc-800 p-6 shadow-2xl md:p-8">
          <Image
            src={ABOUT_IMAGE}
            alt="Operação logística do Grupo Baronne em Camaçari BA"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(0,0,0,0.86),rgba(0,0,0,0.75))]" />
          <SectionLabel visible={inView}>Quem Somos</SectionLabel>
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

        <div className="interactive-card rounded-2xl border border-zinc-800 border-l-brand-green bg-zinc-900/80 p-6 shadow-2xl md:p-8">
          <p className="font-heading text-2xl font-black uppercase text-white">
            Baronne em Números
          </p>
          <div className="mt-7 grid gap-4">
            {aboutStats.map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="interactive-card flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/45 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-interactive">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span>
                  <span className="block font-heading text-3xl font-black uppercase leading-none text-white">
                    {value}
                  </span>
                  <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
