"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INDUSTRIES_LINKS = [
  { href: "/industries/cliniques-dentaires", label: "Cliniques dentaires" },
  { href: "/industries/medico-esthetique", label: "Médico-esthétique" },
  { href: "/industries/construction", label: "Construction & métiers" },
  { href: "/industries/garages-automobiles", label: "Garages automobiles" },
] as const;

const DESKTOP_NAV_LINKS = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsIndustriesExpanded(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsIndustriesExpanded(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled && "backdrop-blur-md bg-background/95 border-b border-border"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-6 md:h-16">
        {/* Mobile: Hamburger on left */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center md:hidden text-primary hover:text-primary-dark transition-colors touch-manipulation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.5} aria-hidden />
          ) : (
            <Menu size={24} strokeWidth={1.5} aria-hidden />
          )}
        </button>

        {/* Logo - centered on mobile, left on desktop */}
        <Link
          href="/"
          className="font-display text-xl font-normal text-primary hover:text-primary-dark transition-colors shrink-0 order-2 md:order-1"
        >
          Agent Vocal Québec
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/fonctionnalites"
            className="text-base font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Fonctionnalités
          </Link>

          {/* Industries dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-base font-medium text-primary hover:text-primary-dark transition-colors"
              aria-expanded={isIndustriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={cn("transition-transform", isIndustriesOpen && "rotate-180")}
                aria-hidden
              />
            </button>

            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2"
                >
                  <div className="min-w-[220px] rounded-lg border border-border bg-surface py-2 shadow-md">
                    {INDUSTRIES_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary-dark transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="my-2 border-t border-border" aria-hidden />
                    <Link
                      href="/industries"
                      className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary-dark transition-colors"
                    >
                      Toutes les industries
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {DESKTOP_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-primary hover:text-primary-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button - always visible, right side */}
        <div className="flex shrink-0 order-3">
          <Button href="/demo" variant="primary" size="default">
            Réserver une démo
          </Button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={closeMobileMenu}
              aria-hidden
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed left-0 top-0 z-50 h-full w-[min(320px,85vw)] overflow-y-auto border-r border-border bg-background md:hidden"
            >
              <div className="flex flex-col pt-20 pb-8">
                <Link
                  href="/fonctionnalites"
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] items-center px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                >
                  Fonctionnalités
                </Link>

                {/* Industries accordion */}
                <div className="border-t border-border">
                  <button
                    type="button"
                    onClick={() => setIsIndustriesExpanded(!isIndustriesExpanded)}
                    className="flex w-full items-center justify-between px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                  >
                    Industries
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      className={cn("transition-transform", isIndustriesExpanded && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence>
                    {isIndustriesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {INDUSTRIES_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className="flex min-h-[44px] items-center px-6 py-2.5 pl-10 text-sm text-primary hover:bg-primary/5"
                          >
                            {link.label}
                          </Link>
                        ))}
                        <div className="my-2 border-t border-border" aria-hidden />
                        <Link
                          href="/industries"
                          onClick={closeMobileMenu}
                          className="block px-6 py-2.5 pl-10 text-sm font-medium text-primary hover:bg-primary/5"
                        >
                          Toutes les industries
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/tarifs"
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] items-center border-t border-border px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                >
                  Tarifs
                </Link>
                <Link
                  href="/faq"
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] items-center border-t border-border px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                >
                  FAQ
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
