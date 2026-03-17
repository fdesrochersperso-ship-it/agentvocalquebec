import { PageHero } from "@/components/sections/page-hero";
import { FaqPageContent } from "@/components/sections/faq-page-content";

export const metadata = {
  title: "FAQ | Agent Vocal Québec",
  description:
    "Questions fréquentes sur notre agent vocal IA. Fonctionnement, données, tarifs, intégrations.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir sur notre agent vocal IA."
        className="pt-8 pb-4 lg:pt-12 lg:pb-6"
      />

      <FaqPageContent />
    </>
  );
}
