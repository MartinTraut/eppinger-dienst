"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      "Anfrage über die Website",
    )}&body=${body}`;
  }

  return (
    <section id="kontakt" className="bg-forest section-y text-background">
      <div className="container-x grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-20">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-background/60">
              Kontakt
            </p>
            <h2 className="display-2 mt-6 text-balance text-background">
              Sagen Sie uns, was ansteht.
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-background/75 md:text-[17px]">
              Ein Anruf reicht. Wir hören zu, fahren raus und schreiben Ihnen
              ein klares Angebot. Kein Druck, keine Pauschalen.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <a
              href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
              className="block font-display text-[2rem] font-bold leading-none tracking-tight text-background hover:text-background/80 md:text-[2.6rem]"
            >
              {site.contact.phonePrimaryLabel}
            </a>
            <a
              href={`tel:${site.contact.phoneSecondary.replace(/\s/g, "")}`}
              className="mt-2 block font-display text-[1.4rem] font-semibold leading-none tracking-tight text-background/80 hover:text-background md:text-[1.6rem]"
            >
              {site.contact.phoneSecondaryLabel}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-7 block text-[14.5px] text-background/75 hover:text-background"
            >
              {site.contact.email}
            </a>

            <div className="mt-10 border-t border-background/20 pt-6 text-[13.5px] leading-relaxed text-background/65">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="md:col-span-7">
          <form onSubmit={submit} className="border-t border-background/20 pt-10">
            <h3 className="font-display text-[24px] font-bold text-background md:text-[28px]">
              Anfrage senden
            </h3>
            <p className="mt-2 text-[13.5px] text-background/65">
              Wir melden uns spätestens am nächsten Werktag.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:border-background focus-visible:ring-0"
                />
              </Field>
              <Field label="Telefon" htmlFor="phone">
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:border-background focus-visible:ring-0"
                />
              </Field>
              <Field label="E-Mail" htmlFor="email" full>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:border-background focus-visible:ring-0"
                />
              </Field>
              <Field label="Ihr Anliegen" htmlFor="message" full>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Worum geht es? Was soll gemacht werden?"
                  className="rounded-none border-0 border-b border-background/25 bg-transparent px-0 text-background placeholder:text-background/40 focus-visible:border-background focus-visible:ring-0"
                />
              </Field>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11.5px] leading-relaxed text-background/45 sm:max-w-[260px]">
                Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zu.
              </p>
              <button
                type="submit"
                className="self-start rounded-full bg-background px-7 py-4 text-[14px] font-medium text-forest transition-colors hover:bg-background/90 sm:self-auto"
              >
                Anfrage senden
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <Label
        htmlFor={htmlFor}
        className="text-[11px] tracking-[0.18em] uppercase text-background/60"
      >
        {label}
      </Label>
      <div className="mt-3">{children}</div>
    </div>
  );
}
