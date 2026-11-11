"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, y = 32, once = true }: Props) {
  const reduce = useReducedMotion();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const animate = mounted && !reduce;

  return (
    <motion.div
      className={className}
      initial={animate ? { opacity: 0, y } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once, amount: 0.2 }}
      transition={animate ? { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
