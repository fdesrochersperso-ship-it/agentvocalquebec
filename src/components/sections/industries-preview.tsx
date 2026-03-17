"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, Sparkles, HardHat, Car, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const INDUSTRIES = [
  {
    icon: Stethoscope,
    title: "Cliniques dentaires",
    description:
      "Prise de rendez-vous, questions d'assurance, rappels — intégré avec vos logiciels de clinique.",
    badges: ["35% moins d'appels manqués", "500$+ par appel"],
    href: "/industries/cliniques-dentaires",
  },
  {
    icon: Sparkles,
    title: "Médico-esthétique",
    description:
      "Consultations, questions sur les traitements et les prix. L'IA est discrète et professionnelle.",
    badges: ["2 000$+ par RDV", "0 concurrent IA"],
    href: "/industries/medico-esthetique",
  },
  {
    icon: HardHat,
    title: "Construction & métiers",
    description:
      "Dispatch d'urgence, prise de soumissions, filtrage d'appels — pendant que vous êtes sur le chantier.",
    badges: ["77% pénurie", "0 appel manqué"],
    href: "/industries/construction",
  },
  {
    icon: Car,
    title: "Garages automobiles",
    description:
      "Prise de rendez-vous pour réparations, rappels de rappels, gestion des urgences routières.",
    badges: ["50% + de RDV", "0 attente"],
    href: "/industries/garages-automobiles",
  },
] as const;

export function IndustriesPreview() {
  return (
    <SectionWrapper>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        <motion.div variants={fadeInUp}>
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            Adapté à votre industrie
          </h2>
          <p className="mt-4 text-[1.125rem] leading-[1.6] text-text-secondary">
            Notre agent vocal IA s'adapte aux besoins spécifiques de votre
            secteur.
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.href}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link href={industry.href} className="group block h-full">
                <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <div className="mb-4 text-accent">
                    <industry.icon size={28} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-body text-xl font-bold text-primary">
                    {industry.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-body text-sm font-semibold text-primary"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-body text-base font-semibold text-accent">
                    Voir la solution
                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-1 font-body text-base font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            Voir toutes nos industries
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden />
          </Link>

          <div className="w-full max-w-xl rounded-xl border border-border bg-surface/50 px-6 py-4">
            <p className="font-body text-[1rem] leading-[1.5] text-text-secondary">
              Votre industrie n'est pas listée?{" "}
              <Button
                href="/demo"
                variant="tertiary"
                size="default"
                className="inline-flex p-0 h-auto font-semibold"
              >
                Contactez-nous
              </Button>
            </p>
          </div>
        </motion.div>
      </StaggerContainer>
    </SectionWrapper>
  );
}
