"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AudioDemo } from "@/components/demo/audio-demo";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

export function CliniquesHero() {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Mobile: Audio demo first. Desktop: right column (40%) */}
          <div className="order-1 w-full lg:order-2 lg:w-[40%]">
            <AnimateOnScroll direction="right" delay={0.3}>
              <AudioDemo />
            </AnimateOnScroll>
          </div>

          {/* Left column: 60% on desktop. Mobile: second (below audio) */}
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:w-[60%]">
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
              <Button href="/demo" variant="primary" size="lg">
                Réserver une démo
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
