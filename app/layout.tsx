import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Barlow_Condensed, Inter } from "next/font/google";
import { COMPANY, HERO_IMAGE, SITE_URL } from "@/lib/constants";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Grupo Baronne | Transportadora em Camaçari BA | Paletes PBR Certificados",
  description:
    "O Grupo Baronne oferece transporte de cargas para todo o Brasil e paletes PBR certificados em Camaçari BA. 5 anos de experiência, qualidade e pontualidade.",
  keywords: [
    "Grupo Baronne",
    "transportadora em Camaçari BA",
    "transporte de cargas para todo o Brasil",
    "paletes PBR certificados",
    "paletes PBR Camaçari",
    "logística nacional",
    "transporte Brasil"
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Grupo Baronne",
    title: "Grupo Baronne | Transportadora em Camaçari BA | Paletes PBR Certificados",
    description:
      "O Grupo Baronne oferece transporte de cargas para todo o Brasil e paletes PBR certificados em Camaçari BA. 5 anos de experiência, qualidade e pontualidade.",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Transporte de cargas em todo o Brasil pelo Grupo Baronne"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Baronne | Transportadora em Camaçari BA | Paletes PBR Certificados",
    description:
      "Transporte de cargas para todo o Brasil e paletes PBR certificados em Camaçari BA.",
    images: [HERO_IMAGE]
  },
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: COMPANY.name,
      url: SITE_URL,
      telephone: COMPANY.phoneSchema,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.streetAddress,
        addressLocality: COMPANY.addressLocality,
        addressRegion: COMPANY.addressRegion,
        postalCode: COMPANY.postalCode,
        addressCountry: COMPANY.addressCountry
      },
      areaServed: "Brasil",
      sameAs: [COMPANY.instagramUrl]
    },
    {
      "@type": "TransportCompany",
      "@id": `${SITE_URL}#transportcompany`,
      name: COMPANY.name,
      url: SITE_URL,
      telephone: COMPANY.phoneSchema,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.streetAddress,
        addressLocality: COMPANY.addressLocality,
        addressRegion: COMPANY.addressRegion,
        postalCode: COMPANY.postalCode,
        addressCountry: COMPANY.addressCountry
      },
      areaServed: "Brasil",
      sameAs: [COMPANY.instagramUrl],
      serviceType: [
        "Transporte de cargas em nível nacional",
        "Venda de paletes PBR certificados em Camaçari BA"
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
