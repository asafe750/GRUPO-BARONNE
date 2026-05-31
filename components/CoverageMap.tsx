"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
      className="px-5 py-24 md:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
        <div>
          <h2
            id="atuacao-title"
            className="font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
          >
            Onde atuamos
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
            Atendemos todo o estado da Bahia. <span className="italic text-brand-green">[ CIDADES A PREENCHER ]</span>
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
            A operação foi desenhada para conectar fornecedores, centros de distribuição e clientes com
            agilidade. Salvador é o ponto de referência comercial, com cobertura preparada para expandir
            conforme a demanda das rotas.
          </p>
          <code className="mt-7 block rounded-2xl border border-dashed border-brand-green/45 bg-brand-green/10 px-5 py-4 text-sm italic text-emerald-100">
            {"/* [ Adicionar cidades após reunião com cliente ] */"}
          </code>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-2xl md:p-8">
          <svg
            viewBox="0 0 560 520"
            role="img"
            aria-labelledby="bahia-map-title bahia-map-desc"
            className="h-auto w-full"
          >
            <title id="bahia-map-title">Mapa simplificado da Bahia</title>
            <desc id="bahia-map-desc">
              Mapa estilizado indicando atuação do Grupo Baronne em todo o estado da Bahia, com ponto em Salvador.
            </desc>
            <defs>
              <linearGradient id="mapGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4ade00" stopOpacity="0.22" />
              </linearGradient>
            </defs>
            <path
              d="M245 34 318 61 352 103 402 103 436 142 421 195 464 246 431 294 454 353 398 396 338 407 304 463 240 486 197 442 139 448 107 392 68 363 94 305 68 252 111 206 104 149 157 118 180 67Z"
              fill="rgba(34,197,94,0.09)"
              stroke="url(#mapGlow)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M124 349c43-35 83-58 130-65 60-8 101 10 154-28"
              fill="none"
              stroke="rgba(34,197,94,0.32)"
              strokeDasharray="8 12"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <g transform="translate(401 330)">
              <motion.circle
                r="34"
                fill="#22c55e"
                opacity="0.16"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.12, 0.28, 0.12] }}
                transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              />
              <circle r="9" fill="#22c55e" />
              <text x="18" y="6" fill="#ffffff" fontSize="20" fontWeight="800">
                Salvador
              </text>
            </g>
          </svg>
        </div>
      </div>
    </motion.section>
  );
}
