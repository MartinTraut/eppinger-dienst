"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/site";

export function ServicesSplit() {
  return (
    <section id="leistungen" className="bg-background section-y">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-8">
            <div className="eyebrow">Leistungen</div>
            <h2 className="display-2 mt-6 text-balance text-foreground">
              Zwei Handwerke.{" "}
              <span className="text-brand">Ein Betrieb.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.08}>
            <p className="lead">
              Wir kümmern uns um Ihr Grundstück, im Garten, auf dem Hof
              und an der Fassade. Sie haben einen Ansprechpartner.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 md:mt-20 md:grid-cols-2 md:gap-5">
          <PillarCard
            id={services.garten.id}
            title={services.garten.title}
            subtitle={services.garten.kicker}
            items={services.garten.items.map((i) => i.title)}
            image="/images/galerie/foto-1.jpg"
            href={`#${services.garten.id}-detail`}
          />
          <PillarCard
            id={services.gebaeude.id}
            title={services.gebaeude.title}
            subtitle={services.gebaeude.kicker}
            items={services.gebaeude.items.map((i) => i.title)}
            image="/images/galerie/foto-6.jpg"
            href={`#${services.gebaeude.id}-detail`}
          />
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  id,
  title,
  subtitle,
  items,
  image,
  href,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  image: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);
  const x = useSpring(sx, { stiffness: 200, damping: 22 });
  const y = useSpring(sy, { stiffness: 200, damping: 22 });
  const opacity = useMotionValue(0);
  const so = useSpring(opacity, { stiffness: 200, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    sx.set(e.clientX - r.left);
    sy.set(e.clientY - r.top);
    opacity.set(1);
  }

  return (
    <Reveal>
      <Link
        ref={ref}
        href={href}
        id={id}
        onMouseMove={onMove}
        onMouseEnter={() => opacity.set(1)}
        onMouseLeave={() => opacity.set(0)}
        className="group relative flex flex-col overflow-hidden rounded-md bg-sand"
      >
        {/* Cursor spotlight */}
        <motion.div
          aria-hidden
          style={{
            x,
            y,
            opacity: so,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none absolute z-10 size-[280px] rounded-full bg-brand/12 blur-2xl"
        />
        <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            quality={95}
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-8 p-7 sm:p-9 md:p-11">
          <div>
            <h3 className="display-3 text-foreground">{title}</h3>
            <p className="mt-3 text-[13.5px] font-medium text-brand uppercase">
              {subtitle}
            </p>
          </div>

          <ul className="grid gap-x-6 gap-y-2 text-[14.5px] text-foreground/80 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-2.5 py-1">
                <span className="mt-[7px] inline-block size-1 rounded-full bg-brand" />
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand transition-transform duration-500 ease-[var(--ease)] group-hover:gap-3">
            Mehr zu {title}
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease)] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
