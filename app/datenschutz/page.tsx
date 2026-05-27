import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Tobias & Felix Eppinger eGbR, Langenbrettach.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
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
          <h1 className="display-1 mt-10 text-foreground">Datenschutz</h1>

          <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground/85">
            <Block title="Verantwortlicher">
              Verantwortlich für die Datenverarbeitung ist die {site.legalName},
              {" "}
              {site.address.street}, {site.address.postalCode} {site.address.city}.
              Kontakt: {site.contact.email}, {site.contact.phonePrimaryLabel}.
            </Block>

            <Block title="Hosting">
              Unsere Website wird bei der Strato AG gehostet. Im Rahmen des
              Hostings werden automatisch Logdateien inklusive IP-Adressen
              verarbeitet. Mit dem Anbieter besteht ein Auftragsverarbeitungs­vertrag
              nach Art. 28 DSGVO.
            </Block>

            <Block title="Cookies">
              Diese Website verwendet technisch notwendige Cookies sowie optionale
              Cookies, die nur mit Ihrer Einwilligung gesetzt werden. Sie können
              Cookies in Ihrem Browser jederzeit deaktivieren; dies kann die
              Funktionalität einschränken.
            </Block>

            <Block title="Kontaktformular und Anfragen">
              Ihre Angaben aus dem Kontaktformular und über die angegebenen Mail-
              und Telefonkontakte werden ausschließlich zur Bearbeitung Ihrer
              Anfrage gespeichert und nicht ohne Ihre Zustimmung an Dritte
              weitergegeben. Die Daten werden gelöscht, sobald die Bearbeitung
              abgeschlossen ist oder Sie die Löschung anfordern, sofern keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </Block>

            <Block title="Analyse / Reichweitenmessung">
              Zur Reichweitenmessung kann WP Statistics auf Basis berechtigten
              Interesses (Art. 6 Abs. 1 lit. f DSGVO) eingesetzt werden. IP-
              Adressen werden anonymisiert; die Daten verbleiben auf unserem
              Server.
            </Block>

            <Block title="Ihre Rechte">
              Sie haben das Recht auf kostenlose Auskunft, Berichtigung, Löschung
              und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Sie können erteilte Einwilligungen jederzeit widerrufen und haben
              das Recht auf Beschwerde bei einer Aufsichts­behörde.
            </Block>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
