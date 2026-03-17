"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const PLANS = {
  essentiel: {
    name: "Essentiel",
    price: 149,
    includedMinutes: 200,
    overageRate: 0.3,
  },
  professionnel: {
    name: "Professionnel",
    price: 397,
    includedMinutes: 500,
    overageRate: 0.25,
  },
  entreprise: {
    name: "Entreprise",
    price: null,
    includedMinutes: Infinity,
    overageRate: 0,
  },
} as const;

function getRecommendedPlan(totalMinutes: number) {
  if (totalMinutes < 200) return "essentiel";
  if (totalMinutes < 500) return "professionnel";
  return "entreprise";
}

function getMonthlyCost(
  planId: "essentiel" | "professionnel" | "entreprise",
  totalMinutes: number
): number | null {
  const plan = PLANS[planId];
  if (planId === "entreprise" || plan.price === null) return null;

  if (totalMinutes <= plan.includedMinutes) {
    return plan.price;
  }
  const overageMinutes = totalMinutes - plan.includedMinutes;
  return plan.price + overageMinutes * plan.overageRate;
}

export function CostEstimator() {
  const [callsPerMonth, setCallsPerMonth] = useState(50);
  const [avgDuration, setAvgDuration] = useState(3);

  const totalMinutes = callsPerMonth * avgDuration;
  const planId = getRecommendedPlan(totalMinutes);
  const planName = PLANS[planId].name;
  const monthlyCost = getMonthlyCost(planId, totalMinutes);

  return (
    <SectionWrapper>
      <AnimateOnScroll className="flex flex-col gap-8 lg:gap-10">
        <div>
          <h2 className="font-display text-h1 font-normal text-primary leading-[1.15]">
            Estimateur de coûts
          </h2>
          <p className="mt-4 text-[1.125rem] leading-[1.6] text-text-secondary">
            Ajustez pour voir le forfait recommandé et le coût estimé.
          </p>
        </div>

        <div className="max-w-2xl space-y-8">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="calls-slider"
                className="font-body text-base font-medium text-primary"
              >
                Nombre d'appels par mois
              </label>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm font-semibold text-primary">
                {callsPerMonth}
              </span>
            </div>
            <input
              id="calls-slider"
              type="range"
              min={1}
              max={500}
              value={callsPerMonth}
              onChange={(e) => setCallsPerMonth(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="duration-slider"
                className="font-body text-base font-medium text-primary"
              >
                Durée moyenne par appel (minutes)
              </label>
              <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-sm font-semibold text-primary">
                {avgDuration}
              </span>
            </div>
            <input
              id="duration-slider"
              type="range"
              min={1}
              max={15}
              value={avgDuration}
              onChange={(e) => setAvgDuration(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm font-medium text-text-muted">
              Minutes estimées
            </p>
            <p className="mt-2 font-mono text-2xl font-bold text-primary">
              {totalMinutes}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm font-medium text-text-muted">
              Forfait recommandé
            </p>
            <p className="mt-2 font-body text-xl font-bold text-primary">
              {planName}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm font-medium text-text-muted">
              Coût mensuel
            </p>
            <p className="mt-2 font-mono text-2xl font-bold text-accent">
              {monthlyCost !== null
                ? `${Math.round(monthlyCost).toLocaleString("fr-CA")}$`
                : "Sur mesure"}
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
