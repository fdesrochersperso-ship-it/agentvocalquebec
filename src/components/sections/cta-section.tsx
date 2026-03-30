"use client";

import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  disclaimer?: string;
}

const DEFAULT_PROPS = {
  title: "Prêt à ne plus manquer un seul appel?",
  subtitle:
    "Réservez une démo de 15 minutes. On vous rappelle sous 24 h ouvrables — voix québécoise, tableau de bord, vos questions.",
  ctaText: "Obtenir ma démo gratuite",
  ctaHref: "/demo-gratuite",
  disclaimer: "Aucun engagement. Aucune carte de crédit.",
} as const;

export function CtaSection({
  title = DEFAULT_PROPS.title,
  subtitle = DEFAULT_PROPS.subtitle,
  ctaText = DEFAULT_PROPS.ctaText,
  ctaHref = DEFAULT_PROPS.ctaHref,
  disclaimer = DEFAULT_PROPS.disclaimer,
}: CtaSectionProps) {
  return (
    <section className="bg-primary-dark py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimateOnScroll className="flex flex-col items-center gap-8 text-center">
          <h2 className="font-display text-h1 font-normal text-text-inverse leading-[1.15]">
            {title}
          </h2>
          <p className="max-w-xl font-body text-[1.125rem] leading-[1.6] text-text-inverse/90">
            {subtitle}
          </p>
          <Button
            href={ctaHref}
            variant="primary"
            size="lg"
            className="bg-accent text-white hover:bg-accent-light"
          >
            {ctaText}
          </Button>
          <p className="text-[0.875rem] leading-[1.4] text-text-inverse/70">
            {disclaimer}
          </p>
          <p className="text-[0.875rem] leading-[1.5] text-text-inverse/80">
            Vous préférez écrire?{" "}
            <a
              href="mailto:info@agentvocalquebec.com"
              className="underline underline-offset-2 hover:text-text-inverse"
            >
              info@agentvocalquebec.com
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
