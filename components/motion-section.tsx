"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & HTMLMotionProps<"section">;

export function MotionSection({ children, className = "", delay = 0, ...props }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
