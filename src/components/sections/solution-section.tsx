"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const STEPS = [
  {
    number: 1,
    title: "On branche",
    description:
      "On configure votre agent vocal avec vos horaires, vos services, et vos préférences. Vous gardez votre numéro de téléphone — on branche un transfert d'appel, c'est tout.",
  },
  {
    number: 2,
    title: "L'IA répond",
    description:
      "Chaque appel est pris en charge en moins de 2 secondes. L'IA répond aux questions fréquentes, prend les rendez-vous, et transfère les urgences à votre équipe. En québécois naturel.",
  },
  {
    number: 3,
    title: "Vous recevez",
    description:
      "Résumé de chaque appel par courriel ou texto. Nouveaux rendez-vous directement dans votre agenda. Vous gardez le contrôle total.",
  },
] as const;

export function SolutionSection() {
  return (
    <SectionWrapper id="comment-ca-marche">
      <StaggerContainer
        className="flex flex-col gap-8 lg:gap-10"
        staggerDelay={0.15}
      >
        {/* Section title */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Comment ça marche en 3 étapes
        </motion.h2>

        {/* Steps: horizontal on desktop with connecting line */}
        <div className="relative">
          {/* Dashed connecting line - desktop only */}
          <div
            className="absolute left-0 right-0 hidden border-t-2 border-dashed border-accent/40 md:block"
            style={{ top: "24px" }}
            aria-hidden
          />

          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-8 lg:gap-12">
            {STEPS.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative flex flex-1 flex-col items-center text-center md:flex-row md:items-start md:text-left"
              >
                {/* Numbered circle */}
                <div className="relative z-10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-lg font-bold text-white md:mb-6">
                  {step.number}
                </div>

                <div className="md:ml-4 md:flex-1">
                  <h3 className="font-body text-xl font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.5] text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerContainer>
    </SectionWrapper>
  );
}
