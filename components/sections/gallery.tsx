import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

const photos = [
  "/images/galerie/foto-1.jpg",
  "/images/galerie/foto-3.jpg",
  "/images/galerie/foto-2.jpg",
  "/images/galerie/foto-6.jpg",
];

export function Gallery() {
  return (
    <section id="galerie" className="bg-background section-y border-t border-border/70">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Galerie</p>
            <h2 className="display-2 mt-6 max-w-xl text-balance text-foreground">
              Aus der Werkstatt.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="/galerie"
              className="text-[13px] tracking-[0.16em] uppercase text-brand hover:underline"
            >
              Alle Projekte ansehen →
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-6">
          {photos.map((src) => (
            <Reveal key={src}>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  quality={95}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease)] hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
