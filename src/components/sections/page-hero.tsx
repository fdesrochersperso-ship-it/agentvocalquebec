"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function PageHero({
  title,
  subtitle,
  children,
  className = "",
  centered = true,
}: PageHeroProps) {
  return (
    <section className={className}>
      <div className={`mx-auto max-w-[1200px] px-6 ${centered ? "text-center" : ""}`}>
        <AnimateOnScroll>
          <h1 className="font-display text-3xl font-normal text-primary leading-[1.1] md:text-hero">
            {title}
          </h1>
          <p className={`mt-6 text-[1.125rem] leading-[1.6] text-text-secondary ${centered ? "mx-auto max-w-2xl" : ""}`}>
            {subtitle}
          </p>
        </AnimateOnScroll>
        {children && (
          <AnimateOnScroll delay={0.2}>
            {children}
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
