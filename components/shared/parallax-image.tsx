"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  /** how far the image moves in px (max). Subtle by default. */
  range?: number;
};

/**
 * Scroll-driven parallax wrapper. The container holds aspect, the inner
 * image scales 110% and translates Y as the container moves through viewport.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
  quality = 95,
  range = 60,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-range, range]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={imageClassName ?? "object-cover"}
        />
      </motion.div>
    </div>
  );
}
