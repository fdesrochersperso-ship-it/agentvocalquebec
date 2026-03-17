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
    title: "Parle en québécois authentique",
    description:
      "Pas du français de France. Pas du Radio-Canada poli. Notre IA parle comme vos employés parlent : naturel, chaleureux, professionnel. Vos clients se sentent chez eux.",
  },
  {
    icon: Link2,
    title: "S'intègre à vos logiciels existants",
    description:
      "On s'intègre avec les systèmes que vous utilisez déjà. Dentitek, Cliniciel, Medesync, Google Calendar, et plus. Pas besoin de changer vos habitudes.",
  },
  {
    icon: Shield,
    title: "Conforme à la Loi 25 et la Loi 96",
    description:
      "Loi 25 sur la vie privée. Loi 96 sur la langue française. Données hébergées au Canada. On respecte les règles, vous dormez tranquille.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfère l'appel à votre équipe si nécessaire",
    description:
      "L'IA sait quand passer l'appel à un humain. Urgences médicales, situations délicates, demandes complexes — votre équipe prend le relais en temps réel.",
  },
  {
    icon: Users,
    title: "Gère plusieurs appels en même temps",
    description:
      "Cinq patients appellent en même temps? Les cinq sont pris en charge. Zéro attente, zéro musique d'ascenseur, zéro « veuillez patienter ».",
  },
  {
    icon: FileText,
    title: "Résume chaque appel automatiquement",
    description:
      "Chaque appel est résumé et envoyé par courriel. Vous savez exactement ce qui se passe sans écouter les enregistrements un par un.",
  },
  {
    icon: Languages,
    title: "Bilingue français-anglais",
    description:
      "L'agent détecte la langue de l'appelant et s'adapte automatiquement.",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description:
      "Jour, soir, nuit, fériés. Votre agent ne dort jamais et ne prend pas de vacances.",
  },
  {
    icon: Mic,
    title: "50+ voix disponibles",
    description:
      "Choisissez le ton et la voix qui représentent le mieux votre entreprise.",
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
