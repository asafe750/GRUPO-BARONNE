"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { instagramHandle, instagramUrl, whatsappUrl } from "./site-data";

export function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    mensagem: ""
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Olá, Grupo Baronne.",
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      `Telefone: ${form.telefone}`,
      `Mensagem: ${form.mensagem}`
    ].join("\n");

    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72 }}
    >
      <form onSubmit={handleSubmit} className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Nome"
            value={form.nome}
            onChange={(value) => setForm((current) => ({ ...current, nome: value }))}
            required
          />
          <Field
            label="Empresa"
            value={form.empresa}
            onChange={(value) => setForm((current) => ({ ...current, empresa: value }))}
          />
          <Field
            label="Telefone"
            value={form.telefone}
            onChange={(value) => setForm((current) => ({ ...current, telefone: value }))}
            required
          />
          <label className="grid gap-2 sm:col-span-2">
            <span className="text-sm font-bold text-white/70">Mensagem</span>
            <textarea
              required
              rows={6}
              value={form.mensagem}
              onChange={(event) => setForm((current) => ({ ...current, mensagem: event.target.value }))}
              className="min-h-36 resize-y rounded-[8px] border border-white/10 bg-baronne-black/70 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-baronne-lime focus:shadow-[0_0_0_4px_rgba(106,191,58,0.18),0_0_42px_rgba(106,191,58,0.22)]"
              placeholder="Conte o que sua empresa precisa."
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-[8px] bg-baronne-lime px-6 py-4 text-base font-black text-baronne-black shadow-glow transition hover:-translate-y-0.5 hover:bg-[#7bd94a]"
        >
          <Send className="h-5 w-5" />
          Enviar pelo WhatsApp
        </button>
      </form>

      <aside className="grid content-start gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group rounded-[8px] border border-baronne-lime/40 bg-baronne-lime p-7 text-baronne-black shadow-glow transition hover:-translate-y-1"
        >
          <MessageCircle className="h-8 w-8" />
          <h2 className="mt-8 text-2xl font-black">WhatsApp</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-black/70">Atendimento direto para orçamentos, dúvidas e disponibilidade.</p>
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-[8px] border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-1 hover:border-baronne-lime/50"
        >
          <Instagram className="h-8 w-8 text-baronne-lime" />
          <h2 className="mt-8 text-2xl font-black text-white">Instagram</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-white/60">{instagramHandle}</p>
        </a>
      </aside>
    </motion.div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({ label, value, required = false, onChange }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-bold text-white/70">{label}</span>
      <input
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-[8px] border border-white/10 bg-baronne-black/70 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-baronne-lime focus:shadow-[0_0_0_4px_rgba(106,191,58,0.18),0_0_42px_rgba(106,191,58,0.22)]"
        placeholder={label}
      />
    </label>
  );
}
