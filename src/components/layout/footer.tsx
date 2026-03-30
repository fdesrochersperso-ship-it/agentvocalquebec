"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/industries", label: "Industries" },
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/demo-gratuite", label: "Obtenir un rappel" },
  { href: "/faq", label: "FAQ" },
] as const;

const LEGAL_LINKS = [
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-text-inverse">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <AnimateOnScroll>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + tagline */}
          <div className="space-y-3">
            <Link
              href="/"
              className="font-display text-xl font-normal text-text-inverse hover:opacity-90 transition-opacity"
            >
              Agent Vocal Québec
            </Link>
            <p className="text-sm text-text-inverse/90 max-w-[240px]">
              Votre agent vocal IA québécois.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-inverse/80 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] min-w-[44px] items-center text-sm text-text-inverse/90 hover:text-text-inverse transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-inverse/80 mb-4">
              Contact
            </h3>
            <a
              href="mailto:info@agentvocalquebec.com"
              className="flex min-h-[44px] min-w-[44px] items-center text-sm text-text-inverse/90 hover:text-text-inverse transition-colors"
            >
              info@agentvocalquebec.com
            </a>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-inverse/80 mb-4">
              Légal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] min-w-[44px] items-center text-sm text-text-inverse/90 hover:text-text-inverse transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-light flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-inverse/80">
            © 2026 Agent Vocal Québec. Tous droits réservés.
          </p>
          <p className="text-sm text-text-inverse/80">
            Données hébergées au Canada 🇨🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
