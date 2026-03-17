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
    title: "Répond automatiquement aux appels entrants",
    description:
      "L'agent répond professionnellement à tous vos appels 24/7 dans une langue parfaitement adaptée.",
  },
  {
    icon: CalendarCheck,
    title: "Planifie des rendez-vous directement",
    description:
      "Synchronisation automatique avec votre calendrier pour éviter les doublons et erreurs.",
  },
  {
    icon: UserCheck,
    title: "Qualifie les prospects selon vos critères",
    description:
      "L'agent pose vos questions de qualification pour filtrer les appels et prioriser les meilleurs prospects.",
  },
  {
    icon: Mail,
    title: "Envoie des confirmations et suivis",
    description:
      "Communications post-appel automatiques par courriel ou texto.",
  },
  {
    icon: Plug,
    title: "S'intègre à votre CRM existant",
    description:
      "Compatible avec Zoho, HubSpot, Pipedrive et autres pour centraliser vos données client.",
  },
  {
    icon: Languages,
    title: "Bilingue français-anglais",
    description:
      "L'agent passe automatiquement du français à l'anglais selon la préférence de l'appelant.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfère l'appel si nécessaire",
    description:
      "L'agent peut transférer vers votre équipe quand le client le demande ou selon vos règles.",
  },
  {
    icon: Mic,
    title: "Parle naturellement",
    description:
      "Conversation naturelle et fluide avec intonation, pauses et réactions authentiques.",
  },
  {
    icon: UserSearch,
    title: "Vérifie l'identité et collecte les infos",
    description:
      "L'agent confirme l'identité de l'appelant et enrichit son profil pendant la conversation.",
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
  { icon: Bell, label: "Notifications email/SMS" },
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
              Tout ce que fait notre agent vocal IA
            </h1>
            <p className="max-w-2xl text-[1.125rem] leading-[1.6] text-text-secondary">
              Appels entrants, prise de rendez-vous, qualification de prospects,
              intégrations — tout est inclus.
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
            Appels entrants & sortants
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
            S'intègre avec vos outils
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
            Votre outil n'est pas listé? On s'adapte. Contactez-nous.
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
