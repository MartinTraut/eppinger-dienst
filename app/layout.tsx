import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, Gartenbau & Gebäudeservice in Langenbrettach`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Gartenbau Langenbrettach",
    "Gartenpflege Hohenlohe",
    "Gartengestaltung Heilbronn",
    "Gebäudeservice Langenbrettach",
    "Winterdienst Hohenlohe",
    "Kehrwoche",
    "Fensterreinigung",
    "Dachbegrünung",
    "Eppinger Dienstleistungen",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name}, Gartenbau & Gebäudeservice`,
    description: site.description,
    images: [
      {
        url: "/images/galerie/foto-1.jpg",
        width: 1200,
        height: 630,
        alt: "Gartenprojekt Eppinger Gartenbau",
      },
    ],
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={cn(inter.variable, montserrat.variable)}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
