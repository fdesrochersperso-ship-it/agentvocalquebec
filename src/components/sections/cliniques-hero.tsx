"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

export function CliniquesHero() {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex max-w-3xl flex-col gap-6">
          <AnimateOnScroll delay={0}>
            <Badge>Pour les cliniques privées du Québec</Badge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1
              className={cn(
                "font-display font-normal text-primary leading-[1.1]",
                "text-4xl md:text-hero"
              )}
            >
              Votre clinique mérite un agent vocal qui ne manque jamais un
              appel
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="max-w-xl text-[1.125rem] leading-[1.6] text-text-secondary">
              Prise de rendez-vous, questions d'assurance, rappels de suivi —
              le tout en québécois naturel, 24 heures sur 24. Pendant que
              votre équipe se concentre sur les soins.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <Button href="/demo-gratuite" variant="primary" size="lg">
              Réserver une démo
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
