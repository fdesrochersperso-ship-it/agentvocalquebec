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
          "La voix sonne naturelle et la conversation suit bien. Certaines personnes vont s'en rendre compte, d'autres non. L'important, c'est qu'elles se font répondre tout de suite et comme du monde.",
      },
      {
        question: "Est-ce que je garde mon numéro de téléphone?",
        answer:
          "Oui. On utilise un transfert d'appel depuis votre numéro existant. Aucun changement pour vos clients.",
      },
      {
        question: "Qu'est-ce qui arrive si l'IA ne sait pas répondre?",
        answer:
          "Elle vous transfère l'appel, ou elle le passe à quelqu'un de votre équipe. C'est vous qui fixez les règles.",
      },
      {
        question: "Ça prend combien de temps avant d'être en ligne?",
        answer:
          "La mise en place de base prend une trentaine de minutes. En général, on peut être en ligne en 48 heures.",
      },
      {
        question: "C'est quoi la différence avec un service de réponse traditionnel?",
        answer:
          "Un service humain coûte 2 à 5 fois plus cher, a des heures limitées et ne peut pas prendre plusieurs appels d'un coup. Notre agent répond 24/7 et peut en gérer plusieurs en même temps.",
      },
    ],
  },
  {
    title: "Données & sécurité",
    items: [
      {
        question: "Mes données sont où?",
        answer:
          "Au Canada. On est conformes à la Loi 25 du Québec et vos données ne sortent pas du pays.",
      },
      {
        question: "Est-ce conforme à la Loi 25?",
        answer:
          "Oui. On informe les appelants, on permet de contester les décisions automatisées et les données sont hébergées au Canada.",
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
          "Non. La mise en place est incluse. On vous accompagne pour que ça roule, sans frais cachés au départ.",
      },
      {
        question: "Je suis engagé pour combien de temps?",
        answer:
          "Pas d'engagement lourd. On discute de la formule pendant la démo; en général, c'est flexible et mois par mois.",
      },
      {
        question: "C'est quoi une minute d'appel?",
        answer:
          "Une minute d'appel, c'est le temps entre le moment où l'agent répond et la fin de la conversation. Les petits silences comptent, pas la sonnerie.",
      },
      {
        question: "Comment ça fonctionne si mon volume d'appels augmente?",
        answer:
          "Les modalités vous sont présentées clairement pendant la démo et dans votre entente. Vous voyez l'usage en temps réel dans le tableau de bord, sans mauvaise surprise.",
      },
      {
        question: "Est-ce qu'on peut ajuster l'offre plus tard?",
        answer:
          "Oui. Si votre volume monte ou que vos besoins changent, on ajuste la solution avec vous.",
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
            Vous avez d&apos;autres questions?
          </h2>
          <p className="text-[1.125rem] leading-[1.6] text-text-secondary">
            Écrivez-nous ou réservez une démo.
          </p>
          <Button href="/demo-gratuite" variant="primary" size="lg">
            Réserver une démo
          </Button>
        </AnimateOnScroll>
      </SectionWrapper>
    </>
  );
}
