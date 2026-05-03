"use client";

import { motion } from "framer-motion";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const letters = Array.from(text);

  return (
    <h1 className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.42,
            delay: index * 0.028,
            ease: [0.2, 0.8, 0.2, 1]
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}
