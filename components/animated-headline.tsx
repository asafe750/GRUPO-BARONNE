"use client";

import { motion } from "framer-motion";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <h1
      className={className}
      style={{ overflowWrap: "normal", wordBreak: "normal", hyphens: "none" }}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span aria-hidden="true" className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((letter) => {
            const index = letterIndex++;

            return (
              <motion.span
                aria-hidden="true"
                className="inline-block"
                key={`${wordIndex}-${letter}-${index}`}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.028,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
