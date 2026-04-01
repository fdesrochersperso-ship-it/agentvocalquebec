"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function ConstructionPain() {
  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex max-w-3xl flex-col gap-6">
        <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
          Le téléphone sonne, mais vous avez les mains pleines
        </h2>

        <div>
          <div className="mb-2 font-mono text-stat font-bold text-accent">77%</div>
          <p className="text-[1.125rem] leading-[1.6] text-text-secondary">
            des entreprises de construction citent la pénurie de main-d&apos;œuvre
            comme leur contrainte #1.
          </p>
        </div>

        <p className="text-[1.125rem] leading-[1.6] text-text-primary">
          Vous pouvez pas engager une réceptionniste à temps plein pour 4-5
          appels par jour. Mais ces 4-5 appels valent des milliers de dollars.
          Chaque appel manqué, c&apos;est un contrat qui va chez votre concurrent.
          Chaque message vocal non écouté, c&apos;est une urgence qui aurait pu être
          facturée.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
