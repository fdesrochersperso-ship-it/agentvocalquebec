"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { StaggerContainer, fadeInUp } from "@/components/ui/stagger-container";

const STATS = [
  {
    value: 35,
    suffix: "%",
    label: "des appels manqués en clinique",
  },
  {
    value: 500,
    suffix: "$+",
    label: "de revenus perdus par appel manqué",
  },
  {
    value: 24,
    suffix: "/7",
    label: "disponible, même le dimanche à 2h du matin",
  },
] as const;

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    });

    return controls.stop;
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [motionValue]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-2 font-mono text-stat font-bold text-accent">
        {displayValue}
        {suffix}
      </div>
      <p className="max-w-[200px] text-sm text-text-secondary">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsBand() {
  return (
    <section className="border-y border-border bg-surface pt-8 pb-12 lg:pt-8 lg:pb-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <StaggerContainer className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
