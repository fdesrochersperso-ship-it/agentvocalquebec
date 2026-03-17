"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const SUB_VERTICALS = [
  {
    title: "Dentaire",
    useCases: [
      "Prise de rendez-vous : nettoyage, urgence dentaire, nouveau patient",
      'Questions d\'assurance : "Est-ce que mon plan couvre les couronnes?"',
      "Rappels de rendez-vous et confirmations automatiques",
      "Gestion de la liste d'attente pour les annulations",
    ],
  },
  {
    title: "Médico-esthétique",
    useCases: [
      "Consultation initiale : Botox, laser, fillers, micro-needling",
      "Questions sur les traitements, les prix et les contre-indications",
      "Suivi post-traitement et rappels",
      "Confidentialité totale — l'IA est discrète",
    ],
  },
  {
    title: "Physio / Chiro / Optométrie",
    useCases: [
      "Prise de rendez-vous par spécialité ou thérapeute",
      "Vérification des disponibilités en temps réel",
      "Questions sur les couvertures d'assurance collective",
    ],
  },
] as const;

export function SubVerticals() {
  return (
    <SectionWrapper>
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SUB_VERTICALS.map((vertical) => (
            <motion.div key={vertical.title} variants={fadeInUp}>
              <Card className="flex h-full flex-col">
                <h3 className="font-body text-xl font-bold text-primary">
                  {vertical.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {vertical.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex gap-3 text-[1rem] leading-[1.5] text-text-secondary"
                    >
                      <Check
                        size={20}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden
                      />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
