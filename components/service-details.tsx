"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, whatsappUrl } from "./site-data";

const details: Record<string, string[]> = {
  Transporte: ["Planejamento de rotas", "Acompanhamento operacional", "Pontualidade para cargas e paletes"],
  Armazenagem: ["Separação organizada", "Apoio a picos de demanda", "Controle para fluxo de mercadorias"],
  "Cross Dock": ["Recebimento rápido", "Triagem inteligente", "Expedição com menor tempo de permanência"],
  "Fábrica de Paletes": ["Produção sob demanda", "Paletes PBR", "Padrão de resistência e acabamento"],
  "Compra e Venda": ["Reposição de estoque", "Negociação em volume", "Atendimento para empresas"],
  Reforma: ["Recuperação estrutural", "Aproveitamento inteligente", "Menos descarte e melhor custo"]
};

export function ServiceDetails() {
  return (
    <div className="grid gap-5">
      {services.map((service, index) => {
        const Icon = service.icon;
        const reverse = index % 2 === 1;
        const title = service.detailTitle ?? service.title;

        return (
          <motion.article
            key={service.title}
            className="grid overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] lg:grid-cols-[0.82fr_1.18fr]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.64, delay: index * 0.05 }}
          >
            <div className={`image-fallback min-h-56 p-6 ${reverse ? "lg:order-2" : ""}`}>
              <div className="grid h-full content-between">
                <span className="grid h-14 w-14 place-items-center rounded-[8px] bg-baronne-lime text-baronne-black shadow-glow">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="max-w-xs text-sm font-black uppercase tracking-[0.2em] text-white/70">Grupo Baronne</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-baronne-lime">Serviço</p>
              <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/60">{service.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {details[service.title].map((item) => (
                  <div key={item} className="rounded-[8px] border border-white/10 bg-baronne-black/50 p-4 text-sm font-bold text-white/70">
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-baronne-lime hover:text-white"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
