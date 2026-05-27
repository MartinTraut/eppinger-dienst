import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/site";

export function Region() {
  return (
    <section id="region" className="relative bg-sage section-y">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-brand/20"
      />
      <div className="container-x relative grid gap-10 md:grid-cols-12 md:gap-12 lg:gap-20">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2 className="display-2 mt-6 text-balance text-foreground">
            Verwurzelt in Hohenlohe.
          </h2>
          <p className="lead mt-7 max-w-md">
            Wir arbeiten dort, wo wir uns auskennen: im Landkreis Heilbronn und
            im Hohenlohekreis. Größere Projekte fahren wir auch weiter, fragen
            Sie einfach an.
          </p>
        </Reveal>

        <div className="md:col-span-7 md:pt-2">
          <ul className="grid grid-cols-2 gap-x-10 sm:grid-cols-3">
            {site.serviceArea.map((city) => (
              <li
                key={city}
                className="border-b border-border/70 py-4 font-display text-[17px] font-semibold text-foreground/90 md:text-[18px]"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
