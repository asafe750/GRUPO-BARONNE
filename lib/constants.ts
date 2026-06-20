export const SITE_URL = "https://grupobaronne.com.br";

export const COMPANY = {
  name: "Grupo Baronne Transporte e Paletes",
  shortName: "Grupo Baronne",
  logoText: "GB | GRUPO BARONNE",
  address: "Rua Serra Verde, Parque Real, Camaçari BA, 42813-132, Brasil",
  streetAddress: "Rua Serra Verde, Parque Real",
  addressLocality: "Camaçari",
  addressRegion: "BA",
  postalCode: "42813-132",
  addressCountry: "BR",
  phoneDisplay: "(71) 9 9999-0385",
  phoneSchema: "(71) 9 9999-0385",
  whatsappNumber: "5571999990385",
  cnpj: "44.473.554/0001-81",
  instagramHandle: "@grupo_baronne",
  instagramUrl: "https://www.instagram.com/grupo_baronne/"
};

export const WHATSAPP = {
  general: `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de mais informações."
  )}`,
  transport: `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar um frete."
  )}`,
  pallets: `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de pedir paletes PBR."
  )}`
};

export const NAV_LINKS = [
  { label: "Transporte", href: "#transporte" },
  { label: "Sobre", href: "#sobre" },
  { label: "Fretes", href: "#fretes" },
  { label: "Paletes", href: "#paletes" },
  { label: "Contato", href: "#contato" }
] as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=85";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=85";

export const TRANSPORT_IMAGE =
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1800&q=85";

export const PALLET_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85";

export const BRAND_COLORS = {
  primary: "#22c55e",
  accent: "#4ade00",
  background: "#0a0a0a",
  text: "#ffffff",
  muted: "#a1a1aa"
};
