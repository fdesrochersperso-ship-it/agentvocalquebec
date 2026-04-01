"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex max-w-3xl flex-col gap-6">
          <AnimateOnScroll delay={0}>
            <Badge>Pensé pour les entreprises d&apos;ici</Badge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1
              className={cn(
                "font-display font-normal text-primary leading-[1.1]",
                "text-3xl md:text-hero"
              )}
            >
              L&apos;agent vocal IA qui répond comme du monde d&apos;ici
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="max-w-xl text-[1.125rem] leading-[1.6] text-text-secondary">
              Notre agent répond au téléphone en québécois naturel, 24/7. Il
              prend les rendez-vous, répond aux questions qui reviennent tout
              le temps et transfère les urgences à la bonne personne.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/demo-gratuite" variant="primary" size="lg">
                Réserver une démo gratuite
              </Button>
              <Button href="/#comment-ca-marche" variant="secondary" size="lg">
                Voir comment ça marche
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
