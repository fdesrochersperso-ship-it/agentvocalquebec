import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { DemoForm } from "@/components/sections/demo-form";

export const metadata: Metadata = {
  title: "Réserver une démo",
  description:
    "Réservez votre démo gratuite de 15 minutes. On vous fait entendre la voix, on vous montre le tableau de bord, et on répond à toutes vos questions.",
};

export default function DemoPage() {
  return (
    <PageHero
      title="Réservez votre démo gratuite"
      subtitle="15 minutes. On vous fait entendre la voix, on vous montre le tableau de bord, et on répond à toutes vos questions. Aucun engagement."
      className="pt-8 pb-16 lg:pt-12 lg:pb-20"
    >
      <div className="mt-8 lg:mt-10">
        <DemoForm />
      </div>
    </PageHero>
  );
}
