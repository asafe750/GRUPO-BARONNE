"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const freightImages = [
  {
    src: "/images/prova-social-1.jpg",
    alt: "Prova social de frete realizado pelo Grupo Baronne",
    route: "Lugar X Lugar"
  },
  {
    src: "/images/prova-social-2.jpg",
    alt: "Registro de entrega de carga realizada pelo Grupo Baronne",
    route: "Lugar X Lugar"
  },
  {
    src: "/images/prova-social-3.jpg",
    alt: "Prova social de transporte concluído pelo Grupo Baronne",
    route: "Lugar X Lugar"
  },
  {
    src: "/images/prova-social-4.jpg",
    alt: "Frete concluído com caminhão do Grupo Baronne",
    route: "Lugar X Lugar"
  },
  {
    src: "/images/prova-social-5.jpg",
    alt: "Entrega bem sucedida realizada pelo Grupo Baronne",
    route: "Lugar X Lugar"
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
      className="section-flow section-glow-top-left overflow-hidden bg-black px-5 py-12 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Fretes Concluídos</SectionLabel>
        <h2
          id="fretes-title"
          className="mt-4 max-w-4xl font-heading text-[40px] font-black uppercase leading-none text-white md:text-6xl"
        >
          Carga entregue. Compromisso cumprido.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
          Conheça alguns dos fretes realizados pelo Grupo Baronne em diferentes regiões do Brasil.
        </p>
      </div>

      <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)] md:mt-12">
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.76))]" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-heading text-2xl font-black uppercase leading-none text-white">
                    {image.route}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-accent">
                    Frete concluído
                  </p>
                </div>
                <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-lg bg-black/45 backdrop-blur">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Grupo Baronne"
                    fill
                    sizes="80px"
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
