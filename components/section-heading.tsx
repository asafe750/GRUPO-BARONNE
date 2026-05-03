"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xs font-black uppercase tracking-[0.22em] text-baronne-lime">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">{text}</p>}
    </motion.div>
  );
}
