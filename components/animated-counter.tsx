"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  label: string;
  value: number;
  icon: LucideIcon;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ label, value, icon: Icon, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.36 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let frame = 0;
    const frames = 72;
    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / frames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible, value]);

  return (
    <motion.div
      ref={ref}
      className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.58 }}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-baronne-forest text-baronne-lime">
          <Icon className="h-6 w-6" />
        </span>
        <span className="text-sm font-bold text-white/60">{label}</span>
      </div>
      <div className="mt-6 text-5xl font-black tracking-normal text-white">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </div>
    </motion.div>
  );
}
