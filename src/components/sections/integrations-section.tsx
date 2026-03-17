"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const INTEGRATIONS = [
  "Dentitek",
  "Progident",
  "ABELDent",
  "Cliniciel",
  "Medesync",
  "Google Calendar",
  "Outlook",
] as const;

export function IntegrationsSection() {
  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
        <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
          On parle le même langage que vos logiciels
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
          Votre logiciel n'est pas dans la liste? Contactez-nous — on s'adapte.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
