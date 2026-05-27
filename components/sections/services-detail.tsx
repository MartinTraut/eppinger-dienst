import Image from "next/image";
import { services } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

export function ServicesDetail() {
  return (
    <section className="bg-sand/60 section-y">
      <div className="container-x space-y-24 md:space-y-32">
        <DetailBlock
          id={services.garten.id}
          eyebrow="Gartenbau"
          title="Gärten, die über Jahre stimmig bleiben."
          intro="Wir denken Gärten nicht in Quadratmetern, sondern in Jahreszeiten. Was wir bauen, muss auch im fünften Sommer noch funktionieren."
          items={services.garten.items}
          image="/images/galerie/foto-2.jpg"
          imageAlt="Gartenbau-Projekt von Eppinger"
          align="left"
        />
        <DetailBlock
          id={services.gebaeude.id}
          eyebrow="Gebäudeservice"
          title="Saubere Wege. Klare Fenster. Ein Anruf."
          intro="Hausverwaltungen, Eigentümergemeinschaften und Privatkunden buchen uns für die Aufgaben, die regelmäßig anstehen, und gehen morgens auf einen geräumten Hof."
          items={services.gebaeude.items}
          image="/images/galerie/foto-4.jpg"
          imageAlt="Gebäudeservice-Arbeit von Eppinger"
          align="right"
        />
      </div>
    </section>
  );
}

function DetailBlock({
  id,
  eyebrow,
  title,
  intro,
  items,
  image,
  imageAlt,
  align,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: ReadonlyArray<{ title: string; text: string }>;
  image: string;
  imageAlt: string;
  align: "left" | "right";
}) {
  const imageFirst = align === "right";
  return (
    <div
      id={`${id}-detail`}
      className="grid items-start gap-10 md:grid-cols-12 md:gap-12 lg:gap-16"
    >
      <Reveal
        className={[
          "md:col-span-5",
          imageFirst ? "md:order-2" : "md:order-1",
        ].join(" ")}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-muted">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            quality={95}
            className="object-cover"
          />
        </div>
      </Reveal>

      <div
        className={[
          "md:col-span-7",
          imageFirst ? "md:order-1 md:pr-2" : "md:order-2 md:pl-2",
        ].join(" ")}
      >
        <Reveal>
          <div className="eyebrow">{eyebrow}</div>
          <h3 className="display-2 mt-6 text-balance text-foreground">
            {title}
          </h3>
          <p className="lead mt-6 max-w-xl">{intro}</p>
        </Reveal>

        <dl className="mt-12 divide-y divide-border/70">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="grid gap-3 py-7 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <dt className="font-display text-xl font-semibold text-foreground sm:text-[1.5rem]">
                  {item.title}
                </dt>
                <dd className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.text}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
