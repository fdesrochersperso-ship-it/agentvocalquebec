"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ClipboardList,
  Filter,
  RefreshCw,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const USE_CASES = [
  {
    icon: AlertTriangle,
    title: "Dispatch d'urgence",
    description:
      "Fuite d'eau à 22h? L'IA évalue la gravité, collecte l'adresse et vous envoie une notification prioritaire. Vous décidez si vous y allez.",
  },
  {
    icon: ClipboardList,
    title: "Prise de soumissions",
    description:
      "L'IA collecte les informations du projet — adresse, type de travaux, budget approximatif, photos si envoyées par texto — avant que vous rappeliez. Vous arrivez préparé.",
  },
  {
    icon: Filter,
    title: "Filtrage intelligent",
    description:
      "L'IA sépare les vrais clients des vendeurs de pub, des sondages et des erreurs de numéro. Vous recevez seulement ce qui compte.",
  },
  {
    icon: RefreshCw,
    title: "Suivi automatique",
    description:
      "Un prospect a appelé mais n'a pas booké? L'IA peut le rappeler après 48h pour faire un suivi. Aucun lead perdu.",
  },
] as const;

export function UseCases() {
  return (
    <SectionWrapper>
      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {USE_CASES.map((useCase) => (
            <motion.div key={useCase.title} variants={fadeInUp}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 text-accent">
                  <useCase.icon size={24} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-body text-lg font-bold text-primary">
                  {useCase.title}
                </h3>
                <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                  {useCase.description}
                </p>
              </Card>
            </motion.div>
          ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
