"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sparkles,
  HardHat,
  Car,
  UtensilsCrossed,
  Shield,
  Briefcase,
  Home,
  Scissors,
  Scale,
  Activity,
  Hotel,
  SprayCan,
  ArrowRight,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const FEATURED_INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Cliniques dentaires",
    description:
      "Cliniques, dentistes — automatisez la prise de rendez-vous, le triage téléphonique et les rappels patients 24/7.",
    badges: ["35% moins d'appels manqués", "500$+ sauvés par appel"],
    href: "/industries/cliniques-dentaires",
  },
  {
    icon: Sparkles,
    title: "Médico-esthétique",
    description:
      "Botox, laser, fillers — consultations, questions traitements, suivi post-traitement. Confidentialité totale.",
    badges: ["2 000$+ par rendez-vous", "Zéro concurrence IA au QC"],
    href: "/industries/medico-esthetique",
  },
  {
    icon: HardHat,
    title: "Construction & métiers",
    description:
      "Plomberie, HVAC, électriciens, rénovation — dispatch d'urgence, prise de soumissions et filtrage d'appels.",
    badges: ["77% pénurie main-d'œuvre", "126 000$ perdus/an en appels manqués"],
    href: "/industries/construction",
  },
  {
    icon: Car,
    title: "Garages automobiles",
    description:
      "Rendez-vous d'entretien, statut des réparations, rappels de service — pendant que votre équipe travaille.",
    badges: ["50% plus de rendez-vous", "Zéro attente téléphonique"],
    href: "/industries/garages-automobiles",
  },
] as const;

const ALL_INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Réservations, commandes à emporter, horaires.",
    href: "/industries/restaurants",
  },
  {
    icon: Shield,
    title: "Assurances",
    description: "Sinistres, renseignements, prise de rendez-vous.",
    href: "/industries/assurances",
  },
  {
    icon: Briefcase,
    title: "Services professionnels",
    description: "Comptables, avocats, consultants.",
    href: "/industries/services-professionnels",
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Visites, renseignements, prise de rendez-vous.",
    href: "/industries/immobilier",
  },
  {
    icon: Scissors,
    title: "Salons & beauté",
    description: "Coiffure, esthétique, barbier.",
    href: "/industries/salons-beaute",
  },
  {
    icon: Scale,
    title: "Services juridiques",
    description: "Consultations, prises de rendez-vous.",
    href: "/industries/services-juridiques",
  },
  {
    icon: Activity,
    title: "Physio / Chiro",
    description: "Prise de rendez-vous par spécialité.",
    href: "/industries/physio-chiro",
  },
  {
    icon: Hotel,
    title: "Hôtels & hébergement",
    description: "Réservations, disponibilités, renseignements.",
    href: "/industries/hotellerie",
  },
  {
    icon: SprayCan,
    title: "Nettoyage & entretien",
    description: "Devis, planification, suivi.",
    href: "/industries/nettoyage",
  },
] as const;

export function IndustriesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <AnimateOnScroll>
            <Badge className="mb-6">Solutions par industrie</Badge>
            <h1 className="font-display text-3xl font-normal text-primary leading-[1.1] md:text-hero">
              Un agent vocal IA adapté à votre industrie
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.125rem] leading-[1.6] text-text-secondary">
              Chaque secteur a ses défis. Notre agent s'adapte à vos processus,
              votre vocabulaire et vos besoins.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries en vedette */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            Industries en vedette
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURED_INDUSTRIES.map((industry) => (
              <motion.div
                key={industry.href}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link href={industry.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 text-accent">
                      <industry.icon size={32} strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="font-body text-xl font-bold text-primary">
                      {industry.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                      {industry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {industry.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 font-body text-sm font-medium text-success"
                        >
                          <Check size={14} strokeWidth={2} aria-hidden />
                          {badge}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 font-body text-base font-semibold text-accent">
                      Voir la solution complète
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </SectionWrapper>

      {/* Toutes nos industries */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.div variants={fadeInUp}>
            <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
              Toutes nos industries
            </h2>
            <p className="mt-4 text-[1.125rem] leading-[1.6] text-text-secondary">
              Notre agent vocal IA s'adapte à de nombreux secteurs d'activité
            </p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ALL_INDUSTRIES.map((industry) => (
              <motion.div key={industry.href} variants={fadeInUp}>
                <Link
                  href={industry.href}
                  className="group flex h-full min-h-[120px] flex-col rounded-xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-3 text-accent">
                    <industry.icon size={24} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-body text-lg font-bold text-primary">
                    {industry.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-[1.5] text-text-secondary">
                    {industry.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold text-accent">
                    En savoir plus
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </StaggerContainer>
      </SectionWrapper>

      {/* Votre industrie n'est pas listée? */}
      <SectionWrapper>
        <AnimateOnScroll className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-h2 font-normal text-primary leading-[1.2]">
            Votre industrie n'est pas listée?
          </h2>
          <p className="max-w-2xl text-[1.125rem] leading-[1.6] text-text-secondary">
            Notre agent vocal peut être adapté pour n'importe quelle entreprise
            de services. Contactez-nous pour discuter de votre cas.
          </p>
          <Button href="/demo-gratuite" variant="primary" size="lg">
            Contactez-nous
          </Button>
        </AnimateOnScroll>
      </SectionWrapper>
    </>
  );
}
