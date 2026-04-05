import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour extermination | Réceptionniste IA exterminateur",
  description:
    "Agent vocal IA pour entreprises d'extermination au Québec. Qualification des appels, demandes urgentes, rendez-vous et suivis.",
  path: "/industries/extermination",
});

const PAGE_PROPS = {
  badge: "Extermination",
  title: "L'agent vocal IA pour les entreprises d'extermination",
  subtitle:
    "Nuisibles, demandes urgentes, qualification du problème et prises de rendez-vous sans laisser les clients tomber sur une boîte vocale.",
  stats: [
    { value: "100%", label: "des appels captés même en période chargée" },
    { value: "0", label: "demande urgente perdue faute de réponse" },
    { value: "650$+", label: "valeur moyenne d'un mandat bien qualifié" },
  ],
  painPoints: [
    {
      icon: "AlertTriangle",
      title: "Le client appelle quand la situation le stresse déjà",
      description:
        "Quand il est question de souris, guêpes, punaises ou fourmis, l'appelant veut une réponse immédiate et rassurante, pas un délai flou.",
    },
    {
      icon: "PhoneMissed",
      title: "Une boîte vocale fait perdre des mandats",
      description:
        "Dans ce secteur, plusieurs clients appellent plusieurs entreprises rapidement. Le premier à bien prendre l'appel a souvent l'avantage.",
    },
    {
      icon: "Clock",
      title: "Le volume varie beaucoup selon la saison",
      description:
        "Certaines périodes déclenchent des pointes soudaines d'appels. L'équipe peut vite manquer de capacité au téléphone même si elle gère bien le terrain.",
    },
  ],
  useCases: [
    {
      icon: "ClipboardList",
      title: "Qualification du problème",
      description:
        "Type de nuisance, lieu, niveau d'urgence, contexte du bâtiment: l'équipe reçoit une demande structurée avant de rappeler.",
    },
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "Inspection, traitement initial ou suivi: l'agent propose un créneau ou organise un rappel avec les bons détails.",
    },
    {
      icon: "Filter",
      title: "Tri des appels entrants",
      description:
        "Urgence, nouveau client, demande de prix ou suivi existant: les appels sont orientés selon vos règles plutôt que mélangés.",
    },
    {
      icon: "PhoneForwarded",
      title: "Transfert des cas prioritaires",
      description:
        "Les situations urgentes ou à haute valeur peuvent être transférées immédiatement au bon membre de l'équipe.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé utile pour le terrain",
      description:
        "Votre équipe reçoit les informations essentielles et peut rappeler avec une meilleure compréhension du problème.",
    },
    {
      icon: "RotateCcw",
      title: "Relance des soumissions et suivis",
      description:
        "L'agent peut aider à remettre de l'ordre dans les appels à rappeler ou les suivis à confirmer.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "HubSpot"],
  calculatorConfig: {
    valuePerCall: 650,
    label: "Basé sur une valeur moyenne de 650$ par traitement ou mandat bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut poser des questions sur le type de nuisance?",
      answer:
        "Oui. Il peut suivre un scénario précis pour distinguer les cas fréquents et transmettre un contexte utile à votre équipe avant le rappel.",
    },
    {
      question: "Est-ce que c'est utile même si mon entreprise est déjà petite?",
      answer:
        "Oui. Dans l'extermination, une petite équipe est souvent la plus vulnérable aux appels manqués pendant qu'elle est déjà en déplacement ou en intervention.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour extermination",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ExterminationPage() {
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
