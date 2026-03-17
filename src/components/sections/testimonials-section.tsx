"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const TESTIMONIALS = [
  {
    quote:
      "On manquait 8 à 10 appels par jour. Depuis qu'on a Agent Vocal, c'est zéro. Et les patients trouvent ça naturel.",
    name: "Dre Marie-Claude Tremblay",
    title: null,
    company: "Clinique Dentaire des Sommets",
  },
  {
    quote:
      "J'étais sur un chantier et je pouvais pas répondre. L'IA a booké trois soumissions pendant que je travaillais.",
    name: "Marc-André Bouchard",
    title: null,
    company: "Plomberie MAB",
  },
  {
    quote:
      "Mes clientes appellent pour des infos sur les traitements. L'IA répond parfaitement et booke les consultations.",
    name: "Stéphanie Gagnon",
    title: null,
    company: "Clinique Esthétique Lumière",
  },
] as const;

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <StaggerContainer className="flex flex-col gap-8 lg:gap-10">
        <motion.h2
          variants={fadeInUp}
          className="font-display text-h1 font-normal text-primary leading-[1.15]"
        >
          Des entreprises québécoises nous font confiance
        </motion.h2>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <Card className="flex h-full flex-col">
                <span
                  className="font-display text-6xl text-accent/20 leading-none"
                  aria-hidden
                >
                  "
                </span>
                <blockquote className="mt-2 flex-1 font-body text-[1.125rem] italic leading-[1.6] text-text-primary">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-body font-bold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-[0.875rem] leading-[1.4] text-text-secondary">
                    {testimonial.title
                      ? `${testimonial.title}, ${testimonial.company}`
                      : testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        <motion.p
          variants={fadeInUp}
          className="text-center text-[0.875rem] leading-[1.4] text-text-muted"
        >
          Témoignages à titre illustratif.
        </motion.p>
      </StaggerContainer>
    </SectionWrapper>
  );
}
