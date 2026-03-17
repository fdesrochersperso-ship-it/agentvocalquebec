import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Source_Sans_3,
  JetBrains_Mono,
} from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/ui/mobile-cta";
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
    "Agent vocal IA qui répond au téléphone en québécois authentique, 24/7. Prise de rendez-vous, questions fréquentes, transfert d'urgences. Pour cliniques et entrepreneurs du Québec.",
  openGraph: {
    locale: "fr_CA",
  },
};

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
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
