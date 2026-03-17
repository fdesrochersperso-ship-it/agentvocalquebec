"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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

export function DemoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-[600px] rounded-xl border border-border bg-surface p-12 text-center">
        <p className="font-display text-2xl font-normal text-primary">
          Merci! On vous contacte bientôt.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[600px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            className={inputStyles}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Nom de votre entreprise
          </label>
          <input
            id="company"
            type="text"
            name="company"
            required
            className={inputStyles}
            placeholder="Nom de votre entreprise"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Numéro de téléphone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className={inputStyles}
            placeholder="Numéro de téléphone"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Adresse courriel
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={inputStyles}
            placeholder="Adresse courriel"
          />
        </div>

        <div>
          <label
            htmlFor="company-type"
            className="mb-1 block font-body text-sm font-medium text-primary"
          >
            Type d'entreprise
          </label>
          <select
            id="company-type"
            name="companyType"
            required
            className={inputStyles}
          >
            <option value="">Sélectionnez...</option>
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
            Message <span className="text-text-muted">(optionnel)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputStyles} resize-y min-h-[100px]`}
            placeholder="Dites-nous ce que vous cherchez"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Envoyer ma demande
        </Button>
      </form>

      <p className="mt-6 text-center text-[0.875rem] leading-[1.4] text-text-muted">
        On vous contacte dans les 24 heures ouvrables. Aucun engagement, aucune
        carte de crédit.
      </p>
    </div>
  );
}
