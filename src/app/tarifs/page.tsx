import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PricingInclusSection } from "@/components/sections/pricing-inclus-section";
import { PricingTable } from "@/components/sections/pricing-table";
import { CostEstimator } from "@/components/sections/cost-estimator";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Des prix clairs, sans surprises. À partir de 149$/mois. Pas de contrat, pas de frais cachés. Annulez quand vous voulez.",
};

const PRICING_FAQ_ITEMS = [
  {
    question: "Y a-tu des frais de setup?",
    answer:
      "Non. La configuration est incluse dans tous les plans.",
  },
  {
    question: "Je suis engagé pour combien de temps?",
    answer:
      "Aucun engagement. C'est mois par mois. Vous annulez quand vous voulez, sans frais.",
  },
  {
    question: "C'est quoi une minute?",
    answer:
      "Une minute d'appel. Du moment où l'IA décroche jusqu'à la fin de l'appel. Les silences courts pendant la conversation comptent, mais pas le temps de sonnerie.",
  },
  {
    question: "Qu'est-ce qui arrive si je dépasse mes minutes?",
    answer:
      "On facture les minutes supplémentaires au tarif indiqué sur votre plan. Pas de surprise — vous pouvez suivre votre consommation en temps réel.",
  },
  {
    question: "Est-ce que je peux changer de plan?",
    answer:
      "Oui, à tout moment. Le changement prend effet au prochain cycle de facturation.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        title="Des prix clairs, sans surprises"
        subtitle="Pas de contrat. Pas de frais cachés. Annulez quand vous voulez."
        className="pt-8 pb-4 lg:pt-12 lg:pb-6"
      />

      <PricingInclusSection />

      <PricingTable className="pt-4 lg:pt-4" />

      <CostEstimator />

      <ComparisonTable />

      <FaqSection items={PRICING_FAQ_ITEMS} />

      <CtaSection />
    </>
  );
}
