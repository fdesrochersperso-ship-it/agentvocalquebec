import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DemoForm } from "@/components/sections/demo-form";

export const metadata: Metadata = {
  title: "Démo gratuite",
  description:
    "Obtenez une démo gratuite de 15 minutes : voix québécoise, tableau de bord et réponses à vos questions. Sans engagement. On vous rappelle sous 24 h.",
};

export default function DemoPage() {
  return (
    <PageHero
      title="Obtenez votre démo gratuite en 15 minutes"
      subtitle="Dites-nous qui vous êtes — on vous rappelle pour calendrier une courte séance: voix québécoise, tableau de bord et réponses à vos questions. Sans engagement, sans carte de crédit."
      className="pt-8 pb-16 lg:pt-12 lg:pb-20"
    >
      <div className="mt-8 lg:mt-10">
        <DemoForm />
      </div>
    </PageHero>
  );
}
