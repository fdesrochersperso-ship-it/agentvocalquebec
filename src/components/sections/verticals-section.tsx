"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, HardHat, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const VERTICALS = [
  {
    icon: Stethoscope,
    title: "Cliniques & santé",
    description:
      "Dentaire, médico-esthétique, physio, chiro. Prise de rendez-vous, questions d'assurance, rappels — intégré avec vos logiciels de clinique.",
    href: "/industries/cliniques-dentaires",
  },
  {
    icon: HardHat,
    title: "Construction & métiers",
    description:
      "Plomberie, HVAC, électriciens, rénovation. Dispatch d'urgence, prise de soumissions, filtrage d'appels — pendant que vous êtes sur le chantier.",
    href: "/industries/construction",
  },
] as const;

export function VerticalsSection() {
  return (
    <SectionWrapper>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Pensé pour votre industrie
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {VERTICALS.map((vertical) => (
            <motion.div
              key={vertical.href}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link href={vertical.href} className="group block h-full">
                <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  <div className="mb-4 text-accent">
                    <vertical.icon size={28} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-body text-xl font-bold text-primary">
                    {vertical.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[1rem] leading-[1.5] text-text-secondary">
                    {vertical.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-body text-base font-semibold text-accent">
                    Découvrir
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
      </StaggerContainer>
    </SectionWrapper>
  );
}
