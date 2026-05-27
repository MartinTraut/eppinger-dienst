import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="leistungen" className="bg-background section-y border-t border-border/70">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Leistungen</p>
          <h2 className="display-2 mt-6 max-w-3xl text-balance text-foreground">
            Zwei Handwerke unter einem Dach.
          </h2>
          <p className="lead mt-7 max-w-2xl">
            Sie haben einen Ansprechpartner für Garten und Gebäude, wir
            kommen selbst, planen mit, packen an und schließen sauber ab.
          </p>
        </Reveal>

        <ServiceArea
          id={services.garten.id}
          eyebrow="01, Gartenbau"
          title={services.garten.title}
          intro={services.garten.intro}
          items={services.garten.items}
          image="/images/galerie/foto-1.jpg"
          imageAlt="Gartenbau-Projekt von Eppinger"
          align="left"
        />

        <ServiceArea
          id={services.gebaeude.id}
          eyebrow="02, Gebäudeservice"
          title={services.gebaeude.title}
          intro={services.gebaeude.intro}
          items={services.gebaeude.items}
          image="/images/galerie/foto-4.jpg"
          imageAlt="Gebäudeservice-Arbeit von Eppinger"
          align="right"
        />
      </div>
    </section>
  );
}

function ServiceArea({
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
  const imageRight = align === "left";
  return (
    <div
      id={id}
      className="mt-24 grid items-start gap-12 border-t border-border/70 pt-16 md:mt-32 md:grid-cols-12 md:gap-12 md:pt-20 lg:gap-16"
    >
      <Reveal
        className={
          "md:col-span-5 " + (imageRight ? "md:order-2" : "md:order-1")
        }
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            quality={95}
            className="object-cover"
          />
        </div>
      </Reveal>

      <div
        className={
          "md:col-span-7 " + (imageRight ? "md:order-1" : "md:order-2")
        }
      >
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand">
            {eyebrow}
          </p>
          <h3 className="display-2 mt-5 text-balance text-foreground">
            {title}
          </h3>
          <p className="lead mt-6 max-w-xl">{intro}</p>
        </Reveal>

        <dl className="mt-12 divide-y divide-border/70">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="grid gap-3 py-7 sm:grid-cols-[1fr_2fr] sm:gap-10">
                <dt className="font-display text-[19px] font-semibold text-foreground sm:text-[22px]">
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
