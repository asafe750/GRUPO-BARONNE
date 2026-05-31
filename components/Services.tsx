"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { PALLET_IMAGE, WHATSAPP } from "@/lib/constants";

function TruckIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-brand-green" aria-hidden="true">
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

function PalletIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12 text-brand-green" aria-hidden="true">
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

export function Services() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="servicos"
      aria-label="Serviços do Grupo Baronne"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="px-5 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <article className="card-hover rounded-2xl border border-zinc-800 bg-zinc-900 p-7 md:p-9">
          <TruckIcon />
          <h2 className="mt-8 font-heading text-5xl font-black uppercase leading-none text-white">
            Transporte de Cargas
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-300">
            Operação de transporte para empresas que precisam de segurança, constância e entrega no
            prazo. Atendemos rotas na Bahia com comunicação direta, planejamento responsável e cuidado
            com cada etapa da movimentação.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <span className="placeholder-dash rounded-2xl px-4 py-3 text-sm font-semibold italic">
              [ REGIÕES A PREENCHER ]
            </span>
            <span className="placeholder-dash rounded-2xl px-4 py-3 text-sm font-semibold italic">
              [ TIPOS DE CARGA A PREENCHER ]
            </span>
          </div>
          <a
            href={WHATSAPP.transport}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-accent"
          >
            Solicitar frete pelo WhatsApp
          </a>
        </article>

        <article className="card-hover relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-7 md:p-9">
          <Image
            src={PALLET_IMAGE}
            alt="Paletes de madeira em armazém para venda de paletes PBR certificados na Bahia"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/88 to-black/72" />
          <div className="relative">
            <PalletIcon />
            <h2 className="mt-8 font-heading text-5xl font-black uppercase leading-none text-white">
              Paletes PBR Certificados
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-300">
              Paletes 100% PBR certificados, com fornecimento em escala, padrão de qualidade garantido
              e disponibilidade para empresas que precisam repor, ampliar ou padronizar sua operação.
            </p>
            <p className="mt-6 rounded-2xl border border-brand-green/35 bg-brand-green/10 px-5 py-4 font-heading text-2xl font-black uppercase text-brand-green">
              Quantidade que você precisar. Entregamos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["100% PBR", "Certificado", "Pronta Entrega"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-green/40 bg-brand-green/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={WHATSAPP.pallets}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-accent"
            >
              Pedir paletes pelo WhatsApp
            </a>
          </div>
        </article>
      </div>
    </motion.section>
  );
}
