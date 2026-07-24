"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { type FormEvent, type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { COMPANY } from "@/lib/constants";

type NeedOption = "" | "Transporte de carga" | "Paletes PBR";

type FormValues = {
  name: string;
  company: string;
  need: NeedOption;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  need: "",
  details: ""
};

const needOptions: Exclude<NeedOption, "">[] = ["Transporte de carga", "Paletes PBR"];

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function LeadFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const modalRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(focusableSelector);
      firstFocusable?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      activeElement?.focus();
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!values.company.trim()) nextErrors.company = "Informe sua empresa.";
    if (!values.need) nextErrors.need = "Escolha o que você precisa.";
    if (!values.details.trim()) nextErrors.details = "Informe os detalhes.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) return;

    const message = `Olá! Sou ${values.name.trim()} da ${values.company.trim()}. Preciso de: ${
      values.need
    }. Detalhes: ${values.details.trim()}`;
    window.open(
      `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
    closeModal();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = Array.from(
      modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
    ).filter((element) => element.offsetParent !== null);

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        aria-label="Abrir formulário de cotação"
        initial={{ opacity: 0, y: 18, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.75, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-[70] inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center gap-2 rounded-full bg-brand-green text-sm font-extrabold text-black shadow-[0_18px_55px_rgba(34,197,94,0.32)] transition hover:bg-brand-interactive focus:outline-none focus:ring-4 focus:ring-brand-interactive/30 sm:h-14 sm:w-auto sm:px-6"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">Faça sua cotação</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-black/75 px-5 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
            onKeyDown={handleKeyDown}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.55)] sm:p-7"
            >
              <button
                type="button"
                aria-label="Fechar formulário"
                onClick={closeModal}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:border-brand-interactive hover:text-brand-interactive focus:outline-none focus:ring-4 focus:ring-brand-interactive/25"
              >
                <X aria-hidden="true" size={18} />
              </button>

              <div className="pr-12">
                <p className="font-heading text-sm font-extrabold uppercase tracking-[0.15em] text-brand-accent">
                  Cotação rápida
                </p>
                <h2
                  id={titleId}
                  className="mt-3 font-heading text-4xl font-black uppercase leading-none text-white sm:text-5xl"
                >
                  Conte o que precisa mover.
                </h2>
              </div>

              <form className="mt-7 grid gap-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="lead-name" className="text-sm font-bold text-white">
                    Nome
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={values.name}
                    onChange={(event) => updateValue("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "lead-name-error" : undefined}
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-interactive focus:ring-4 focus:ring-brand-interactive/15"
                  />
                  {errors.name && (
                    <p id="lead-name-error" className="mt-2 text-sm font-semibold text-brand-accent">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lead-company" className="text-sm font-bold text-white">
                    Empresa
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    required
                    value={values.company}
                    onChange={(event) => updateValue("company", event.target.value)}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? "lead-company-error" : undefined}
                    className="mt-2 h-12 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-interactive focus:ring-4 focus:ring-brand-interactive/15"
                  />
                  {errors.company && (
                    <p id="lead-company-error" className="mt-2 text-sm font-semibold text-brand-accent">
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-sm font-bold text-white">O que você precisa?</p>
                  <div
                    role="radiogroup"
                    aria-label="O que você precisa?"
                    aria-invalid={Boolean(errors.need)}
                    aria-describedby={errors.need ? "lead-need-error" : undefined}
                    className="mt-2 grid gap-3 sm:grid-cols-2"
                  >
                    {needOptions.map((option) => {
                      const selected = values.need === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          onClick={() => updateValue("need", option)}
                          className={`min-h-14 rounded-2xl border px-4 text-left text-sm font-extrabold transition focus:outline-none focus:ring-4 focus:ring-brand-interactive/20 ${
                            selected
                              ? "border-brand-interactive bg-brand-green text-black"
                              : "border-zinc-800 bg-zinc-950 text-white hover:border-brand-interactive"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {errors.need && (
                    <p id="lead-need-error" className="mt-2 text-sm font-semibold text-brand-accent">
                      {errors.need}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lead-details" className="text-sm font-bold text-white">
                    Detalhes
                  </label>
                  <textarea
                    id="lead-details"
                    required
                    rows={4}
                    value={values.details}
                    onChange={(event) => updateValue("details", event.target.value)}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? "lead-details-error" : undefined}
                    placeholder="Ex: origem e destino da carga, ou quantidade de paletes que precisa."
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-interactive focus:ring-4 focus:ring-brand-interactive/15"
                  />
                  {errors.details && (
                    <p
                      id="lead-details-error"
                      className="mt-2 text-sm font-semibold text-brand-accent"
                    >
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-interactive focus:outline-none focus:ring-4 focus:ring-brand-interactive/30"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  Enviar pelo WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
