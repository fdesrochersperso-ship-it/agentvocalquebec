import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  DM_Serif_Display,
  Source_Sans_3,
  JetBrains_Mono,
} from "next/font/google";
import { SiteChrome } from "@/components/layout/site-chrome";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentvocalquebec.com"),
  title: {
    default: "Agent Vocal Québec — Agent vocal IA en québécois authentique",
    template: "%s | Agent Vocal Québec",
  },
  description:
    "Agent vocal IA qui répond au téléphone en québécois naturel, 24/7. Rendez-vous, questions fréquentes et transfert d'urgences pour les entreprises du Québec.",
  openGraph: {
    locale: "fr_CA",
  },
};

const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-8QWS9JR0N9";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CA"
      className={`${dmSerifDisplay.variable} ${sourceSans3.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background antialiased font-body pb-20 md:pb-0">
        <SiteChrome>{children}</SiteChrome>
      </body>
      {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
    </html>
  );
}
