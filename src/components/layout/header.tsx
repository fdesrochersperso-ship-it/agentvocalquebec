"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackDemoCtaClick } from "@/lib/analytics";
import { HEADER_INDUSTRY_LINKS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DESKTOP_NAV_LINKS = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
] as const;

const MOBILE_NAV_LINKS = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasTransparentHero =
    pathname === "/" || pathname.startsWith("/industries/");
  const isHomeHeroState = hasTransparentHero && !isScrolled;

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
        "top-0 z-50 w-full transition-all duration-200",
        isHomeHeroState
          ? "absolute left-0 bg-transparent"
          : "sticky backdrop-blur-md bg-background/95 border-b border-border"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 md:flex-none md:gap-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md transition-colors touch-manipulation md:hidden",
              isHomeHeroState
                ? "text-white hover:bg-white/10 hover:text-white"
                : "text-primary hover:bg-primary/5 hover:text-primary-dark"
            )}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.5} aria-hidden />
            ) : (
              <Menu size={24} strokeWidth={1.5} aria-hidden />
            )}
          </button>

          <Link
            href="/"
            className={cn(
              "min-w-0 shrink font-display text-[1.125rem] font-normal transition-colors sm:text-xl",
              isHomeHeroState
                ? "text-white hover:text-white/90"
                : "text-primary hover:text-primary-dark"
            )}
          >
            <span className="block truncate">Agent Vocal Québec</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {DESKTOP_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors",
                isHomeHeroState
                  ? "text-white hover:text-white/85"
                  : "text-primary hover:text-primary-dark"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Industries dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-base font-medium transition-colors",
                isHomeHeroState
                  ? "text-white hover:text-white/85"
                  : "text-primary hover:text-primary-dark"
              )}
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
                    {HEADER_INDUSTRY_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary-dark transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="my-2 border-t border-border" aria-hidden />
                    <Link
                      href="/industries"
                      onClick={() => setIsIndustriesOpen(false)}
                      className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary-dark transition-colors"
                    >
                      Toutes les industries
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button
            href="/demo-gratuite"
            variant="primary"
            size="default"
            className={cn(
              "px-3.5 py-2 text-sm sm:px-4 md:hidden",
              isHomeHeroState && "bg-white/12 text-white ring-1 ring-white/40 hover:bg-white/18"
            )}
          >
            Démo
          </Button>
          <Button
            href="/demo-gratuite"
            variant="primary"
            size="default"
            className={cn(
              "hidden px-5 py-2.5 text-sm md:inline-flex",
              isHomeHeroState && "bg-white/12 text-white ring-1 ring-white/40 hover:bg-white/18"
            )}
          >
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
                {MOBILE_NAV_LINKS.slice(0, 1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex min-h-[44px] items-center px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                  >
                    {link.label}
                  </Link>
                ))}

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
                        {HEADER_INDUSTRY_LINKS.map((link) => (
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

                {MOBILE_NAV_LINKS.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex min-h-[44px] items-center border-t border-border px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/demo-gratuite"
                  onClick={() => {
                    trackDemoCtaClick({
                      ctaText: "Obtenir un rappel",
                      destinationPath: "/demo-gratuite",
                      location: "header_mobile_nav",
                    });
                    closeMobileMenu();
                  }}
                  className="flex min-h-[44px] items-center border-t border-border px-6 py-3 text-base font-medium text-primary hover:bg-primary/5"
                >
                  Obtenir un rappel
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
