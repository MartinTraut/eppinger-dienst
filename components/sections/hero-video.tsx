"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroVideo() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.85]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = 1;

    // Try unmuted first. Browsers usually block this without a prior gesture
    // → fall back to muted autoplay and arm a one-shot listener so the first
    // user interaction anywhere on the page silently flips the audio on.
    const tryPlay = async () => {
      v.muted = false;
      try {
        await v.play();
      } catch {
        v.muted = true;
        try {
          await v.play();
        } catch {
          /* ignore */
        }
      }
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay);

    const unmuteOnce = () => {
      if (!v.muted) return;
      v.muted = false;
      v.play().catch(() => {
        v.muted = true;
      });
    };
    window.addEventListener("pointerdown", unmuteOnce, { once: true });
    window.addEventListener("keydown", unmuteOnce, { once: true });
    window.addEventListener("touchstart", unmuteOnce, { once: true });

    const onTime = () => {
      if (!v.duration) return;
      setProgress(Math.min(1, v.currentTime / v.duration));
    };
    const onEnd = () => {
      setDone(true);
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect && rect.bottom > window.innerHeight * 0.4) {
        document
          .getElementById("hero-content")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnd);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.25 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnd);
      window.removeEventListener("pointerdown", unmuteOnce);
      window.removeEventListener("keydown", unmuteOnce);
      window.removeEventListener("touchstart", unmuteOnce);
      io.disconnect();
    };
  }, []);

  function skip() {
    document.getElementById("hero-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-[100svh] flex-col overflow-hidden bg-forest text-background"
      aria-label="Eppinger, Intro"
    >
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ y: videoY, scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          preload="auto"
          poster="/images/galerie/foto-2.jpg"
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-[58%] object-cover [filter:contrast(1.08)_saturate(1.12)_brightness(1.02)] [image-rendering:auto] [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-forest via-forest/90 to-transparent"
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest/40 via-transparent to-forest/70"
        style={{ opacity: scrimOpacity }}
      />

      {/* Top meta */}
      <div className="container-x relative flex items-center justify-between pt-7 md:pt-9">
        <span className="text-[12px] tracking-[0.18em] uppercase text-background/75">
          {site.address.city} · Hohenlohe
        </span>
        <button
          onClick={skip}
          className="text-[12px] tracking-[0.18em] uppercase text-background/70 transition-colors hover:text-background"
        >
          Skip
        </button>
      </div>

      {/* Bottom, scroll cue + progress */}
      <div className="container-x relative mt-auto pb-10 md:pb-14">
        <motion.button
          onClick={skip}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="group mx-auto flex flex-col items-center gap-4 text-background/85 transition-colors hover:text-background"
          aria-label="Weiter scrollen"
        >
          <span className="text-[11px] tracking-[0.22em] uppercase">
            {done ? "Weiter" : "Scrollen"}
          </span>
          <span
            aria-hidden
            className="flex h-12 w-7 items-start justify-center rounded-full border border-background/40 pt-2"
          >
            <motion.span
              className="block h-2 w-[2px] rounded-full bg-background/80"
              animate={reduce ? undefined : { y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.button>

        <div className="mt-8 h-px w-full bg-background/15">
          <div
            className="h-full origin-left bg-background/80 transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </section>
  );
}
