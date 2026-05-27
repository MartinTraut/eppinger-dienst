export const site = {
  name: "Eppinger",
  legalName: "Tobias & Felix Eppinger eGbR",
  shortName: "Eppinger Gartenbau & Gebäudeservice",
  description:
    "Inhabergeführter Gartenbau und Gebäudeservice aus Langenbrettach. Pflege, Gestaltung und Reinigung für Privat- und Gewerbekunden in Hohenlohe und Heilbronn-Franken.",
  tagline: "Ihr Garten ist unser Job.",
  url: "https://eppinger-dienstleistungen.de",
  founded: "2023-06-26",
  founders: ["Tobias Eppinger", "Felix Eppinger"],
  address: {
    street: "Lindenstraße 9",
    postalCode: "74243",
    city: "Langenbrettach",
    region: "Baden-Württemberg",
    country: "DE",
  },
  contact: {
    phonePrimary: "+49 174 8678613",
    phonePrimaryLabel: "0174 8678613",
    phoneSecondary: "+49 152 38560082",
    phoneSecondaryLabel: "0152 38560082",
    email: "info@eppinger-dienstleistungen.de",
  },
  taxId: "DE367930073",
  serviceArea: [
    "Langenbrettach",
    "Bretzfeld",
    "Öhringen",
    "Neuenstein",
    "Weinsberg",
    "Heilbronn",
    "Bad Friedrichshall",
    "Möckmühl",
    "Neckarsulm",
    "Eberstadt",
  ],
  // TODO: Bürozeiten vom Kunden bestätigen
  hours: [
    { day: "Mo,Fr", time: "07:00, 18:00" },
    { day: "Sa", time: "nach Vereinbarung" },
  ],
  stats: {
    projects: "50+",
    clients: "75+",
    foundedYear: "2023",
  },
  nav: [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ablauf", label: "Ablauf" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#galerie", label: "Galerie" },
    { href: "#region", label: "Region" },
    { href: "#kontakt", label: "Kontakt" },
  ],
} as const;

export const services = {
  garten: {
    id: "gartenbau",
    title: "Gartenbau",
    kicker: "Pflege, Gestaltung & Pflanzung",
    intro:
      "Vom regelmäßigen Schnitt bis zur kompletten Neuanlage: Wir behandeln Ihren Garten wie unseren eigenen, ruhig, sauber und auf Dauer angelegt.",
    items: [
      {
        title: "Pflege von Grünflächen",
        text: "Rasen, Hecken, Stauden und Bäume, regelmäßig, termintreu und sauber dokumentiert.",
      },
      {
        title: "Neu- & Umgestaltung",
        text: "Wir planen Ihren Garten neu, von der ersten Skizze bis zur fertigen Anlage.",
      },
      {
        title: "Fachgerechte Pflanzungen",
        text: "Standortgerechte Auswahl, sauberer Aushub, kräftiges Anwurzeln.",
      },
      {
        title: "Moderne Dachbegrünung",
        text: "Extensive und intensive Begrünungen für Carport, Garage oder Flachdach.",
      },
    ],
  },
  gebaeude: {
    id: "gebaeudeservice",
    title: "Gebäudeservice",
    kicker: "Sauberkeit & Verlässlichkeit ums Haus",
    intro:
      "Der zweite Bereich, in dem Sie sich auf uns verlassen können: Wir halten Ihr Gebäude und sein Umfeld das ganze Jahr über in Form.",
    items: [
      {
        title: "Kehrwoche & Außenreinigung",
        text: "Gehwege, Höfe, Treppenhäuser, turnusmäßig nach Plan, ohne Erinnerung Ihrerseits.",
      },
      {
        title: "Winterdienst",
        text: "Räumen und Streuen früh am Morgen, Sie betreten ein freies, sicheres Grundstück.",
      },
      {
        title: "Fensterreinigung",
        text: "Streifenfreie Klarheit für Privathaus, Büro und Ladenfront, innen wie außen.",
      },
      {
        title: "Fassadenreinigung",
        text: "Algen, Grünbelag und Schmutz schonend entfernt, Ihre Fassade wirkt wieder neuwertig.",
      },
    ],
  },
} as const;

export const processSteps = [
  {
    n: "01",
    title: "Anfrage",
    text: "Per Telefon oder Formular, wir melden uns spätestens am nächsten Werktag.",
  },
  {
    n: "02",
    title: "Vor-Ort-Termin",
    text: "Wir schauen uns alles in Ruhe an, hören zu und nehmen Maß. Kostenfrei und unverbindlich.",
  },
  {
    n: "03",
    title: "Klares Angebot",
    text: "Sie bekommen ein transparentes Angebot, feste Positionen, keine versteckten Posten.",
  },
  {
    n: "04",
    title: "Umsetzung",
    text: "Termin steht, Material ist da, wir bringen es zu Ende, sauber und ohne Überraschungen.",
  },
] as const;

export const faqs = [
  {
    q: "In welchem Umkreis um Langenbrettach seid ihr tätig?",
    a: "Unser Stammgebiet liegt in Hohenlohe und im Landkreis Heilbronn, von Bretzfeld, Öhringen und Neuenstein über Weinsberg bis Heilbronn, Bad Friedrichshall und Möckmühl. Größere Projekte fahren wir auch darüber hinaus an, fragen Sie uns einfach.",
  },
  {
    q: "Übernehmt ihr nur große Aufträge oder auch laufende Pflege?",
    a: "Beides. Wir betreuen Eigentümergemeinschaften und Hausverwaltungen mit Kehrwoche, Winterdienst und Grünpflege im Jahresvertrag, und gestalten gleichzeitig komplette Gartenanlagen neu für Privatkunden. Sie bekommen denselben Ansprechpartner über alle Leistungen.",
  },
  {
    q: "Was kostet ein Vor-Ort-Termin?",
    a: "Der erste Termin und die Besichtigung sind grundsätzlich kostenfrei und unverbindlich. Wir hören erst zu, schauen uns die Situation an und schreiben dann ein klares Angebot, ohne Druck.",
  },
  {
    q: "Wer kommt am Ende auf den Hof oder in den Garten?",
    a: "Tobias oder Felix Eppinger persönlich. Wir sind ein inhabergeführter Familienbetrieb und kommen selbst, Sie haben dieselben Ansprechpartner von der Anfrage bis zur Schlussrechnung.",
  },
  {
    q: "Macht ihr auch Dachbegrünung auf Garage und Carport?",
    a: "Ja. Moderne extensive Begrünungen auf Carport, Garage oder Flachdach sind ein eigener Schwerpunkt. Wir prüfen die Statik mit, planen den Aufbau und übernehmen die komplette Ausführung inkl. Bewässerung.",
  },
  {
    q: "Wie schnell ist ein Termin verfügbar?",
    a: "Für Pflege- und Reinigungsaufträge bekommen wir kurzfristig etwas eingeschoben. Für größere Garten­neu­anlagen planen wir mit etwas mehr Vorlauf, sprechen Sie uns an, dann finden wir einen realistischen Zeitplan.",
  },
] as const;
