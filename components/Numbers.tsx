"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = {
  value: number | null;
  label: string;
  prefix?: string;
  suffix?: string;
  text?: string;
};

const metrics: Metric[] = [
  { value: 5, suffix: " anos", label: "de mercado" },
  { value: 600, prefix: "+", label: "entregas realizadas" },
  { value: 30, prefix: "+", label: "clientes ativos" },
  {
    value: 5,
    suffix: " regiões",
    label: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul"
  }
];

function CounterValue({
  value,
  active,
  prefix = "",
  suffix = "",
  text
}: {
  value: number | null;
  active: boolean;
  prefix?: string;
  suffix?: string;
  text?: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active || value === null) return;

    const controls = animate(0, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (latest) => setCurrent(Math.round(latest))
    });

    return () => controls.stop();
  }, [active, value]);

  return (
    <span>
      {value !== null ? prefix : null}
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
        <p className="font-heading text-sm font-extrabold uppercase tracking-[0.32em] text-brand-accent">
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
                <CounterValue
                  value={metric.value}
                  active={inView}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  text={metric.text}
                />
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
