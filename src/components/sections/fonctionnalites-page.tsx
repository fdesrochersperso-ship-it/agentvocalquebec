"use client";

import { motion } from "framer-motion";
import {
  Phone,
  CalendarCheck,
  UserCheck,
  Mail,
  Plug,
  Languages,
  PhoneForwarded,
  Mic,
  UserSearch,
  Shield,
  Scale,
  MapPin,
  Bell,
  MessageSquare,
  BarChart3,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";
import { CtaSection } from "@/components/sections/cta-section";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Phone,
    title: "Répond à tous les appels qui entrent",
    description:
      "L'agent répond 24/7 avec un ton naturel, sans faire attendre le monde.",
  },
  {
    icon: CalendarCheck,
    title: "Prend les rendez-vous directement",
    description:
      "Il se synchronise avec votre calendrier pour éviter les doublons et les erreurs.",
  },
  {
    icon: UserCheck,
    title: "Qualifie les prospects à votre façon",
    description:
      "L'agent pose vos vraies questions de qualification pour filtrer et prioriser les bons appels.",
  },
  {
    icon: Mail,
    title: "Envoie confirmations et suivis",
    description:
      "Courriels ou textos automatiques après l'appel, selon vos règles.",
  },
  {
    icon: Plug,
    title: "Se branche à votre CRM",
    description:
      "Zoho, HubSpot, Pipedrive et d'autres outils pour garder vos infos au même endroit.",
  },
  {
    icon: Languages,
    title: "Bilingue français-anglais",
    description:
      "L'agent passe automatiquement du français à l'anglais selon la préférence de l'appelant.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfère l'appel au besoin",
    description:
      "Quand ça prend un humain, l'agent passe l'appel à la bonne personne selon vos règles.",
  },
  {
    icon: Mic,
    title: "Parle comme du monde d'ici",
    description:
      "Une conversation fluide, avec le bon ton, les bonnes pauses et un français qui sonne Québec.",
  },
  {
    icon: UserSearch,
    title: "Vérifie l'identité et ramasse l'info",
    description:
      "L'agent confirme qui appelle et recueille les détails utiles pendant la conversation.",
  },
] as const;

const INTEGRATIONS = [
  "Google Calendar",
  "Outlook",
  "Dentitek",
  "Cliniciel",
  "Medesync",
  "Progident",
  "ABELDent",
  "Zoho",
  "HubSpot",
  "Pipedrive",
  "Jobber",
  "Housecall Pro",
  "Make",
  "Zapier",
] as const;

const COMPLIANCE_CARDS = [
  {
    icon: Shield,
    title: "Loi 25 — Vie privée",
    description:
      "Transparence sur les décisions automatisées. Droit de contester. Hébergement canadien.",
  },
  {
    icon: Scale,
    title: "Loi 96 — Langue française",
    description:
      "Service en français garanti. Amendes évitées. Conformité assurée.",
  },
  {
    icon: MapPin,
    title: "Données au Canada",
    description:
      "Vos données ne quittent jamais le pays. Hébergement 100% canadien.",
  },
] as const;

const INCLUDED_ITEMS = [
  { icon: Phone, label: "Numéro de téléphone dédié" },
  { icon: Mic, label: "Enregistrements d'appels" },
  { icon: Bell, label: "Notifications courriel / texto" },
  { icon: MessageSquare, label: "Résumés de conversation" },
  { icon: Clock, label: "Disponibilité 24/7" },
  { icon: BarChart3, label: "Tableau de bord" },
] as const;

export function FonctionnalitesPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <AnimateOnScroll className="flex flex-col items-center gap-6">
            <Badge>Fonctionnalités</Badge>
            <h1
                className={cn(
                  "font-display font-normal text-primary leading-[1.1]",
                  "text-3xl md:text-hero"
                )}
            >
              Tout ce que notre agent vocal IA peut prendre en charge
            </h1>
            <p className="max-w-2xl text-[1.125rem] leading-[1.6] text-text-secondary">
              Appels entrants, rendez-vous, qualification, suivis et
              intégrations : tout est pensé pour des entreprises d&apos;ici.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2. Appels entrants & sortants */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            Ce que l&apos;agent gère au téléphone
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

      {/* 3. Intégrations */}
      <SectionWrapper>
        <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            Se branche sur vos outils
          </h2>

          <div className="flex flex-wrap gap-3">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 font-body text-sm font-semibold text-primary"
              >
                {name}
              </span>
            ))}
          </div>

          <p className="text-[1rem] leading-[1.5] text-text-secondary">
            Votre outil n&apos;est pas là? On s&apos;ajuste. Parlez-nous-en.
          </p>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* 4. Conformité & sécurité */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            Conforme aux lois du Québec
          </motion.h2>

          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {COMPLIANCE_CARDS.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 text-accent">
                    <item.icon size={24} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-body text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 font-body text-sm font-semibold text-primary">
              🇨🇦 Données hébergées au Canada
            </span>
          </AnimateOnScroll>
        </StaggerContainer>
      </SectionWrapper>

      {/* 5. Inclus dans tous les forfaits */}
      <SectionWrapper>
        <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
          <motion.h2
            variants={fadeInUp}
            className="font-display text-h1 font-normal text-primary leading-[1.15]"
          >
            Inclus dans tous les forfaits
          </motion.h2>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_ITEMS.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
              >
                <div className="shrink-0 text-accent">
                  <item.icon size={20} strokeWidth={1.5} aria-hidden />
                </div>
                <span className="font-body text-base font-semibold text-primary">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>
        </StaggerContainer>
      </SectionWrapper>

      {/* 6. CTA */}
      <CtaSection />
    </>
  );
}
