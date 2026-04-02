import { PageHero } from "@/components/sections/page-hero";
import { FaqPageContent } from "@/components/sections/faq-page-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Questions fréquentes sur notre agent vocal IA. Fonctionnement, données, intégrations et modalités.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Questions fréquentes"
        subtitle="Tout ce qu'il faut savoir avant de brancher l'agent chez vous."
        className="pt-8 pb-4 lg:pt-12 lg:pb-6"
      />

      <FaqPageContent />
    </>
  );
}
