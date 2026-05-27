"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function Marquee({ children, speed = 48, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <div className={["overflow-hidden", className].filter(Boolean).join(" ")}>
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        style={{ willChange: "transform" }}
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div className="flex shrink-0 gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 gap-12">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
