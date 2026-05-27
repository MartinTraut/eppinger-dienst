import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Tobias & Felix Eppinger eGbR, Langenbrettach.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <article className="container-x max-w-3xl pt-36 pb-32 md:pt-44">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Zurück zur Startseite
          </Link>
          <h1 className="display-1 mt-10 text-foreground">Impressum</h1>

          <div className="prose mt-10 max-w-none space-y-8 text-base leading-relaxed text-foreground/85">
            <section>
              <h2 className="font-display text-2xl">Anschrift</h2>
              <p className="mt-3">
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl">
                Vertretungsberechtigte
              </h2>
              <p className="mt-3">
                {site.founders.join(" und ")}
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl">Kontakt</h2>
              <p className="mt-3">
                Telefon:{" "}
                <a
                  href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                  className="text-brand hover:underline"
                >
                  {site.contact.phonePrimaryLabel}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-brand hover:underline"
                >
                  {site.contact.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl">
                Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="mt-3">{site.taxId}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl">
                Gewerbeanmeldung
              </h2>
              <p className="mt-3">
                Die Gewerbeerlaubnis nach §14 GewO wurde am 26.06.2023 vom
                Gewerbeamt Langenbrettach erteilt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl">
                Zentrale Kontaktstelle nach Digital Services Act (DSA)
              </h2>
              <p className="mt-3">
                Erreichbar unter der o. g. E-Mail-Adresse und Telefonnummer.
                Verfügbare Sprachen: Deutsch und Englisch.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl">Haftung</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
