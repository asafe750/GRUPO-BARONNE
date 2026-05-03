"use client";

import { Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { instagramHandle, instagramUrl, navigation, whatsappUrl } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-baronne-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Transporte, armazenagem, cross dock, fabricação, compra, venda e reforma de paletes com padrão profissional.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Links</h2>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/60 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Contato</h2>
          <div className="mt-4 grid gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-white"
            >
              <Instagram className="h-4 w-4 text-baronne-lime" />
              {instagramHandle}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-baronne-lime" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs font-semibold text-white/40">
        © {new Date().getFullYear()} Grupo Baronne Transporte e Paletes. Todos os direitos reservados.
      </div>
    </footer>
  );
}
