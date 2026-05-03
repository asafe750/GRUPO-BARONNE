"use client";

import Link from "next/link";
import { useState } from "react";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  const [imageVisible, setImageVisible] = useState(true);

  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Grupo Baronne">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[8px] border border-white/10 bg-white/5">
        {imageVisible ? (
          <img
            src="/images/logo.png"
            alt=""
            className="h-full w-full object-contain p-1.5"
            onError={() => setImageVisible(false)}
          />
        ) : (
          <span className="text-sm font-black text-baronne-lime">GB</span>
        )}
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-normal text-white">Grupo Baronne</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Transporte e Paletes
          </span>
        </span>
      )}
    </Link>
  );
}
