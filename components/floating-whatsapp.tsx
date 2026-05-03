"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "./site-data";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com o Grupo Baronne pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-baronne-lime text-baronne-black shadow-glow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
