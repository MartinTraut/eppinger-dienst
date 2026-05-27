import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Galerie · Projekte",
  description:
    "Ausgewählte Arbeiten von Eppinger Gartenbau & Gebäudeservice aus Langenbrettach, Gartenpflege, Gestaltung und Pflanzungen aus Hohenlohe.",
  alternates: { canonical: "/galerie" },
};

const photos = [
  { src: "/images/galerie/foto-1.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/galerie/foto-2.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/galerie/foto-3.jpg", aspect: "aspect-[4/3]" },
  { src: "/images/galerie/foto-4.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/galerie/foto-5.jpg", aspect: "aspect-[3/4]" },
  { src: "/images/galerie/foto-6.jpg", aspect: "aspect-[4/3]" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-background pt-36 pb-12 md:pt-44 md:pb-16">
          <div className="container-x">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="size-4" />
              Zurück zur Startseite
            </Link>
            <Reveal>
              <p className="eyebrow mb-5 mt-10">Galerie</p>
              <h1 className="display-1 max-w-3xl text-balance text-foreground">
                Projekte aus dem <span className="text-brand">Hohenlohischen</span>.
              </h1>
              <p className="lead mt-8 max-w-xl">
                Ein Ausschnitt unserer Arbeit. Wenn Sie ein konkretes Vorhaben
                haben, fragen Sie uns. Wir zeigen Ihnen gern Referenzen, die zu
                Ihrer Situation passen.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-background pb-24 md:pb-32">
          <div className="container-x">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {photos.map((p, i) => (
                <Reveal
                  key={p.src}
                  delay={i * 0.05}
                  className={[
                    "relative overflow-hidden rounded-3xl bg-muted",
                    p.aspect,
                    i % 3 === 1 ? "lg:translate-y-12" : "",
                  ].join(" ")}
                >
                  <Image
                    src={p.src}
                    alt={`Projekt ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={95}
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
