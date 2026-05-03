"use client";

import { motion } from "framer-motion";

const lines = [
  { top: "12%", left: "8%", width: "34%", delay: 0 },
  { top: "28%", left: "55%", width: "26%", delay: 0.4 },
  { top: "48%", left: "12%", width: "20%", delay: 0.8 },
  { top: "68%", left: "42%", width: "38%", delay: 1.2 }
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  left: `${8 + ((index * 17) % 82)}%`,
  top: `${10 + ((index * 23) % 76)}%`,
  delay: index * 0.18,
  size: index % 3 === 0 ? 4 : 3
}));

export function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="noise-layer absolute inset-0 opacity-70" />
      {lines.map((line) => (
        <motion.span
          key={`${line.top}-${line.left}`}
          className="absolute h-px origin-left bg-gradient-to-r from-transparent via-baronne-lime/60 to-transparent"
          style={{ top: line.top, left: line.left, width: line.width }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 0.45, 1], opacity: [0, 0.8, 0.35, 0.75] }}
          transition={{ duration: 5.5, delay: line.delay, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
      {particles.map((particle, index) => (
        <motion.span
          key={particle.left + particle.top}
          className="absolute rounded-full bg-baronne-lime shadow-glow"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [-8, 10, -8], opacity: [0.18, 0.75, 0.18], scale: [1, 1.45, 1] }}
          transition={{ duration: 4.8 + (index % 4), delay: particle.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
