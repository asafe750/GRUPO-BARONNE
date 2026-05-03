"use client";

import { motion } from "framer-motion";
import { Service } from "./site-data";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      className="perspective-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay: index * 0.06 }}
    >
      <div className="card-3d h-full rounded-[8px] border border-white/10 bg-white/[0.045] p-6">
        <div className="grid h-12 w-12 place-items-center rounded-[8px] bg-baronne-lime text-baronne-black shadow-glow">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-7 text-xl font-black text-white">{service.title}</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-white/60">{service.short}</p>
      </div>
    </motion.article>
  );
}
