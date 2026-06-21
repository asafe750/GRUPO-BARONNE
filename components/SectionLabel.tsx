"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  visible: boolean;
};

export function SectionLabel({ children, visible }: SectionLabelProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-accent"
    >
      {children}
    </motion.p>
  );
}
