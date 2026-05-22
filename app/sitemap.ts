import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { services, cities, business } from "@/lib/business";

const baseUrl = business.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/zones-intervention`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/realisations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.priority === 1 ? 0.9 : 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/zones-intervention/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: c.priority === 1 ? 0.8 : 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes, ...blogRoutes];
}
