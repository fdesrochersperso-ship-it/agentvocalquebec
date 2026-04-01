"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Link2,
  Shield,
  PhoneForwarded,
  Users,
  FileText,
  Languages,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const FEATURES = [
  {
    icon: Mic,
    title: "Parle en québécois naturel",
    description:
      "Pas du français de France. Pas une voix trop lisse. L'agent parle comme votre monde : naturel, chaleureux et crédible.",
  },
  {
    icon: Link2,
    title: "Se branche à vos outils actuels",
    description:
      "On se branche sur les systèmes que vous utilisez déjà. Dentitek, Cliniciel, Medesync, Google Calendar et plus. Pas besoin de repartir à zéro.",
  },
  {
    icon: Shield,
    title: "Conforme aux lois du Québec",
    description:
      "Loi 25, Loi 96, données hébergées au Canada. Rien de flou, rien dans une zone grise.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfère à votre équipe au besoin",
    description:
      "Quand ça prend un humain, l'agent passe l'appel à la bonne personne. Urgences, situations délicates, demandes complexes : votre équipe prend le relais tout de suite.",
  },
  {
    icon: Users,
    title: "Gère plusieurs appels en même temps",
    description:
      "Cinq personnes appellent en même temps? Les cinq se font répondre. Pas d'attente, pas de boîte vocale, pas de « veuillez patienter ».",
  },
  {
    icon: FileText,
    title: "Résume chaque appel automatiquement",
    description:
      "Chaque appel vous arrive en résumé par courriel. Vous voyez ce qui s'est dit sans réécouter chaque appel un par un.",
  },
  {
    icon: Languages,
    title: "Bilingue français-anglais",
    description:
      "L'agent passe du français à l'anglais selon la personne au bout de la ligne.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description:
      "Jour, soir, nuit, fin de semaine, fériés. L'agent est là quand vos clients appellent.",
  },
  {
    icon: Mic,
    title: "Plus de 50 voix disponibles",
    description:
      "Choisissez le ton et la voix qui collent vraiment à votre entreprise.",
  },
] as const;

export function FeaturesSection() {
  return (
    <SectionWrapper>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Ce que fait notre agent vocal IA
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 text-accent">
                  <feature.icon size={24} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-body text-lg font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </StaggerContainer>
    </SectionWrapper>
  );
}
