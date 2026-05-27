"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, reduce ? 1.05 : 1.15]);
  const contentY = useTransform(scrollYProgress, [0.2, 1], ["0%", reduce ? "0%" : "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.95], [1, 0.2]);

  return (
    <section
      id="hero-content"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest text-background"
    >
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/galerie/foto-2.jpg"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/65 via-forest/35 to-forest"
      />

      {/* Top, meta line */}
      <div className="container-x relative flex items-center justify-end pt-7 md:pt-9">
        <div className="hidden text-right text-[12px] tracking-[0.18em] uppercase text-background/75 md:block">
          {site.address.city} · Hohenlohe
        </div>
      </div>

      {/* Bottom, copy + CTAs */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative mt-auto pt-24 pb-14 md:pt-32 md:pb-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="display-1 max-w-[12ch] text-balance"
        >
          Gartenbau & Gebäudeservice.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="mt-10 grid items-end gap-8 md:mt-14 md:grid-cols-12 md:gap-12"
        >
          <p className="text-pretty md:col-span-7 max-w-2xl text-[17px] leading-relaxed text-background/85 md:text-[19px]">
            Inhabergeführter Familienbetrieb der Brüder Tobias und Felix Eppinger
            aus Langenbrettach. Wir pflegen und gestalten Gärten, übernehmen
            Kehrwoche, Winterdienst und Reinigung rund ums Haus.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:col-span-5 md:justify-end">
            <a
              href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border-b border-background/40 pb-2 font-display text-2xl font-semibold tracking-tight text-background transition-colors hover:border-background hover:text-background md:text-3xl"
            >
              {site.contact.phonePrimaryLabel}
            </a>
            <a
              href="#kontakt"
              className="text-[13px] tracking-[0.16em] uppercase text-background/70 transition-colors hover:text-background"
            >
              Anfrage senden
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Hairline bottom strip with stats */}
      <div className="relative border-t border-background/15">
        <div className="container-x grid grid-cols-2 gap-y-6 py-6 sm:grid-cols-4">
          {[
            ["50+", "Projekte"],
            ["75+", "Kunden"],
            ["2", "Inhaber"],
            ["seit 2023", "in Hohenlohe"],
          ].map(([k, v], i) => (
            <div
              key={v}
              className={
                "flex items-baseline gap-3 px-1 " +
                (i > 0 ? "sm:border-l sm:border-background/15 sm:pl-6" : "")
              }
            >
              <span className="font-display text-2xl font-bold text-background">
                {k}
              </span>
              <span className="text-[12px] tracking-[0.14em] uppercase text-background/65">
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
