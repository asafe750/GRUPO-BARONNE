"use client";

import { motion, useInView } from "framer-motion";
import { Boxes, Container, PackageCheck, Warehouse } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const cargoTypes = [
  { icon: Boxes, title: "[ TIPO DE CARGA A PREENCHER ]" },
  { icon: PackageCheck, title: "[ TIPO DE CARGA A PREENCHER ]" },
  { icon: Warehouse, title: "[ TIPO DE CARGA A PREENCHER ]" },
  { icon: Container, title: "[ TIPO DE CARGA A PREENCHER ]" }
];

export function TiposDeCarga() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="tipos-de-carga"
      aria-labelledby="tipos-de-carga-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden bg-black px-5 py-24 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(126,211,33,0.08),transparent_24rem)]" />

      <div className="mx-auto max-w-7xl">
        <SectionLabel visible={inView}>Tipos de Carga</SectionLabel>
        <h2
          id="tipos-de-carga-title"
          className="mt-4 max-w-4xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Carga certa, no transporte certo.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
          Atendemos diferentes perfis de operação logística.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cargoTypes.map(({ icon: Icon, title }, index) => (
            <article
              key={`${title}-${index}`}
              className="interactive-card rounded-2xl border border-dashed border-brand-green/45 bg-zinc-900/80 p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-interactive">
                <Icon aria-hidden="true" size={23} />
              </span>
              <h3 className="mt-6 font-heading text-3xl font-black uppercase leading-none text-zinc-400 italic">
                {title}
              </h3>
            </article>
          ))}
        </div>

        <div className="placeholder-dash mt-8 inline-flex rounded-2xl px-5 py-3 font-mono text-sm italic">
          {"/* [ Confirmar tipos de carga aceitos com o cliente ] */"}
        </div>
      </div>
    </motion.section>
  );
}
