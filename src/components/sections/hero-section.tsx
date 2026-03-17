"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AudioDemo } from "@/components/demo/audio-demo";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-12">
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
              <Badge>Conçu pour les entreprises québécoises</Badge>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1
                className={cn(
                  "font-display font-normal text-primary leading-[1.1]",
                  "text-3xl md:text-hero"
                )}
              >
                L'agent IA qui répond pour vous et qui parle comme quelqu'un de chez nous
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="max-w-xl text-[1.125rem] leading-[1.6] text-text-secondary">
                Notre agent vocal IA répond au téléphone en québécois authentique, 24 heures sur 24. Il prend les rendez-vous, répond aux questions et transfère les urgences.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/demo" variant="primary" size="lg">
                  Réserver une démo gratuite
                </Button>
                <Button href="/#comment-ca-marche" variant="secondary" size="lg">
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
