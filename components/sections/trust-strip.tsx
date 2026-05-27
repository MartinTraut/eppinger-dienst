import { Marquee } from "@/components/shared/marquee";
import { site } from "@/lib/site";

const items = [
  "Inhabergeführter Familienbetrieb",
  `Lokal aus ${site.address.city}`,
  "Feste Termine, festes Wort",
  "Ein Ansprechpartner",
  "Privat & Gewerbe",
  "Seit " + site.stats.foundedYear,
  "Hohenlohe · Heilbronn",
  "Transparenz an oberster Stelle",
];

export function TrustStrip() {
  return (
    <section className="overflow-hidden border-y border-border/70 bg-background py-5">
      <Marquee speed={48}>
        {items.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-4 font-display text-lg font-medium text-foreground/70 md:text-xl"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
