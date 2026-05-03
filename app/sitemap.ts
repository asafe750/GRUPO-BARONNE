import type { MetadataRoute } from "next";

const baseUrl = "https://grupo-baronne.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/servicos", "/contato"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8
  }));
}
