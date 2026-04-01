"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  trackDemoFormError,
  trackDemoFormStarted,
  trackGenerateLead,
} from "@/lib/analytics";
import { getLeadClientContext } from "@/lib/lead-context";
import { CheckCircle2 } from "lucide-react";

const COMPANY_TYPES = [
  "Clinique dentaire",
  "Médico-esthétique",
  "Physio-Chiro",
  "Plomberie-HVAC",
  "Électricien",
  "Rénovation-Construction",
  "Autre",
] as const;

const inputStyles =
  "w-full rounded-lg border border-border px-4 py-3 font-body text-[1rem] text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent";

const benefits = [
  "Appel de qualification d'ici 24 h ouvrables",
  "Pas de carte de crédit · pas d'engagement",
  "On vous montre la voix québécoise et le tableau de bord",
];

export function DemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasTrackedFormStart = useRef(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const companyType = String(fd.get("companyType") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const honeypot = String(fd.get("website") ?? "").trim();

    setIsLoading(true);
    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          companyType,
          message: message || undefined,
          _honeypot: honeypot,
          context: getLeadClientContext(),
        }),
      });

      if (!res.ok) {
        if (res.status === 503) {
          trackDemoFormError({
            errorType: "service_unavailable",
            httpStatus: res.status,
          });
          setError(
            "Le formulaire est temporairement indisponible. Réessayez plus tard ou écrivez-nous à info@agentvocalquebec.com : on vous répond d'ici 24 h."
          );
        } else if (res.status === 502) {
          trackDemoFormError({
            errorType: "upstream_failure",
            httpStatus: res.status,
          });
          setError(
            "L'envoi a échoué côté serveur. Réessayez dans quelques minutes ou écrivez-nous à info@agentvocalquebec.com."
          );
        } else {
          trackDemoFormError({
            errorType: "request_failed",
            httpStatus: res.status,
          });
          setError(
            "Impossible d'envoyer le formulaire pour le moment. Vérifiez votre connexion et réessayez."
          );
        }
        return;
      }

      trackGenerateLead({
        companyType,
        leadSource: "website_demo_form",
      });
      setIsSubmitted(true);
      form.reset();
    } catch {
      trackDemoFormError({
        errorType: "network_error",
      });
      setError(
        "Une erreur réseau s'est produite. Vérifiez votre connexion et réessayez."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-[600px] rounded-xl border border-border bg-surface p-10 text-center sm:p-12">
        <CheckCircle2
          className="mx-auto mb-4 h-14 w-14 text-accent"
          strokeWidth={1.5}
          aria-hidden
        />
        <p className="font-display text-2xl font-normal text-primary">
          C’est noté — merci!
        </p>
        <p className="mt-3 text-[1rem] leading-relaxed text-text-secondary">
          Un membre de l&apos;équipe vous joint d&apos;ici{" "}
          <strong>24 heures ouvrables</strong> pour planifier votre démo de 15
          minutes et répondre à vos questions.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[600px]">
      <ul className="mb-8 flex flex-col gap-3 sm:gap-2">
        {benefits.map((line) => (
          <li
            key={line}
            className="flex items-start gap-3 text-left text-[0.9375rem] leading-snug text-text-secondary"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              strokeWidth={2}
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        onFocusCapture={() => {
          if (hasTrackedFormStart.current) return;
          hasTrackedFormStart.current = true;
          trackDemoFormStarted();
        }}
        className="relative flex flex-col gap-4"
      >
        {/* Honeypot — leave hidden; bots often fill this */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
          <label htmlFor="website">Site web</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Votre nom
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputStyles}
            placeholder="Ex. Jean Tremblay"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
            autoComplete="organization"
            className={inputStyles}
            placeholder="Nom de l'entreprise"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block font-body text-sm font-medium text-primary"
            >
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              className={inputStyles}
              placeholder="514 000 0000"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block font-body text-sm font-medium text-primary"
            >
              Courriel professionnel
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputStyles}
              placeholder="vous@entreprise.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="company-type"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Type d&apos;entreprise
          </label>
          <select
            id="company-type"
            name="companyType"
            required
            className={inputStyles}
          >
            <option value="">Choisir…</option>
            {COMPANY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Objectif ou contexte{" "}
            <span className="font-normal text-text-muted">(optionnel)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputStyles} min-h-[100px] resize-y`}
            placeholder="Ex. nombre d'appels par semaine, outils déjà utilisés, ville…"
          />
        </div>

        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            {error}
          </p>
        ) : null}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Envoi en cours…" : "Obtenir ma démo gratuite"}
        </Button>
      </form>

      <p className="mt-5 text-center text-[0.8125rem] leading-[1.5] text-text-muted">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté au sujet
        d&apos;Agent Vocal Québec. Pas de liste d&apos;envoi, pas de frais cachés.
      </p>
    </div>
  );
}
