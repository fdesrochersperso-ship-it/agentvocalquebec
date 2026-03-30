"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/ui/mobile-cta";

const CHROMELESS_PREFIXES = ["/demo"] as const;

interface SiteChromeProps {
  children: React.ReactNode;
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const hideChrome = CHROMELESS_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (hideChrome) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCTA />
    </>
  );
}
