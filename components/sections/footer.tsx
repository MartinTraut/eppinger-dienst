import Link from "next/link";
import { BrandMark } from "@/components/shared/brand-mark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container-x py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link href="/" aria-label="Eppinger">
              <BrandMark width={180} />
            </Link>
            <p className="mt-7 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              {site.legalName}, inhabergeführter Gartenbau und Gebäudeservice
              aus {site.address.city}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-muted-foreground">
              Navigation
            </div>
            <ul className="mt-6 space-y-3 text-[14px]">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-foreground/80 transition-colors hover:text-brand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase font-semibold text-muted-foreground">
              Kontakt
            </div>
            <ul className="mt-6 space-y-3 text-[14px] text-foreground/80">
              <li>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                  className="hover:text-brand"
                >
                  {site.contact.phonePrimaryLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-brand"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/70 pt-7 text-[12px] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.legalName} · USt-IdNr. {site.taxId}
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/galerie" className="hover:text-brand">Galerie</Link>
            <Link href="/impressum" className="hover:text-brand">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-brand">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
