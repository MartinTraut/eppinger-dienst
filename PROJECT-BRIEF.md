# Project Brief — Eppinger Gartenbau & Gebäudeservice

> Autonomously derived by the website-builder skill on 2026-05-26 from
> `https://eppinger-dienstleistungen.de/` (Relaunch / URL).
> Review the assumptions and resolve every `TODO` before go-live.

## 1. Source & Ingestion

- **Type:** Relaunch
- **Pages analysiert:** Home, Impressum, Datenschutz, Galerie Gartenbau
- **Extrahierte Fakten**
  - **Firma:** Tobias & Felix Eppinger eGbR (gegr. 26.06.2023)
  - **Adresse:** Lindenstraße 9, 74243 Langenbrettach
  - **Telefon:** 0174 8678613 (Tobias) · 0152 38560082 (Felix)
  - **E-Mail:** info@eppinger-dienstleistungen.de
  - **USt-IdNr.:** DE367930073
  - **Slogan:** „Ihr Garten ist unser Job!"
  - **Geschäftsfelder:** Gartenbau + Gebäudeservice (Privat & Gewerbe)
  - **Leistungen Gartenbau:** Grünflächenpflege, Garten­neu- und Umgestaltung, Pflanzungen, Dachbegrünung
  - **Leistungen Gebäudeservice:** Kehrwoche, Winterdienst, Fenster- & Fassadenreinigung
  - **Kennzahlen Eigenangabe:** 50+ Projekte, 75+ Kunden
  - **Hosting alt:** Strato + WordPress (WP Statistics)
  - **Region:** Hohenlohe / Heilbronn-Franken (Langenbrettach, Bretzfeld, Öhringen, Neuenstein, Weinsberg, Heilbronn — als Einzugsgebiet plausibel; ist `TODO` zu bestätigen)

## 2. Strategie

- **Zielgruppe:**
  - Privatkunden: Eigenheim­besitzer 35–70, Hohenlohe/HN-Land. Suchen verlässliche, regionale, ordentliche Handwerker. Einwand: „Bekomme ich überhaupt einen Termin und Qualität für mein Geld?"
  - Gewerbekunden: Hausverwaltungen, kleine Firmen, Eigentümergemeinschaften. Brauchen einen festen Ansprechpartner für Kehrwoche, Winterdienst, Pflege, Reinigung. Einwand: „Zuverlässig über das ganze Jahr?"
