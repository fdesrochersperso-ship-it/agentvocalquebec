"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "Général",
    items: [
      {
        question: "Est-ce que les gens vont savoir que c'est une IA?",
        answer:
          "La voix est naturelle et les conversations sont fluides. Certains le remarqueront, mais l'important c'est que leur appel est pris en charge immédiatement et professionnellement.",
      },
      {
        question: "Est-ce que je garde mon numéro de téléphone?",
        answer:
          "Oui. On utilise un transfert d'appel depuis votre numéro existant. Aucun changement pour vos clients.",
      },
      {
        question: "Qu'est-ce qui arrive si l'IA ne sait pas répondre?",
        answer:
          "Elle transfère l'appel à vous ou à un membre de votre équipe. Vous définissez les règles.",
      },
      {
        question: "Ça prend combien de temps pour être opérationnel?",
        answer:
          "La configuration de base prend 30 minutes. On peut être live en 48 heures.",
      },
      {
        question: "C'est quoi la différence avec un service de réponse traditionnel?",
        answer:
          "Un service humain coûte 2-5x plus cher, a des heures limitées, et peut pas prendre 5 appels en même temps. Notre agent est disponible 24/7 et gère des appels illimités simultanément.",
      },
    ],
  },
  {
    title: "Données & sécurité",
    items: [
      {
        question: "Mes données sont où?",
        answer:
          "Au Canada. On est conforme à la Loi 25 du Québec. Vos données ne sortent jamais du pays.",
      },
      {
        question: "Est-ce conforme à la Loi 25?",
        answer:
          "Oui. On informe les appelants, on permet de contester les décisions automatisées, et les données sont hébergées au Canada.",
      },
      {
        question: "Est-ce que les appels sont enregistrés?",
        answer:
          "Oui, avec consentement. Les enregistrements sont disponibles dans votre tableau de bord et supprimés selon votre politique de rétention.",
      },
    ],
  },
  {
    title: "Engagement & facturation",
    items: [
      {
        question: "Y a-tu des frais de mise en service?",
        answer:
          "Non. La configuration initiale est incluse — on vous accompagne pour être opérationnel sans frais de démarrage cachés.",
      },
      {
        question: "Je suis engagé pour combien de temps?",
        answer:
          "Aucun engagement long terme. Vous discutez des modalités avec nous lors de la démo; en général c'est flexible, mois par mois, selon votre situation.",
      },
      {
        question: "C'est quoi une minute d'appel?",
        answer:
          "Une minute d'appel, c'est du moment où l'agent décroche jusqu'à la fin de la conversation. Les silences courts comptent, pas le temps de sonnerie.",
      },
      {
        question: "Comment ça fonctionne si mon volume d'appels augmente?",
        answer:
          "Les modalités (forfait, utilisation, facturation) vous sont présentées clairement lors de la démo et dans votre entente. Vous voyez l'usage en temps réel dans le tableau de bord — pas de mauvaise surprise.",
      },
      {
        question: "Est-ce qu'on peut ajuster l'offre plus tard?",
        answer:
          "Oui. On adapte souvent la solution quand votre volume ou vos besoins changent. On en parle lors de votre démo ou avec votre contact chez Agent Vocal Québec.",
      },
    ],
  },
];

export function FaqPageContent() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      {FAQ_CATEGORIES.map((category, categoryIndex) => (
        <SectionWrapper
          key={category.title}
          className={categoryIndex === 0 ? "pt-4 pb-0 lg:pt-6 lg:pb-0" : "pt-8 pb-0 lg:pt-10 lg:pb-0"}
        >
          <AnimateOnScroll className="flex flex-col">
            <h2 className="font-display text-h3 font-normal text-primary leading-[1.3] mb-6 lg:mb-8">
              {category.title}
            </h2>

            <div className="divide-y divide-border">
              {category.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isOpen = openKey === key;

                return (
                  <div key={key} className="py-4 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="flex w-full items-center justify-between gap-4 text-left font-body text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                      id={`faq-question-${key}`}
                    >
                      {item.question}
                      <ChevronDown
                        size={24}
                        strokeWidth={1.5}
                        className={cn(
                          "shrink-0 text-accent transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${key}`}
                          role="region"
                          aria-labelledby={`faq-question-${key}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-[1.125rem] leading-[1.6] text-text-secondary">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper className="pt-12 pb-8 lg:pt-16 lg:pb-12">
        <AnimateOnScroll className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-h2 font-normal text-primary leading-[1.2]">
            Vous avez d'autres questions?
          </h2>
          <p className="text-[1.125rem] leading-[1.6] text-text-secondary">
            Contactez-nous.
          </p>
          <Button href="/demo-gratuite" variant="primary" size="lg">
            Réserver une démo
          </Button>
        </AnimateOnScroll>
      </SectionWrapper>
    </>
  );
}
