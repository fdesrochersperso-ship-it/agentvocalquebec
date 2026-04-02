import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour courtiers en assurance | Réceptionniste IA assurances",
  description:
    "Agent téléphonique IA pour courtiers et cabinets d'assurance au Québec. Soumissions, réclamations, renouvellements automatisés.",
  path: "/industries/assurances",
});

const PAGE_PROPS = {
  badge: "Assurances",
  title: "L'agent vocal IA pour les courtiers et cabinets d'assurance",
  subtitle:
    "Demandes de soumissions, réclamations, renouvellements : votre agent qualifie et dirige chaque appel.",
  stats: [
    { value: "70%", label: "des appels automatisés" },
    { value: "45%", label: "traitement plus rapide" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les lignes débordent",
      description:
        "Sinistres, renouvellements, demandes de soumission : votre équipe n'arrive plus à tout gérer.",
    },
    {
      icon: "Clock",
      title: "Qualification manuelle = temps perdu",
      description:
        "Trop de temps passé à trier les appels avant de les envoyer au bon courtier.",
    },
  ],
  useCases: [
    {
      icon: "ClipboardList",
      title: "Demandes de soumissions",
      description:
        "L'agent collecte les infos de base et qualifie le prospect avant de le transférer.",
    },
    {
      icon: "AlertTriangle",
      title: "Déclarations de sinistres",
      description:
        "Recueille les détails du sinistre, le numéro de police et dirige vers le bon dossier.",
    },
    {
      icon: "RotateCcw",
      title: "Renouvellements de polices",
      description:
        "Rappels automatiques avant échéance, prise de rendez-vous pour le renouvellement.",
    },
    {
      icon: "Filter",
      title: "Qualification de prospects",
      description:
        "Pose les bonnes questions et dirige chaque appel vers le bon courtier ou le bon service.",
    },
  ],
  integrations: ["Epic", "Applied", "Google Calendar", "Outlook", "HubSpot"],
  faq: [
    {
      question: "Est-ce que l'agent respecte la confidentialité des dossiers?",
      answer:
        "Oui. L'agent ne partage jamais de détails sensibles. Il collecte, qualifie, puis transfère à votre équipe. Données hébergées au Canada, conformes à la Loi 25.",
    },
    {
      question: "Peut-il gérer les urgences sinistres?",
      answer:
        "Oui. Vous fixez les critères d'urgence. L'agent priorise et transfère immédiatement les cas critiques.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour courtiers en assurance",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function AssurancesPage() {
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
