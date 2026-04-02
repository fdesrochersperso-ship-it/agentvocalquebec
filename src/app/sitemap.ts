import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { absoluteUrl } from "@/lib/seo";
import { INDUSTRY_DIRECTORY } from "@/lib/site-data";

const STATIC_ROUTES = [
  "/",
  "/blog",
  "/conditions-utilisation",
  "/demo-gratuite",
  "/faq",
  "/fonctionnalites",
  "/industries",
  "/politique-confidentialite",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const industryEntries: MetadataRoute.Sitemap = INDUSTRY_DIRECTORY.map((industry) => ({
    url: absoluteUrl(industry.href),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...industryEntries,
    ...blogEntries,
  ];
}
