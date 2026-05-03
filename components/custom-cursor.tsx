"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34 });
  const springY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="custom-cursor cursor-dot pointer-events-none fixed left-0 top-0 z-[90] h-5 w-5 rounded-full border border-white bg-white/70"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  );
}
