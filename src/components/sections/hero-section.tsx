"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-8 pt-24 md:pt-28 lg:pb-10 lg:pt-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/hero-stock.jpg')] bg-cover bg-[center_right_18%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,22,38,0.82)_0%,rgba(18,30,49,0.72)_28%,rgba(28,40,61,0.36)_54%,rgba(255,255,255,0.06)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(8,14,26,0.52)_0%,rgba(8,14,26,0.16)_60%,rgba(8,14,26,0)_100%)]"
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative min-h-[500px] py-10 md:min-h-[580px] md:py-16 lg:min-h-[620px] lg:py-20">
          <div className="relative flex max-w-3xl flex-col gap-6">
          <AnimateOnScroll delay={0}>
            <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
              Pensé pour les entreprises d&apos;ici
            </Badge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1
              className={cn(
                "font-display font-normal leading-[1.05] text-white",
                "text-3xl md:text-hero"
              )}
            >
              L&apos;agent vocal IA qui répond comme du monde d&apos;ici
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="max-w-2xl text-[1.125rem] leading-[1.6] text-white/88">
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
              <Button
                href="/#comment-ca-marche"
                variant="secondary"
                size="lg"
                className="border-white/70 text-white hover:border-white hover:bg-white/12 hover:text-white"
              >
                Voir comment ça marche
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
        </div>
      </div>
    </section>
  );
}
