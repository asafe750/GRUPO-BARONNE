import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://grupo-baronne.vercel.app"),
  title: {
    default: "Grupo Baronne Transporte e Paletes",
    template: "%s | Grupo Baronne"
  },
  description:
    "Transporte, armazenagem, cross dock, fabricação, compra, venda e reforma de paletes com atendimento profissional.",
  keywords: [
    "Grupo Baronne",
    "transporte de cargas",
    "paletes",
    "paletes PBR",
    "armazenagem",
    "cross dock",
    "fábrica de paletes",
    "reforma de paletes"
  ],
  authors: [{ name: "Grupo Baronne Transporte e Paletes" }],
  creator: "Grupo Baronne Transporte e Paletes",
  publisher: "Grupo Baronne Transporte e Paletes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://grupo-baronne.vercel.app",
    siteName: "Grupo Baronne",
    title: "Grupo Baronne Transporte e Paletes",
    description:
      "Soluções completas em transporte, logística e paletes para empresas que precisam de confiança operacional.",
    images: [
      {
        url: "/images/caminhao-paletes.jpg",
        width: 1200,
        height: 630,
        alt: "Operação logística do Grupo Baronne"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Baronne Transporte e Paletes",
    description:
      "Transporte e paletes com padrão profissional, agilidade e compromisso.",
    images: ["/images/caminhao-paletes.jpg"]
  },
  alternates: {
    canonical: "/"
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
  themeColor: "#0d1f0e"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
