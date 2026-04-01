import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour physio chiro | Réceptionniste IA physiothérapie chiropratique | Agent Vocal Québec",
  description:
    "Agent vocal IA pour cliniques de physiothérapie et chiropratique au Québec. Rendez-vous par spécialité, assurances, rappels.",
};

const PAGE_PROPS = {
  badge: "Physio / Chiro",
  title: "L'agent vocal IA pour les cliniques de physio et chiropratique",
  subtitle:
    "Rendez-vous par thérapeute, vérification d'assurances, rappels automatiques : votre agent s'occupe de l'accueil téléphonique.",
  stats: [
    { value: "35%", label: "moins d'appels manqués" },
    { value: "0", label: "confusion de rendez-vous" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Thérapeutes en traitement",
      description:
        "Quand tout le monde est avec des patients, les lignes sonnent dans le vide. Les gens rappellent... ou pas.",
    },
    {
      icon: "CalendarX",
      title: "Rendez-vous mal dirigés",
      description:
        "Physio, chiro, masso, ostéo : sans triage, les patients aboutissent chez le mauvais thérapeute.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Rendez-vous par spécialité",
      description:
        "L'agent identifie le besoin (physio, chiro, masso) et booke avec le bon thérapeute.",
    },
    {
      icon: "Shield",
      title: "Vérification assurances collectives",
      description:
        "Pose les questions de base sur la couverture. Pour les vérifications complètes, il transfère à votre équipe.",
    },
    {
      icon: "Bell",
      title: "Rappels automatiques",
      description:
        "Rappels avant chaque rendez-vous. Moins de no-shows, plus de plages remplies.",
    },
    {
      icon: "Search",
      title: "Disponibilités en temps réel",
      description:
        "Donne les prochaines dispos selon le thérapeute et le type de traitement.",
    },
  ],
  integrations: ["Jane App", "Cliniko", "Medesync", "Google Calendar", "Outlook"],
  faq: [
    {
      question: "Est-ce que l'agent peut vérifier les assurances?",
      answer:
        "Il pose les questions de base (numéro de police, employeur) et informe le patient. Pour les vérifications détaillées, il transfère à votre équipe administrative.",
    },
    {
      question: "Comment gérer plusieurs thérapeutes avec des horaires différents?",
      answer:
        "On se branche à Jane, Cliniko et à la plupart des logiciels de clinique. L'agent voit les dispos de chaque thérapeute et booke au bon endroit.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour physio et chiropratique",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function PhysioChiroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <IndustryPageTemplate {...PAGE_PROPS} />
    </>
  );
}
