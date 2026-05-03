"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { navigation, whatsappUrl } from "./site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[8px] px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass-surface" : "border border-transparent bg-transparent"
        }`}
        initial={{ y: -22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-[8px] bg-baronne-lime px-5 py-3 text-sm font-black text-baronne-black shadow-glow transition hover:-translate-y-0.5 hover:bg-[#7bd94a] md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Fale Conosco
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-surface mx-4 mt-3 overflow-hidden rounded-[8px] p-3 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[8px] px-4 py-3 text-sm font-bold text-white/80 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-[8px] bg-baronne-lime px-4 py-3 text-sm font-black text-baronne-black"
              >
                <MessageCircle className="h-4 w-4" />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
