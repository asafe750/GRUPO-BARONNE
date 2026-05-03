"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";
import { AnimatedHeadline } from "./animated-headline";
import { HeroAtmosphere } from "./hero-atmosphere";
import { whatsappUrl } from "./site-data";

export function HomeHero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.28]);

  return (
    <section ref={ref} className="hero-clip relative flex min-h-screen items-center overflow-hidden px-5 py-28 md:px-8">
      <motion.div
        className="image-fallback absolute inset-0"
        style={{
          y,
          opacity,
          backgroundImage:
            "linear-gradient(110deg, rgba(10, 10, 10, 0.86) 0%, rgba(13, 31, 14, 0.72) 52%, rgba(10, 10, 10, 0.58) 100%), url('/images/caminhao-paletes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <motion.p
            className="text-xs font-black uppercase tracking-[0.24em] text-baronne-lime"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Grupo Baronne
          </motion.p>
          <AnimatedHeadline
            text="Transporte e Paletes com quem você pode confiar"
            className="mt-4 max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          />
          <motion.p
            className="mt-7 max-w-2xl text-base font-semibold leading-8 text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
          >
            Logística, armazenagem e soluções completas em paletes para empresas que exigem agilidade, padrão e compromisso.
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-[8px] bg-baronne-lime px-7 py-4 text-base font-black text-baronne-black shadow-glow"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.04, 1] }}
            transition={{
              opacity: { delay: 1.45, duration: 0.5 },
              y: { delay: 1.45, duration: 0.5 },
              scale: { delay: 1.9, duration: 1.7, repeat: Infinity, repeatDelay: 1.2 }
            }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </motion.a>
        </div>

        <motion.div
          className="hidden rounded-[8px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {["Carga", "Paletes", "Cross Dock", "Armazenagem"].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-baronne-black/60 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-baronne-lime">{item}</p>
                <div className="mt-5 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-baronne-lime"
                    initial={{ width: 0 }}
                    animate={{ width: item === "Paletes" ? "92%" : item === "Carga" ? "84%" : "76%" }}
                    transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
