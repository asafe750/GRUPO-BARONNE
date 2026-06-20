"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { COMPANY, NAV_LINKS, WHATSAPP } from "@/lib/constants";

export function Navbar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="absolute left-0 top-0 h-1 w-1" />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8"
        >
          <a href="#inicio" onClick={closeMenu} className="group inline-flex items-center">
            <span className="font-heading text-lg font-extrabold tracking-[0.14em] text-white">
              <span className="text-brand-accent">GB</span> | {COMPANY.logoText.replace("GB | ", "")}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-zinc-300 transition hover:text-brand-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={WHATSAPP.general}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-accent focus:outline-none focus:ring-4 focus:ring-brand-green/25"
            >
              Fale Conosco
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 text-white lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="border-t border-zinc-800 bg-black/95 px-5 pb-6 pt-2 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-4 text-base font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP.general}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-brand-green px-6 text-sm font-extrabold text-black transition hover:bg-brand-accent"
                >
                  Fale pelo WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
