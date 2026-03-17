"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  PhoneMissed,
  DollarSign,
  CalendarX,
  CalendarCheck,
  Shield,
  Bell,
  ListChecks,
  UserPlus,
  PhoneForwarded,
  Clock,
  Lock,
  Moon,
  Sparkles,
  CircleDollarSign,
  Heart,
  EyeOff,
  Users,
  Hammer,
  AlertTriangle,
  ClipboardList,
  Filter,
  RotateCcw,
  Calendar,
  MessageSquare,
  Wrench,
  PhoneCall,
  Search,
  Car,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  PhoneMissed,
  DollarSign,
  CalendarX,
  CalendarCheck,
  Shield,
  Bell,
  ListChecks,
  UserPlus,
  PhoneForwarded,
  Clock,
  Lock,
  Moon,
  Sparkles,
  CircleDollarSign,
  Heart,
  EyeOff,
  Users,
  Hammer,
  AlertTriangle,
  ClipboardList,
  Filter,
  RotateCcw,
  Calendar,
  MessageSquare,
  Wrench,
  PhoneCall,
  Search,
  Car,
  UtensilsCrossed,
};
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";
import { AudioDemo } from "@/components/demo/audio-demo";
import { CtaSection } from "@/components/sections/cta-section";
import { cn } from "@/lib/utils";

const MIN_CALLS = 1;
const MAX_CALLS = 30;
const WEEKS_PER_MONTH = 4;

export interface IndustryPageProps {
  badge: string;
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  painPoints: { icon: string; title: string; description: string }[];
  useCases: { icon: string; title: string; description: string }[];
  integrations: string[];
  faq: { question: string; answer: string }[];
  calculatorConfig?: { valuePerCall: number; label: string };
  painPointsTitle?: string;
  useCasesTitle?: string;
  integrationsTitle?: string;
  integrationsNote?: string;
  faqTitle?: string;
  calculatorTitle?: string;
  calculatorSliderLabel?: string;
  calculatorCtaText?: string;
}

const DEFAULT_SECTION_TITLES = {
  painPointsTitle: "Les défis de votre secteur",
  useCasesTitle: "Ce que notre agent fait pour vous",
  integrationsTitle: "Intégrations",
  integrationsNote: "Votre logiciel n'est pas listé? Contactez-nous.",
  faqTitle: "Questions fréquentes",
  calculatorTitle: "Combien vous coûtent vos appels manqués?",
  calculatorSliderLabel: "Appels manqués par semaine",
  calculatorCtaText: "Arrêtez de perdre de l'argent",
} as const;

