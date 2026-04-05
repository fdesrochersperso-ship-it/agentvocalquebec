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
  Droplets,
  Snowflake,
  Zap,
  PawPrint,
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
  Droplets,
  Snowflake,
  Zap,
  PawPrint,
};
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";
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
  painPointsTitle: "Les réalités de votre secteur",
  useCasesTitle: "Ce que l'agent prend en charge",
  integrationsTitle: "Intégrations",
  integrationsNote: "Votre logiciel n'est pas là? On s'ajuste.",
  faqTitle: "Questions fréquentes",
  calculatorTitle: "Combien vos appels manqués vous coûtent pour vrai?",
  calculatorSliderLabel: "Appels manqués par semaine",
  calculatorCtaText: "Arrêtez d'en laisser passer",
} as const;

const INDUSTRY_HERO_BACKGROUNDS: Record<
  string,
  { src: string; position: string }
> = {
  "Cliniques dentaires": {
    src: "/industry-heroes/dental.jpg",
    position: "center right",
  },
  "Cliniques vétérinaires": {
    src: "/industry-heroes/veterinary.jpg",
    position: "center center",
  },
  "Physio / Chiro": {
    src: "/industry-heroes/physio.jpg",
    position: "center center",
  },
  "Médico-esthétique": {
    src: "/industry-heroes/beauty.jpg",
    position: "center center",
  },
  "Salons & beauté": {
    src: "/industry-heroes/beauty.jpg",
    position: "center center",
  },
  Restaurants: {
    src: "/industry-heroes/restaurant.jpg",
    position: "center center",
  },
  "Hôtels & hébergement": {
    src: "/industry-heroes/hospitality.jpg",
    position: "center center",
  },
  Construction: {
    src: "/industry-heroes/construction.jpg",
    position: "center center",
  },
  Plomberie: {
    src: "/industry-heroes/plumbing.jpg",
    position: "center center",
  },
  "Chauffage & climatisation": {
    src: "/industry-heroes/hvac.jpg",
    position: "center center",
  },
  "Électriciens": {
    src: "/industry-heroes/trades.jpg",
    position: "center center",
  },
  "Nettoyage & entretien": {
    src: "/industry-heroes/cleaning.jpg",
    position: "center center",
  },
  Extermination: {
    src: "/industry-heroes/extermination.jpg",
    position: "center center",
  },
  Toiture: {
    src: "/industry-heroes/construction.jpg",
    position: "center center",
  },
  Serrurerie: {
    src: "/industry-heroes/locksmith.jpg",
    position: "center center",
  },
  Paysagement: {
    src: "/industry-heroes/landscaping.jpg",
    position: "center center",
  },
  "Déménagement": {
    src: "/industry-heroes/moving.jpg",
    position: "center center",
  },
  "Garages automobiles": {
    src: "/industry-heroes/garage.jpg",
    position: "center center",
  },
  Assurances: {
    src: "/industry-heroes/office.jpg",
    position: "center center",
  },
  "Services professionnels": {
    src: "/industry-heroes/office.jpg",
    position: "center center",
  },
  "Services juridiques": {
    src: "/industry-heroes/office.jpg",
    position: "center center",
  },
  Immobilier: {
    src: "/industry-heroes/real-estate.jpg",
    position: "center center",
  },
};

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
  const heroBackground = INDUSTRY_HERO_BACKGROUNDS[badge] ?? {
    src: "/industry-heroes/office.jpg",
    position: "center center",
  };

  const monthlyLoss = calculatorConfig
    ? calculatorValue * calculatorConfig.valuePerCall * WEEKS_PER_MONTH
    : 0;

  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden pb-10 pt-24 md:pt-28 lg:pb-14 lg:pt-32">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${heroBackground.src}')`,
            backgroundPosition: heroBackground.position,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,21,36,0.84)_0%,rgba(18,31,50,0.76)_28%,rgba(27,40,61,0.48)_52%,rgba(255,255,255,0.1)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(8,14,26,0.54)_0%,rgba(8,14,26,0.16)_60%,rgba(8,14,26,0)_100%)]"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="relative z-10 flex min-h-[430px] max-w-3xl flex-col gap-6 py-10 md:min-h-[500px] md:py-14 lg:min-h-[560px] lg:py-18">
            <AnimateOnScroll delay={0}>
              <Badge className="w-fit border-white/20 bg-white/10 text-white backdrop-blur-sm">
                {badge}
              </Badge>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1
                className={cn(
                  "font-display font-normal text-white leading-[1.05]",
                  "text-3xl md:text-hero"
                )}
              >
                {title}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="max-w-2xl text-[1.125rem] leading-[1.6] text-white/88">
                {subtitle}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <Button href="/demo-gratuite" variant="primary" size="lg" className="w-fit">
                Réserver une démo
              </Button>
            </AnimateOnScroll>
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
                  Ça vous coûte autour de{" "}
                  <span className="font-mono text-stat font-bold text-accent">
                    {monthlyLoss.toLocaleString("fr-CA")}$
                  </span>{" "}
                  en revenus perdus par mois.
                </p>
              </div>
              <p className="text-[0.875rem] leading-[1.4] text-text-muted">
                {calculatorConfig.label}
              </p>
              <Button
                href="/demo-gratuite"
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
