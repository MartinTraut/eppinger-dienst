import { Reveal } from "@/components/shared/reveal";

export function Intro() {
  return (
    <section className="relative bg-sage section-y">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-brand/20"
      />
      <div className="container-tight">
        <Reveal>
          <p className="eyebrow">Eppinger eGbR</p>
          <p className="mt-8 text-balance font-display text-[2rem] font-medium leading-[1.15] text-foreground md:text-[2.6rem] lg:text-[3rem]">
            Zwei Brüder, ein Wort: Wir machen das, was rund ums Haus
            ansteht, Gartenbau, Pflege und Reinigung in einer Hand.
          </p>
          <p className="mt-10 max-w-2xl text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            Seit 2023 betreuen wir Privathaushalte, Hausverwaltungen und
            Gewerbekunden in Hohenlohe und im Landkreis Heilbronn. Sauber
            geplant, sauber ausgeführt, sauber abgerechnet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
