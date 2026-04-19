import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GrainOverlay from "@/components/providers/GrainOverlay";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Étude notariale Lyon presqu'île`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "notaire Lyon",
    "étude notariale Lyon",
    "succession Lyon",
    "succession internationale",
    "immobilier notaire",
    "donation notaire",
    "famille PACS Lyon",
    "transmission patrimoine",
    "VAR Notaires",
  ],
  category: "legal services",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE.shortName,
    title: `${SITE.name} — Étude notariale Lyon presqu'île`,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Étude notariale à Lyon`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Étude notariale Lyon presqu'île`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd />
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        <SmoothScroll>
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