export function IndustryPageTemplate({
  badge,
  title,
  subtitle,
  stats,
  painPoints,
  useCases,
  integrations,
  faq,
  calculatorConfig,
  painPointsTitle = DEFAULT_SECTION_TITLES.painPointsTitle,
  useCasesTitle = DEFAULT_SECTION_TITLES.useCasesTitle,
  integrationsTitle = DEFAULT_SECTION_TITLES.integrationsTitle,
  integrationsNote = DEFAULT_SECTION_TITLES.integrationsNote,
  faqTitle = DEFAULT_SECTION_TITLES.faqTitle,
  calculatorTitle = DEFAULT_SECTION_TITLES.calculatorTitle,
  calculatorCtaText = DEFAULT_SECTION_TITLES.calculatorCtaText,
  calculatorSliderLabel = DEFAULT_SECTION_TITLES.calculatorSliderLabel,
}: IndustryPageProps) {
  const [calculatorValue, setCalculatorValue] = useState(10);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const monthlyLoss = calculatorConfig
    ? calculatorValue * calculatorConfig.valuePerCall * WEEKS_PER_MONTH
    : 0;

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="order-1 w-full lg:order-2 lg:w-[40%]">
              <AnimateOnScroll direction="right" delay={0.3}>
                <AudioDemo />
              </AnimateOnScroll>
            </div>
            <div className="order-2 flex flex-col gap-6 lg:order-1 lg:w-[60%]">
              <AnimateOnScroll delay={0}>
                <Badge>{badge}</Badge>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h1
                  className={cn(
                    "font-display font-normal text-primary leading-[1.1]",
                    "text-3xl md:text-hero"
                  )}
                >
                  {title}
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <p className="max-w-xl text-[1.125rem] leading-[1.6] text-text-secondary">
                  {subtitle}
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.3}>
                <Button href="/demo" variant="primary" size="lg">
                  Réserver une démo
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats band */}
      <section className="border-y border-border bg-surface pt-8 pb-12 lg:pt-8 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 font-mono text-stat font-bold text-accent">
                  {stat.value}
                </div>
                <p className="max-w-[200px] text-sm text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Pain points */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            {painPointsTitle}
          </motion.h2>
          <StaggerContainer
            className={
              painPoints.length <= 3
                ? "flex flex-col gap-6"
                : "grid grid-cols-1 gap-6 md:grid-cols-2"
            }
          >
            {painPoints.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="flex gap-4">
                  <div className="shrink-0 text-accent">
                    {Icon && <Icon size={24} strokeWidth={1.5} aria-hidden />}
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
            );
            })}
          </StaggerContainer>
        </StaggerContainer>
      </SectionWrapper>

      {/* 4. Use cases */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            {useCasesTitle}
          </motion.h2>
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => {
              const Icon = ICON_MAP[useCase.icon];
              return (
              <motion.div key={useCase.title} variants={fadeInUp}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 text-accent">
                    {Icon && <Icon size={24} strokeWidth={1.5} aria-hidden />}
                  </div>
                  <h3 className="font-body text-lg font-bold text-primary">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            );
            })}
          </StaggerContainer>
        </StaggerContainer>
      </SectionWrapper>

      {/* 5. Integrations */}
      <SectionWrapper>
        <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            {integrationsTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            {integrations.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 font-body text-sm font-semibold text-primary"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-[1rem] leading-[1.5] text-text-secondary">
            {integrationsNote}
          </p>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* 6. Calculator (optional) */}
      {calculatorConfig && (
        <SectionWrapper>
          <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
            <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
              {calculatorTitle}
            </h2>
            <div className="max-w-xl space-y-6">
              <div>
                <label
                  htmlFor="calls-slider"
                  className="mb-2 block font-body text-base font-medium text-primary"
                >
                  {calculatorSliderLabel}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="calls-slider"
                    type="range"
                    min={MIN_CALLS}
                    max={MAX_CALLS}
                    value={calculatorValue}
                    onChange={(e) =>
                      setCalculatorValue(Number(e.target.value))
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
                  />
                  <span className="font-mono text-lg font-bold text-primary tabular-nums">
                    {calculatorValue}
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-6">
                <p className="font-body text-[1.125rem] text-text-primary">
                  Ça représente environ{" "}
                  <span className="font-mono text-stat font-bold text-accent">
                    {monthlyLoss.toLocaleString("fr-CA")}$
                  </span>{" "}
                  de revenus perdus par mois.
                </p>
              </div>
              <p className="text-[0.875rem] leading-[1.4] text-text-muted">
                {calculatorConfig.label}
              </p>
              <Button
                href="/demo"
                variant="tertiary"
                size="default"
                className="group w-fit"
              >
                <span className="inline-flex items-center gap-1">
                  {calculatorCtaText}
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Button>
            </div>
          </AnimateOnScroll>
        </SectionWrapper>
      )}

      {/* 7. FAQ */}
      <SectionWrapper>
        <AnimateOnScroll className="flex flex-col">
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15] mb-8 lg:mb-10">
            {faqTitle}
          </h2>
          <div className="divide-y divide-border">
            {faq.map((item, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() =>
                      setFaqOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 text-left font-body text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
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
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
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

      {/* 8. CTA */}
      <CtaSection />
    </>
  );
}
