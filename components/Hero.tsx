"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import { HERO_IMAGE, WHATSAPP } from "@/lib/constants";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.22
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Grupo Baronne transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul e paletes PBR em Camaçari BA"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-5 py-28 md:px-8"
    >
      <Image
        src={HERO_IMAGE}
        alt="Caminhão em rodovia à noite representando transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul pelo Grupo Baronne"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/70 via-black/78 to-[#0a1e0a]/85" />
      <div className="industrial-grid absolute inset-0 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl pt-12"
      >
        <motion.p
          variants={item}
          className="mb-5 font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-accent"
        >
          Transporte nacional e Paletes PBR
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-4xl font-heading text-[48px] font-black uppercase leading-[0.88] tracking-normal text-white sm:text-[58px] lg:text-[80px]"
        >
          A força que move o Brasil.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-lg font-medium leading-8 text-zinc-300 md:text-xl"
        >
          Transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul e paletes PBR
          certificados com base em Camaçari BA.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP.general}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-green px-7 text-sm font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-brand-accent focus:outline-none focus:ring-4 focus:ring-brand-green/25"
          >
            <MessageCircle aria-hidden="true" size={19} />
            Fale pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-brand-green hover:text-brand-accent"
          >
            Conheça nossos serviços
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção sobre"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-400 md:inline-flex"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/30 backdrop-blur"
        >
          <ArrowDown aria-hidden="true" size={20} />
        </motion.span>
      </motion.a>
    </section>
  );
}
