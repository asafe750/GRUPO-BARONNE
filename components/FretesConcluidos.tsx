"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const freightImages = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=85",
    alt: "Transporte de carga do Grupo Baronne com caminhão em operação no Brasil"
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    alt: "Caminhão de frete do Grupo Baronne rodando em estrada brasileira"
  },
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=85",
    alt: "Operação de carga e logística do Grupo Baronne em armazém"
  },
  {
    src: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1000&q=85",
    alt: "Frete rodoviário do Grupo Baronne em rota nacional"
  },
  {
    src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=85",
    alt: "Entrega de carga do Grupo Baronne com operação logística"
  },
  {
    src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85",
    alt: "Caminhão de carga do Grupo Baronne em rodovia durante frete"
  }
];

const loopImages = [...freightImages, ...freightImages];

export function FretesConcluidos() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="fretes"
      aria-labelledby="fretes-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="section-flow section-glow-top-left overflow-hidden bg-black px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Fretes Concluídos</SectionLabel>
        <h2
          id="fretes-title"
          className="mt-4 max-w-4xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Carga entregue. Compromisso cumprido.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
          Conheça alguns dos fretes realizados pelo Grupo Baronne em diferentes regiões do Brasil.
        </p>
      </div>

      <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]">
        <div className="freight-marquee flex w-max gap-5 pr-5">
          {loopImages.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className="interactive-card relative h-64 w-[78vw] max-w-[28rem] shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl md:h-80 md:w-[30rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 30rem, 78vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />
              <span className="placeholder-dash absolute bottom-5 left-5 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] backdrop-blur">
                [ FOTO REAL A ADICIONAR ]
              </span>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
