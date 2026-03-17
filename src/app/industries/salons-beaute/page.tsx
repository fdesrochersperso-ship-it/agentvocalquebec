import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour salons de beauté spa | Réceptionniste IA salon coiffure | Agent Vocal Québec",
  description:
    "Agent vocal IA pour salons de beauté, coiffure et spas au Québec. Réservations, services, annulations. Moins de no-shows.",
};

const PAGE_PROPS = {
  badge: "Salons & beauté",
  title: "L'agent vocal IA pour les salons de beauté et spas",
  subtitle:
    "Réservations, services disponibles, prix, annulations — votre agent gère les appels pendant que vous servez vos clients.",
  stats: [
    { value: "30%", label: "moins de no-shows" },
    { value: "24/7", label: "réservations jour et nuit" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les mains dans les cheveux",
      description:
        "Coiffeur, esthéticienne, massothérapeute — quand vous travaillez, personne pour décrocher.",
    },
    {
      icon: "CalendarX",
      title: "No-shows = revenus perdus",
      description:
        "Sans rappels et confirmations, les clients oublient. Une chaise vide, c'est de l'argent perdu.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Réservations",
      description:
        "L'agent booke selon les disponibilités de chaque professionnel et le type de service.",
    },
    {
      icon: "Sparkles",
      title: "Services et prix",
      description:
        "Répond aux questions sur les services offerts, les durées et les tarifs.",
    },
    {
      icon: "CalendarX",
      title: "Gestion des annulations",
      description:
        "Reçoit les annulations, libère la plage et peut proposer à quelqu'un sur la liste d'attente.",
    },
    {
      icon: "Bell",
      title: "Rappels de rendez-vous",
      description:
        "Rappels automatiques par texto. Moins de no-shows, plus de clients qui se présentent.",
    },
  ],
  integrations: ["Jane App", "Fresha", "Square", "Google Calendar", "Outlook"],
  faq: [
    {
      question: "Est-ce que l'agent peut gérer plusieurs stylistes ou thérapeutes?",
      answer:
        "Oui. Vous définissez les disponibilités de chaque professionnel. L'agent booke au bon endroit selon le service demandé.",
    },
    {
      question: "Et pour les annulations de dernière minute?",
      answer:
        "L'agent reçoit l'annulation, libère la plage et vous envoie une alerte. Vous pouvez activer une liste d'attente pour remplir les trous.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour salons de beauté",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function SalonsBeautePage() {
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
