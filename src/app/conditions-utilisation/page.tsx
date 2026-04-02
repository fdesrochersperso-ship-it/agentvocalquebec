import { PageHero } from "@/components/sections/page-hero";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Conditions d'utilisation",
  description:
    "Conditions générales d'utilisation du site Agent Vocal Québec.",
  path: "/conditions-utilisation",
});

export default function ConditionsUtilisationPage() {
  return (
    <>
      <PageHero
        title="Conditions d'utilisation"
        subtitle="Les contenus du site sont fournis à titre informatif et peuvent être mis à jour sans préavis."
        className="pt-8 pb-8 lg:pt-12 lg:pb-12"
      />

      <SectionWrapper className="pt-0">
        <div className="mx-auto flex max-w-[900px] flex-col gap-6 rounded-2xl border border-border bg-surface p-8 md:p-10">
          <p className="text-[1rem] leading-[1.7] text-text-primary">
            En utilisant ce site, vous acceptez de consulter les informations
            présentées à titre indicatif et de prendre contact avec l&apos;équipe
            pour valider toute portée commerciale, technique ou réglementaire.
          </p>
          <p className="text-[1rem] leading-[1.7] text-text-primary">
            Comme pour la politique de confidentialité, une version finale plus
            détaillée devrait être rédigée et validée avant publication si le
            site doit servir de référence contractuelle.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
