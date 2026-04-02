import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Principes généraux de confidentialité et de traitement des renseignements pour Agent Vocal Québec.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        title="Politique de confidentialité"
        subtitle="Cette page présente un cadre de base sur la façon dont Agent Vocal Québec traite les renseignements transmis par le site."
        className="pt-8 pb-8 lg:pt-12 lg:pb-12"
      />

      <SectionWrapper className="pt-0">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 rounded-2xl border border-border bg-surface p-8 md:p-10">
          <p className="text-[1rem] leading-[1.7] text-text-primary">
            Les informations soumises par les formulaires ou par courriel sont
            utilisées pour répondre aux demandes de démonstration, assurer le
            suivi commercial et améliorer l&apos;expérience offerte sur le site.
          </p>
          <p className="text-[1rem] leading-[1.7] text-text-primary">
            Si vous souhaitez une version juridique complète adaptée à votre
            réalité opérationnelle, il est recommandé de faire valider ce texte
            par un conseiller juridique avant mise en ligne définitive.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
