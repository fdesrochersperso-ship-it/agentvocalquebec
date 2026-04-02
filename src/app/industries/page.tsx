import type { Metadata } from "next";
import { IndustriesHubPage } from "@/components/sections/industries-hub";
import { CtaSection } from "@/components/sections/cta-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Agent vocal IA par industrie",
  description:
    "Solutions d'agent téléphonique IA adaptées à votre secteur. Cliniques dentaires, médico-esthétique, construction, garages, restaurants et plus. Québec.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHubPage />
      <CtaSection />
    </>
  );
}
