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
    "O Grupo Baronne oferece transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul e paletes PBR certificados em Camaçari BA.",
  keywords: [
    "Grupo Baronne",
    "transportadora em Camaçari BA",
    "transporte de cargas Norte",
    "transporte de cargas Nordeste",
    "transporte de cargas Centro-Oeste",
    "transporte de cargas Sudeste",
    "transporte de cargas Sul",
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
      "Transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul e paletes PBR certificados em Camaçari BA.",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul pelo Grupo Baronne"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Baronne | Transportadora em Camaçari BA | Paletes PBR Certificados",
    description:
      "Transporte de cargas nas regiões Norte, Nordeste, Centro-Oeste, Sudeste e Sul e paletes PBR certificados em Camaçari BA.",
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
      areaServed: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
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
      areaServed: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "280px",
            background:
              "linear-gradient(to bottom, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 40%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 40
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
