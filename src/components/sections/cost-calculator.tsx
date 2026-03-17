"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const MIN = 5;
const MAX = 30;
const AVG_VALUE = 500;
const WEEKS_PER_MONTH = 4;

export function CostCalculator() {
  const [value, setValue] = useState(10);
  const monthlyLoss = value * AVG_VALUE * WEEKS_PER_MONTH;

  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
        <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
          Combien vous coûtent vos appels manqués?
        </h2>

        <div className="max-w-xl space-y-6">
          <div>
            <label
              htmlFor="calls-slider"
              className="mb-2 block font-body text-base font-medium text-primary"
            >
              Appels manqués par semaine
            </label>
            <div className="flex items-center gap-4">
              <input
                id="calls-slider"
                type="range"
                min={MIN}
                max={MAX}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
              />
              <span className="font-mono text-lg font-bold text-primary tabular-nums">
                {value}
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
            Basé sur une valeur moyenne de 500$ par rendez-vous en clinique
            dentaire.
          </p>

          <Button
            href="/demo"
            variant="tertiary"
            size="default"
            className="group w-fit"
          >
            <span className="inline-flex items-center gap-1">
              Arrêtez de perdre de l'argent
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
  );
}
