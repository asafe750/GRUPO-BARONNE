"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP } from "@/lib/constants";

const truckImage =
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=85";

const palletsImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-7 w-7 text-brand-interactive" aria-hidden="true">
      <path
        d="M32 7 52 15v15c0 13.5-8.4 22.5-20 27-11.6-4.5-20-13.5-20-27V15l20-8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="m22 32 7 7 14-16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

const cityPills = ["Camaçari", "Mata de São João", "Salvador", "Simões Filho", "Lauro de Freitas"];

export function TransportSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="transporte"
      aria-labelledby="transporte-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow relative isolate overflow-hidden bg-black px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(34,197,94,0.1),transparent_24rem)]" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel visible={inView}>Transporte de Cargas</SectionLabel>
          <h2
            id="transporte-title"
            className="mt-4 max-w-3xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
          >
            Do Nordeste ao Sul do Brasil, sua carga chega.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            Com base operacional em Camaçari BA, o Grupo Baronne realiza transporte de cargas em todo
            o território nacional. Atendemos empresas em São Paulo, Rio de Janeiro, Brasília, Belo
            Horizonte, Fortaleza, Recife, Salvador, Feira de Santana, Manaus, Curitiba, Porto Alegre,
            Goiânia e demais regiões.
          </p>

          <div className="interactive-card mt-8 rounded-2xl border border-green-500 bg-zinc-900 p-6 shadow-[0_22px_70px_rgba(126,211,33,0.2)]">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-green/10">
                <ShieldIcon />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-black uppercase leading-none text-white">
                  Garantia Minha Carga Segura
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Toda carga transportada pelo Grupo Baronne conta com cobertura de seguro durante todo
                  o trajeto, do ponto de origem ao destino final.
                </p>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP.transport}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-interactive"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Solicitar frete pelo WhatsApp
          </a>
        </div>

        <div className="interactive-card relative min-h-[22rem] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl md:min-h-[31rem]">
          <Image
            src={truckImage}
            alt="Caminhão em rodovia para transporte de cargas do Grupo Baronne"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.68),rgba(0,0,0,0.38))]" />
          <span className="placeholder-dash absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] backdrop-blur">
            [ FOTO REAL A ADICIONAR ]
          </span>
        </div>
      </div>
    </motion.section>
  );
}

export function PalletsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="paletes"
      aria-labelledby="paletes-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow relative isolate overflow-hidden bg-black px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_12%,rgba(34,197,94,0.1),transparent_24rem)]" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="interactive-card relative min-h-[22rem] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl md:min-h-[31rem]">
          <Image
            src={palletsImage}
            alt="Estoque de paletes PBR certificados em Camaçari BA"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.68),rgba(0,0,0,0.42))]" />
          <span className="placeholder-dash absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] backdrop-blur">
            [ FOTO DO ESTOQUE A ADICIONAR ]
          </span>
        </div>

        <div>
          <SectionLabel visible={inView}>Paletes PBR Certificados</SectionLabel>
          <h2
            id="paletes-title"
            className="mt-4 max-w-3xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
          >
            Estoque próprio. Entrega garantida.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            Nosso estoque de paletes PBR certificados está em Camaçari BA. Quantidade que você
            precisar, entregamos.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {cityPills.map((city) => (
              <span
                key={city}
                className="rounded-full border border-brand-green/50 bg-brand-green/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-brand-accent"
              >
                {city}
              </span>
            ))}
          </div>
          <a
            href={WHATSAPP.pallets}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-interactive"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            Pedir paletes pelo WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
}
