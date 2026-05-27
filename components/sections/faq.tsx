import { faqs } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="bg-background section-y border-t border-border/70">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-12 lg:gap-20">
        <Reveal className="md:col-span-4">
          <p className="eyebrow">Häufige Fragen</p>
          <h2 className="display-2 mt-6 text-balance text-foreground">
            Antworten, bevor Sie anrufen.
          </h2>
        </Reveal>

        <div className="md:col-span-8">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border/70"
                >
                  <AccordionTrigger className="py-7 text-left hover:no-underline">
                    <span className="font-display text-[18px] font-semibold text-foreground md:text-[20px]">
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty pb-8 text-[15px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
