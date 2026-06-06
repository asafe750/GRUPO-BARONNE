"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PalletIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-brand-accent" aria-hidden="true">
      <path
        d="M10 22h44M10 34h44M10 46h44M16 18v32M32 18v32M48 18v32"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-brand-accent" aria-hidden="true">
      <path
        d="M8 18h31v24H8V18Zm31 8h9l8 9v7H39V26Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M18 46a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm29 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}

const cards = [
  {
    icon: PalletIcon,
    title: "Paletes PBR",
    text: "Fornecimento de paletes PBR certificados com base em Camaçari BA. Retirada no local ou entrega combinada.",
    tag: "[ CAMAÇARI, BA ]"
  },
  {
    icon: TruckIcon,
    title: "Transporte de Cargas",
    text: "Operamos rotas em todo o território nacional. Atendemos São Paulo, Rio de Janeiro, Brasília, Fortaleza, Recife, Belo Horizonte, Manaus, Curitiba e demais regiões do Brasil.",
    tag: "[ TODO O BRASIL ]"
  }
];

export function CoverageMap() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="atuacao"
      aria-labelledby="atuacao-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-black" />
      <svg
        viewBox="0 0 640 520"
        aria-hidden="true"
        className="absolute right-[-8rem] top-1/2 -z-10 hidden h-[34rem] -translate-y-1/2 lg:block"
      >
        <path
          d="M341 29 396 72 444 64 483 113 471 168 520 220 489 278 516 340 462 386 399 379 353 449 284 492 232 442 167 447 122 394 78 363 94 304 57 251 101 203 91 148 151 116 181 62 243 71Z"
          fill="none"
          stroke="rgba(74,222,0,0.1)"
          strokeLinejoin="round"
          strokeWidth="10"
        />
      </svg>
      <div className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.85)]" />

      <div className="mx-auto max-w-7xl">
        <h2
          id="atuacao-title"
          className="font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Onde atuamos
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map(({ icon: Icon, title, text, tag }) => (
            <article
              key={title}
              className="card-hover rounded-2xl border border-zinc-800 bg-zinc-900/90 p-7 shadow-2xl backdrop-blur md:p-9"
            >
              <Icon />
              <h3 className="mt-8 font-heading text-4xl font-black uppercase leading-none text-white md:text-5xl">
                {title}
              </h3>
              <p className="mt-6 text-base leading-8 text-zinc-300">{text}</p>
              <span className="mt-7 inline-flex rounded-full border border-brand-green/45 bg-brand-green/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-accent">
                {tag}
              </span>
            </article>
          ))}
        </div>

        <code className="mt-7 block rounded-2xl border border-dashed border-brand-green/45 bg-brand-green/10 px-5 py-4 text-sm italic text-brand-accent">
          {"/* [ Adicionar cidades e rotas após reunião com cliente ] */"}
        </code>
      </div>
    </motion.section>
  );
}
