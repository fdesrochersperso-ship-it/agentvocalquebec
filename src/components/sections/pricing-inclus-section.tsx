"use client";

import { motion } from "framer-motion";
import { Phone, Mic, Bell, MessageSquare, Clock, BarChart3 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const INCLUDED_ITEMS = [
  { icon: Phone, label: "Numéro de téléphone dédié" },
  { icon: Mic, label: "Enregistrements d'appels" },
  { icon: Bell, label: "Notifications email/SMS" },
  { icon: MessageSquare, label: "Résumés de conversation" },
  { icon: Clock, label: "Disponibilité 24/7" },
  { icon: BarChart3, label: "Tableau de bord" },
] as const;

export function PricingInclusSection() {
  return (
    <SectionWrapper className="pt-2 pb-2 lg:pt-4 lg:pb-4">
      <StaggerContainer className="flex flex-col gap-4 lg:gap-6">
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Inclus dans tous les forfaits
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {INCLUDED_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
            >
              <div className="shrink-0 text-accent">
                <item.icon size={20} strokeWidth={1.5} aria-hidden />
              </div>
              <span className="font-body text-base font-semibold text-primary">
                {item.label}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </StaggerContainer>
    </SectionWrapper>
  );
}
