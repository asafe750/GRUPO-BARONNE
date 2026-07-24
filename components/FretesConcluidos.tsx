"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const freightImages = [
  {
    src: "/images/prova-social-1.jpg",
    alt: "Prova social de frete realizado pelo Grupo Baronne",
    route: "Camaçari BA para São Paulo SP"
  },
  {
    src: "/images/prova-social-2.jpg",
    alt: "Registro de entrega de carga realizada pelo Grupo Baronne",
    route: "Salvador BA para Recife PE"
  },
  {
    src: "/images/prova-social-3.jpg",
    alt: "Prova social de transporte concluído pelo Grupo Baronne",
    route: "Feira de Santana BA para Brasília DF"
  },
  {
    src: "/images/prova-social-4.jpg",
    alt: "Frete concluído com caminhão do Grupo Baronne",
    route: "Camaçari BA para Rio de Janeiro RJ"
  },
  {
    src: "/images/prova-social-5.jpg",
    alt: "Entrega bem sucedida realizada pelo Grupo Baronne",
    route: "Salvador BA para Fortaleza CE"
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
      className="section-flow section-glow-top-left overflow-hidden bg-black px-4 py-10 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Fretes Concluídos</SectionLabel>
        <h2
          id="fretes-title"
          className="mt-4 max-w-4xl font-heading text-[36px] font-black uppercase leading-none text-white sm:text-[42px] md:text-6xl"
        >
          Carga entregue. Compromisso cumprido.
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 md:mt-6 md:text-lg md:leading-8">
          Conheça alguns dos fretes realizados pelo Grupo Baronne em diferentes regiões do Brasil.
        </p>
      </div>

      <div className="mt-7 [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)] md:mt-12">
        <div className="freight-marquee flex w-max gap-4 pr-4 md:gap-5 md:pr-5">
          {loopImages.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className="interactive-card relative h-56 w-[82vw] max-w-[28rem] shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl md:h-80 md:w-[30rem]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 30rem, 78vw"
                quality={75}
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.76))]" />
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 md:inset-x-4 md:bottom-4 md:gap-4">
                <div>
                  <p className="font-heading text-xl font-black uppercase leading-[0.95] text-white md:text-2xl md:leading-none">
                    {image.route}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">
                    Frete concluído
                  </p>
                </div>
                <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded-lg bg-black/45 backdrop-blur md:h-12 md:w-20">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Grupo Baronne"
                    fill
                    sizes="80px"
                    quality={75}
                    loading="lazy"
                    className="object-contain p-1"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
