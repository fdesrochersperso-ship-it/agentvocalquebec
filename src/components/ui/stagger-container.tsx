"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [delay, setDelay] = useState(staggerDelay);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setDelay(mq.matches ? staggerDelay / 2 : staggerDelay);
    const handler = () => setDelay(mq.matches ? staggerDelay / 2 : staggerDelay);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [staggerDelay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: delay, delayChildren: 0 },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
