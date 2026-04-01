"use client";

import { motion } from "framer-motion";
import { PhoneMissed, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const PAIN_POINTS = [
  {
    icon: PhoneMissed,
    title: "Appels manqués",
    description:
      "35 % des appels en clinique dentaire restent sans réponse. En construction, c'est encore pire : le monde est sur le chantier.",
  },
  {
    icon: DollarSign,
    title: "Revenus perdus",
    description:
      "Un appel manqué en clinique dentaire, c'est souvent 500 $ de soins qui ne se font pas. Un appel de soumission en plomberie, ça peut être un contrat de 2 000 $ à 15 000 $.",
  },
  {
    icon: Clock,
    title: "Heures de fermeture",
    description:
      "40 % des appels entrent en dehors des heures d'ouverture. Le soir, la fin de semaine, les jours fériés. Si personne répond, l'argent rentre pas.",
  },
] as const;

export function ProblemSection() {
  return (
    <SectionWrapper>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        {/* Section title */}
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Vos appels manqués vous coûtent cher
        </motion.h2>

        {/* 2 columns: narrative left, cards right. Mobile: narrative first, then cards */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: narrative paragraph */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 space-y-6 lg:max-w-[45%]"
          >
            <p className="text-[1.125rem] leading-[1.6] text-text-primary">
              Votre réceptionniste est déjà au téléphone avec un patient. Deux
              autres lignes sonnent. Une personne raccroche et appelle
              ailleurs. L&apos;autre laisse un message que personne n&apos;écoutera
              avant demain matin.
            </p>
            <p className="text-[1.125rem] leading-[1.6] text-text-primary">
              Ça arrive tous les jours. Et chaque appel manqué, c&apos;est un
              rendez-vous perdu, un client frustré ou un contrat qui vous
              glisse entre les doigts.
            </p>
          </motion.div>

          {/* Right: 3 pain point cards */}
          <StaggerContainer className="flex flex-1 flex-col gap-6">
            {PAIN_POINTS.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="flex gap-4">
                  <div className="shrink-0 text-accent">
                    <item.icon size={24} strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-body text-lg font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[1rem] leading-[1.5] text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </StaggerContainer>
    </SectionWrapper>
  );
}
