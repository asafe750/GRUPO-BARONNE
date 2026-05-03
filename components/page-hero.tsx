"use client";

import { AnimatedHeadline } from "./animated-headline";
import { HeroAtmosphere } from "./hero-atmosphere";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden px-5 pb-20 pt-36 md:px-8">
      <div className="absolute inset-0 bg-radial-lime" />
      <HeroAtmosphere />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-baronne-lime">{eyebrow}</p>
        <AnimatedHeadline
          text={title}
          className="mt-4 max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl"
        />
        {text && <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{text}</p>}
      </div>
    </section>
  );
}
