"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "Vocês atendem minha cidade ou região?",
    answer:
      "Atendemos empresas em todo o território nacional, com base operacional em Camaçari BA. Entre em contato pelo WhatsApp informando sua região para confirmarmos o atendimento."
  },
  {
    question: "Como funciona a Garantia Minha Carga Segura?",
    answer:
      "Toda carga transportada pelo Grupo Baronne conta com cobertura de seguro durante todo o trajeto, do ponto de origem ao destino final."
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "O prazo varia conforme a origem, o destino e o tipo de carga. Após o envio dos dados pelo WhatsApp, retornamos com o prazo estimado para sua operação."
  },
  {
    question: "Vocês emitem nota fiscal e CT-e?",
    answer: "[ RESPOSTA A CONFIRMAR COM O CLIENTE ]",
    placeholder: true
  },
  {
    question: "Qual a quantidade mínima de paletes para compra?",
    answer:
      "Fornecemos a quantidade que sua empresa precisar, sem limite mínimo definido. Entre em contato pelo WhatsApp para verificarmos a disponibilidade."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer
    }
  }))
};

export function FAQ() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      ref={ref}
      id="faq"
      aria-labelledby="faq-title"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="bg-black px-5 py-24 md:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto max-w-5xl">
        <SectionLabel visible={inView}>Perguntas Frequentes</SectionLabel>
        <h2
          id="faq-title"
          className="mt-4 max-w-4xl font-heading text-5xl font-black uppercase leading-none text-white md:text-6xl"
        >
          Tire suas dúvidas.
        </h2>

        <dl className="mt-12 space-y-4">
          {faqs.map(({ question, answer, placeholder }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="interactive-card overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                  >
                    <span className="font-heading text-2xl font-black uppercase leading-none text-white">
                      {question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-brand-interactive transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-6">
                        <p
                          className={
                            placeholder
                              ? "placeholder-dash rounded-2xl px-4 py-3 text-sm italic leading-7"
                              : "text-sm leading-7 text-zinc-300"
                          }
                        >
                          {answer}
                        </p>
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </motion.section>
  );
}
