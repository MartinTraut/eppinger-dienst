import { site, faqs, services } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}#business`,
        name: site.legalName,
        alternateName: site.shortName,
        url: site.url,
        telephone: site.contact.phonePrimary,
        email: site.contact.email,
        image: `${site.url}/images/galerie/foto-1.jpg`,
        priceRange: "€€",
        foundingDate: site.founded,
        slogan: site.tagline,
        vatID: site.taxId,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: site.serviceArea.map((c) => ({
          "@type": "City",
          name: c,
        })),
        founder: site.founders.map((name) => ({ "@type": "Person", name })),
        sameAs: [],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen",
          itemListElement: [
            ...services.garten.items.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.text,
                category: "Gartenbau",
              },
            })),
            ...services.gebaeude.items.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.text,
                category: "Gebäudeservice",
              },
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: site.url,
        name: site.shortName,
        inLanguage: "de-DE",
        publisher: { "@id": `${site.url}#business` },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
