import type { Metadata } from "next";
import { IndustriesHubPage } from "@/components/sections/industries-hub";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Agent vocal IA par industrie | Agent Vocal Québec",
  description:
    "Solutions d'agent téléphonique IA adaptées à votre secteur. Cliniques dentaires, médico-esthétique, construction, garages, restaurants et plus. Québec.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHubPage />
      <CtaSection />
    </>
  );
}
