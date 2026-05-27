import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="ueber-uns" className="relative bg-forest text-background section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand/30 blur-[120px]"
      />
      <div className="container-x relative grid items-start gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/10">
            <Image
              src="/images/galerie/foto-5.jpg"
              alt="Tobias und Felix Eppinger"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              quality={95}
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pt-6">
          <Reveal>
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-background/60">Über uns</p>
            <h2 className="display-2 mt-6 text-balance text-background">
              Zwei Brüder. Ein Wort.
            </h2>
            <div className="mt-9 space-y-5 text-[16px] leading-relaxed text-background/80 md:text-[17px]">
              <p>
                {site.legalName} ist ein inhabergeführter Familienbetrieb aus
                {" "}{site.address.city}. Wir haben den Betrieb {site.stats.foundedYear}
                {" "}gegründet, mit der einfachen Idee, dass man als Kunde nicht drei
                Firmen anrufen sollte, wenn dasselbe Grundstück Pflege, Gestaltung
                und Reinigung braucht.
              </p>
              <p>
                Transparenz steht bei uns nicht im Flyer, sondern in der Rechnung:
                klare Positionen, faire Preise und ein fester Ansprechpartner ,
                vom ersten Anruf bis zum letzten Handschlag.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 grid gap-x-10 gap-y-6 border-t border-background/20 pt-10 sm:grid-cols-2">
            {site.founders.map((name) => (
              <div key={name}>
                <div className="font-display text-[22px] font-bold text-background md:text-[24px]">
                  {name}
                </div>
                <div className="mt-1 text-[13px] text-background/60">
                  Gründer · Geschäftsführer
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
