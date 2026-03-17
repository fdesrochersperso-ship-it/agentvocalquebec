"use client";

import { motion } from "framer-motion";
import { Settings, PhoneIncoming, BarChart3 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const STEPS = [
  {
    number: 1,
    icon: Settings,
    title: "On apprend votre business",
    description:
      "On vous pose les questions importantes : vos services, vos horaires, vos questions fréquentes, vos règles de transfert. On configure la voix, le ton et le vocabulaire de votre agent vocal IA. Aucun changement de numéro de téléphone — on branche un simple transfert d'appel.",
  },
  {
    number: 2,
    icon: PhoneIncoming,
    title: "Chaque appel, pris en charge",
    description:
      "Notre agent vocal IA décroche en moins de 2 secondes. Il salue vos clients en québécois naturel, comprend ce qu'ils veulent, répond aux questions courantes, et prend les rendez-vous directement dans votre agenda. Si la situation demande un humain, il transfère l'appel à la bonne personne.",
  },
  {
    number: 3,
    icon: BarChart3,
    title: "Tout dans votre boîte de réception",
    description:
      "Après chaque appel, vous recevez un résumé clair : qui a appelé, pourquoi, et ce qui a été fait. Les rendez-vous sont dans votre calendrier. Les urgences sont signalées immédiatement. Vous avez accès à un tableau de bord pour voir l'historique et les statistiques.",
  },
] as const;

export function StepsDetailed() {
  return (
    <SectionWrapper>
      <StaggerContainer
        className="relative space-y-8 lg:space-y-10"
        staggerDelay={0.15}
      >
        {/* Vertical dashed connecting line */}
        <div
          className="absolute left-6 top-12 bottom-12 w-px border-l-2 border-dashed border-border md:left-8"
          aria-hidden
        />

        {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Circle with icon on the left */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent md:h-14 md:w-14">
                <step.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-white md:w-7 md:h-7"
                  aria-hidden
                />
              </div>

              {/* Content on the right */}
              <div className="flex-1 pt-0.5">
                <div className="mb-2 font-mono text-sm font-bold text-accent">
                  Étape {step.number}
                </div>
                <h3 className="font-body text-xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1.125rem] leading-[1.6] text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
