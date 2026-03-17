"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function ConstructionPricingPreview() {
  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div>
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            Accessible pour les PME
          </h2>
          <p className="mt-2 text-[1.125rem] leading-[1.6] text-text-secondary">
            À partir de 149$/mois — moins cher qu'un lunch d'équipe par semaine.
            Et ça rapporte pas mal plus.
          </p>
        </div>
        <Button
          href="/tarifs"
          variant="secondary"
          size="lg"
          className="group shrink-0"
        >
          <span className="inline-flex items-center gap-1">
            Voir les tarifs
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </Button>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
