import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-data";

type OpenGraphType = "website" | "article";

interface CreatePageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: OpenGraphType;
  noIndex?: boolean;
}

function normalizePath(path: string) {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path = "/") {
  return new URL(normalizePath(path), SITE_URL).toString();
}

function resolveTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  noIndex = false,
}: CreatePageMetadataOptions): Metadata {
  const canonicalPath = normalizePath(path);
  const resolvedTitle = resolveTitle(title);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: ogType,
      locale: "fr_CA",
      siteName: SITE_NAME,
      url: canonicalPath,
      title: resolvedTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-image-preview": "none",
            "max-snippet": -1,
          },
        }
      : {
          index: true,
          follow: true,
        },
  };
}