- **Industrie-Positionierung:** Premium für die Region heißt: ruhig, handfest, sichtbar inhabergeführt, sauberes Handwerk, klare Sprache. Nicht: hippe SaaS-Optik, keine grell­bunten Stockfotos. Inspiration: hochwertige Landschaftsarchitektur, gediegene Manufaktur-Auftritte.
- **Fünf UX-Antworten:**
  1. *Was ist das?* → Hero („Gartenbau & Gebäudeservice aus Langenbrettach")
  2. *Für wen?* → Trust-Strip + Service-Split (Privat / Gewerbe)
  3. *Warum besser/relevant?* → Pillars „Zwei Leistungsbereiche – ein Ansprechpartner", Process, USPs
  4. *Warum vertrauen?* → Über die Brüder, Stats, Galerie, Region
  5. *Nächster Schritt?* → Anrufen oder Anfrage senden (Sticky-CTA, Contact-Section)
- **Primäres Ziel:** Direktanruf · sekundär: Kontaktformular
- **Architektur:** Strong One-Pager + `/galerie`, `/impressum`, `/datenschutz`

**Seiten-Abschnitte (Home, in Reihenfolge):**

1. Sticky-Header (transparent → fest beim Scroll)
2. Hero (großes Typografie-Statement, Hintergrundbild + Gradient, zwei CTAs)
3. Trust-Strip (regional · inhabergeführt · 50+ Projekte · seit 2023)
4. Leistungs-Split (Gartenbau ↔ Gebäudeservice, asymmetrische Komposition)
5. Leistungs-Detail (jede Kategorie mit Service-Liste, alternierender Rhythmus)
6. Process (4 Schritte: Anfrage → Vor-Ort-Termin → Angebot → Umsetzung)
7. Stats / Marker (Zahlen, Einzugsgebiet)
8. Über die Brüder Eppinger
9. Galerie-Teaser (3-Bild-Komposition mit Link zur vollen Galerie)
10. Einsatzgebiet (Liste der Orte + Hinweis auf Anfrage)
11. FAQ (interview-artig)
12. Contact (Telefon-CTA + einfaches Anfrageformular, Adresse, Öffnungszeiten TODO)
13. Footer (Navigation, Rechtliches, Kontakt)

## 3. Design System (abgeleitet)

- **Color tokens (oklch):**
  - Background: `oklch(0.985 0.005 95)` — warmes Off-White
  - Foreground / Forest: `oklch(0.22 0.04 145)` — tiefes Tann
  - Brand: `oklch(0.46 0.10 145)` — Eppinger-Grün, kräftig aber gedeckt
  - Brand-Foreground: `oklch(0.985 0.01 95)`
  - Accent / Moos: `oklch(0.62 0.13 140)` — heller Akzent
  - Sand (Surface): `oklch(0.94 0.018 85)` — warmer Hauch für Sections
  - Muted: `oklch(0.93 0.008 95)`
  - Muted-Foreground: `oklch(0.48 0.02 145)`
  - Border: `oklch(0.88 0.01 95)`
- **Typographie:** `Fraunces` (display, variable, opsz, weights 300–700) + `Inter` (body, 400/500/600). Beide via `next/font`. Skala 1.25er Modular. Generous tracking auf Display, ruhige Body-Lines (1.6).
- **Spacing / Radius / Shadow:** Skala 4/8/12/16/24/32/48/64/96. Radius 14px (md). Shadows nur sparsam (eine weiche Schatten-Variante für Cards). Hairlines auf Borders. Layering über tonale Sand-Surfaces, nicht über Schatten.
- **Motion language:** 220–420ms, Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Reveal on scroll (fade-up 16px, stagger). Hover-Lift 2px + Scale 1.01. `prefers-reduced-motion` respektiert.
- **Layout language:** Asymmetrische Bild-Text-Kompositionen, übergroße Headlines mit Serifen-Italic-Akzent („*ist*"), großzügiger Weißraum, tonale Sand-Bänder zwischen Forest-Bändern, gelegentliche Diagonale via Border-Top.

## 4. Copywriting

- **Sprache:** Deutsch (Quelle ist Deutsch)
- **Tone:** Handfest, ruhig, vertrauensvoll. Brüder-Geschichte spürbar. Keine Floskeln, keine KI-Sprache, keine leeren Superlative.
- Fakten unverändert, Sprache angehoben. Alle Zahlen aus Quelle übernommen.

## 5. Build

- **Stack:** Next.js 16 (App Router, TS) + Tailwind v4 + shadcn/ui + Framer Motion
- **Shop:** nein
- **Bestehendes Skeleton:** vorhanden (Next 16, Tailwind v4, shadcn radix-nova) — wird weiterverwendet, NICHT neu scaffolded.
- **Reused Library-Bausteine:** Framer-Motion-Wrapper hand-rolled (Reveal, ParallaxImage); keine externen Library-Komponenten 1:1 kopiert.

## 6. Annahmen

- Einzugsgebiet (Bretzfeld, Öhringen, Neuenstein, Weinsberg, Heilbronn, Bad Friedrichshall, Möckmühl, Neckarsulm) ist plausibel, sollte vom Kunden bestätigt werden.
- Öffnungszeiten / Bürozeiten unbekannt → als `TODO` markiert.
- Bewertungen / Bewertungs­zahlen unbekannt → keine erfunden, keine `AggregateRating` ausgegeben bis bestätigt.
- Galeriebilder werden aus der Originalseite übernommen unter `public/images/galerie/`. Bei kommerzieller Nutzung: Eigentum/Rechte beim Kunden sind angenommen.

## 7. Offene TODOs

- [ ] Bestätigung Bürozeiten / Erreichbarkeit
- [ ] Liste konkretes Einzugsgebiet (Orte) bestätigen / anpassen
- [ ] Echte Kunden­zitate / Google-Bewertungen ergänzen → dann `AggregateRating` aktivieren
- [ ] Eigene hochaufgelöste Projektbilder ersetzen Galerie-Übernahme
- [ ] Logo / Wortmarke als SVG (aktuell typografisches Wort­marke-Render)
- [ ] Kontakt-Formular an echtes Backend / E-Mail-Service anbinden (aktuell `mailto:`-Fallback)

## 8. Run & Deploy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # muss clean durchlaufen
```

Deployment: Vercel (Domain & DNS via Strato → Vercel umziehen).
