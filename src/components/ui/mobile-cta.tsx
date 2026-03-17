"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/demo"
      className={`fixed bottom-0 left-0 right-0 z-50 block w-full rounded-t-xl bg-accent py-4 text-center font-body text-base font-semibold text-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] transition-opacity duration-300 md:hidden ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ minHeight: "44px" }}
    >
      Réserver une démo
    </Link>
  );
}
