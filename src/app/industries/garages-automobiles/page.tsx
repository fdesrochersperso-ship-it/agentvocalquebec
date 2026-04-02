import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent vocal IA pour garages automobiles | Réceptionniste IA garage mécanique",
  description:
    "Agent vocal IA pour garages automobiles et mécaniciens au Québec. Rendez-vous d'entretien, statut réparations, rappels de service. 24/7.",
  path: "/industries/garages-automobiles",
});

const PAGE_PROPS = {
  badge: "Garages automobiles",
  title: "L'agent vocal IA pour garages et ateliers mécaniques",
  subtitle:
    "Rendez-vous d'entretien, statut des réparations, rappels de service : pendant que votre équipe se concentre sur les véhicules.",
  stats: [
    { value: "50%", label: "plus de rendez-vous bookés" },
    { value: "0", label: "attente téléphonique" },
    { value: "35%", label: "hausse du CA service" },
  ],
  painPoints: [
    {
      icon: "Wrench",
      title: "Le mécanicien a les mains dans le moteur",
      description:
        "Personne pour répondre = client frustré qui appelle le garage d'à côté.",
    },
    {
      icon: "CalendarX",
      title: "Rappels de service oubliés",
      description:
        "Changement d'huile, inspection, pneus d'hiver. Sans rappel, le client oublie.",
    },
    {
      icon: "PhoneCall",
      title: "3 appels pour savoir si le char est prêt",
      description:
        "Les clients appellent encore et encore pour le statut de leur réparation.",
    },
  ],
  useCases: [
    {
      icon: "Calendar",
      title: "Rendez-vous d'entretien",
      description:
        "Changement d'huile, freins, inspection — booké automatiquement.",
    },
    {
      icon: "Search",
      title: "Statut des réparations",
      description:
        "Le client appelle? L'agent donne le statut en temps réel.",
    },
    {
      icon: "Bell",
      title: "Rappels saisonniers",
      description:
        "Pneus d'hiver, inspection annuelle : rappels automatiques.",
    },
    {
      icon: "Car",
      title: "Collecte infos véhicule",
      description:
        "Marque, modèle, année, problème : avant le rendez-vous.",
    },
  ],
  integrations: [
    "Google Calendar",
    "Shop-Ware",
    "Mitchell 1",
    "Outlook",
  ],
  faq: [
    {
      question: "Est-ce que l'agent peut donner le statut d'une réparation?",
      answer:
        "Oui, si votre système est intégré. Sinon, l'agent prend le message et vous envoie la demande.",
    },
    {
      question: "Et pour les pièces?",
      answer:
        "L'agent peut vérifier les disponibilités dans votre inventaire si le système est connecté, ou prendre la demande en note.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour garages automobiles",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function GaragesAutomobilesPage() {
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
