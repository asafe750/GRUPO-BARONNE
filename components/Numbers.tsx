"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 5, suffix: " anos", label: "de mercado" },
  { value: null, text: "[ ? ]", label: "entregas realizadas — A PREENCHER" },
  { value: null, text: "[ ? ]", label: "clientes ativos — A PREENCHER" },
  { value: null, text: "Bahia", label: "estado inteiro atendido" }
];

function CounterValue({ value, suffix = "", text }: { value: number | null; suffix?: string; text?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || value === null) return;

    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value === null ? text : current}
      {value !== null ? suffix : null}
    </span>
  );
}

export function Numbers() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id="numeros"
      aria-labelledby="numeros-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-zinc-950 px-5 py-24 md:px-8"
    >
      <div className="industrial-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-green">
          Baronne em Números
        </p>
        <h2
          id="numeros-title"
          className="mt-4 font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Resultados que falam por si.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur"
            >
              <p className="font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl">
                <CounterValue value={metric.value} suffix={metric.suffix} text={metric.text} />
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
