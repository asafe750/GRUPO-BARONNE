"use client";

import { motion } from "framer-motion";
import { timeline, values } from "./site-data";

export function ValuesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {values.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.article
            key={item.title}
            className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: index * 0.08 }}
            whileHover={{ y: -6, borderColor: "rgba(106, 191, 58, 0.45)" }}
          >
            <motion.span
              className="grid h-14 w-14 place-items-center rounded-[8px] bg-baronne-lime text-baronne-black"
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.45 }}
            >
              <Icon className="h-6 w-6" />
            </motion.span>
            <h2 className="mt-7 text-2xl font-black text-white">{item.title}</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-white/60">{item.text}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

export function Timeline() {
  return (
    <div className="relative mt-12">
      <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
      <div className="grid gap-7">
        {timeline.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            className="relative grid gap-5 md:grid-cols-2"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.62, delay: index * 0.06 }}
          >
            <span className="absolute left-[9px] top-7 h-3 w-3 rounded-full bg-baronne-lime shadow-glow md:left-[calc(50%_-_6px)]" />
            <div className={`ml-11 rounded-[8px] border border-white/10 bg-white/[0.045] p-6 md:ml-0 ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-baronne-lime">{item.year}</p>
              <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
