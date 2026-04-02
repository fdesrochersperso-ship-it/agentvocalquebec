import { HeroSection } from "@/components/sections/hero-section";
import { StatsBand } from "@/components/sections/stats-band";
import { FeaturesSection } from "@/components/sections/features-section";
import { IndustriesPreview } from "@/components/sections/industries-preview";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent vocal IA pour entreprises québécoises",
  description:
    "L'agent IA qui répond pour vous et qui parle comme quelqu'un de chez nous. Zéro appel manqué, 24/7.",
  path: "/",
  keywords: [
    "agent vocal ia québec",
    "agent téléphonique ia québec",
    "réceptionniste ia québec",
  ],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <FeaturesSection />
      <IndustriesPreview />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
