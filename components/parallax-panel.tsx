"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxPanelProps = {
  image: string;
  children: ReactNode;
  className?: string;
};

export function ParallaxPanel({ image, children, className = "" }: ParallaxPanelProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="image-fallback absolute inset-[-14%]"
        style={{
          y,
          backgroundImage: `linear-gradient(120deg, rgba(13, 31, 14, 0.62), rgba(10, 10, 10, 0.72)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
