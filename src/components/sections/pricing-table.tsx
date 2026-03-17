"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "149",
    priceSuffix: "$/mois",
    description: "Pour les petites entreprises et les métiers.",
    features: [
      "200 minutes d'appels incluses",
      "1 numéro de téléphone",
      "Résumés d'appels par courriel",
      "FAQ automatisée",
      "Support par courriel",
      "0.30$/minute supplémentaire",
    ],
    ctaText: "Commencer",
    ctaHref: "/demo",
    ctaVariant: "secondary" as const,
    popular: false,
  },
  {
    id: "professionnel",
    name: "Professionnel",
    price: "397",
    priceSuffix: "$/mois",
    description: "Pour les cliniques et les entreprises en croissance.",
    features: [
      "500 minutes d'appels incluses",
      "Prise de rendez-vous automatique",
      "Intégrations PMS/EMR",
      "Rappels et confirmations",
      "Multi-lignes simultanées",
      "Support prioritaire",
      "0.25$/minute supplémentaire",
    ],
    ctaText: "Réserver une démo",
    ctaHref: "/demo",
    ctaVariant: "primary" as const,
    popular: true,
  },
  {
    id: "entreprise",
    name: "Entreprise",
    price: "Sur mesure",
    priceSuffix: "",
    description: "Pour les multi-succursales et les besoins complexes.",
    features: [
      "Minutes illimitées",
      "Intégrations personnalisées",
      "Account manager dédié",
      "SLA garanti",
      "Formation de votre équipe",
      "Contactez-nous pour un devis",
    ],
    ctaText: "Nous contacter",
    ctaHref: "/demo",
    ctaVariant: "secondary" as const,
    popular: false,
  },
] as const;

export interface PricingTableProps {
  className?: string;
}

export function PricingTable({ className }: PricingTableProps = {}) {
  return (
    <SectionWrapper className={className}>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Mobile: Professionnel first (order-1), then Essentiel (order-2), then Entreprise (order-3) */}
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              className={cn(
                "flex min-h-[480px] flex-col rounded-xl bg-surface p-8",
                plan.popular
                  ? "order-1 border-2 border-accent shadow-lg md:order-none"
                  : plan.id === "essentiel"
                    ? "order-2 border border-border shadow md:order-none"
                    : "order-3 border border-border shadow md:order-none"
              )}
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="font-body text-xl font-bold text-primary">
                  {plan.name}
                </h3>
                {plan.popular && (
                  <Badge className="shrink-0">Populaire</Badge>
                )}
              </div>

              <div className="mb-2 font-mono text-h1 font-bold text-primary leading-[1.15]">
                {plan.price}
                {plan.priceSuffix}
              </div>

              <p className="mb-6 text-[1rem] leading-[1.5] text-text-secondary">
                {plan.description}
              </p>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-[1rem] leading-[1.5] text-text-primary"
                  >
                    <Check
                      size={20}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-success"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={plan.ctaHref}
                variant={plan.ctaVariant}
                size="lg"
                className="w-full"
              >
                {plan.ctaText}
              </Button>
            </motion.div>
          ))}
        </StaggerContainer>

        <motion.p
          variants={fadeInUp}
          className="text-center text-[0.875rem] leading-[1.4] text-text-muted"
        >
          Prix en dollars canadiens. Taxes en sus.
        </motion.p>
      </StaggerContainer>
    </SectionWrapper>
  );
}
