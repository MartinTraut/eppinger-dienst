import { processSteps } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

export function Process() {
  return (
    <section id="ablauf" className="bg-background section-y border-t border-border/70">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Ablauf</p>
            <h2 className="display-2 mt-6 max-w-2xl text-balance text-foreground">
              Vier Schritte. Kein Drumherum.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.08}>
            <p className="lead">
              Nach dem ersten Telefonat wissen Sie, woran Sie sind. Was wir
              versprechen, schreiben wir auf. Was wir aufschreiben, halten wir
              ein.
            </p>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden bg-border/70 md:mt-24 md:grid-cols-4">
          {processSteps.map((s) => (
            <Reveal key={s.n}>
              <li className="flex h-full flex-col gap-6 bg-background p-7 md:p-9">
                <span className="font-display text-[14px] font-bold tracking-[0.16em] uppercase text-brand">
                  Schritt {s.n}
                </span>
                <h3 className="font-display text-[24px] font-bold text-foreground md:text-[26px]">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
