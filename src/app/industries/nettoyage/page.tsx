import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour nettoyage entretien | Réceptionniste IA entreprise ménage | Agent Vocal Québec",
  description:
    "Agent vocal IA pour entreprises de nettoyage et entretien au Québec. Soumissions, planification, urgences. Zéro appel manqué.",
};

const PAGE_PROPS = {
  badge: "Nettoyage & entretien",
  title: "L'agent vocal IA pour les entreprises de nettoyage",
  subtitle:
    "Demandes de soumissions, planification de visites, types de services, urgences : votre agent répond pendant que vous êtes sur le terrain.",
  stats: [
    { value: "0", label: "appel manqué" },
    { value: "100%", label: "soumissions captées" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Sur le terrain, pas au bureau",
      description:
        "Vous êtes chez un client. Un prospect appelle pour une soumission. Il laisse un message et appelle un concurrent.",
    },
    {
      icon: "Clock",
      title: "Les urgences n'attendent pas",
      description:
        "Dégât d'eau, nettoyage post-construction : les clients veulent une réponse rapide.",
    },
  ],
  useCases: [
    {
      icon: "ClipboardList",
      title: "Demandes de soumissions",
      description:
        "Ramasse le type de bâtiment, la superficie et la fréquence souhaitée. Vous rappelez avec une soumission prête.",
    },
    {
      icon: "Calendar",
      title: "Planification de visites",
      description:
        "Booke les visites sur place pour l'évaluation et la soumission.",
    },
    {
      icon: "ListChecks",
      title: "Types de services et prix",
      description:
        "Répond aux questions sur résidentiel vs commercial, récurrent vs ponctuel, et sur les tarifs de base.",
    },
    {
      icon: "AlertTriangle",
      title: "Urgences",
      description:
        "Dégâts, post-construction : l'agent évalue l'urgence et vous alerte pour prioriser.",
    },
  ],
  integrations: ["Jobber", "Housecall Pro", "ServiceTitan", "Google Calendar", "Outlook"],
  faq: [
    {
      question: "J'ai une petite équipe, est-ce que ça vaut la peine?",
      answer:
        "Oui. Chaque appel manqué, c'est souvent un contrat ou une soumission qui file chez un concurrent. Une courte démo suffit pour voir vite si l'agent rentabilise l'investissement.",
    },
    {
      question: "Est-ce que l'agent peut prendre les infos pour une soumission?",
      answer:
        "Oui. Adresse, type de bâtiment, superficie, fréquence : l'agent collecte tout. Vous recevez un résumé et vous rappelez avec une soumission préparée.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour nettoyage et entretien",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function NettoyagePage() {
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
