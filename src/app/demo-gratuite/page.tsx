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
      <p className="mt-6 max-w-[600px] text-center text-[0.9375rem] leading-relaxed text-text-secondary mx-auto lg:mt-8">
        Préférez qu&apos;on vous rappelle sans remplir le formulaire? Écrivez-nous à{" "}
        <a
          href="mailto:info@agentvocalquebec.com"
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          info@agentvocalquebec.com
        </a>{" "}
        — même délai de réponse.
      </p>
      <div className="mt-8 lg:mt-10">
        <DemoForm />
      </div>
    </PageHero>
  );
}
