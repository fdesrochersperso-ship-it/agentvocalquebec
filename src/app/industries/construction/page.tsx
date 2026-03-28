import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour construction | Réceptionniste IA plombier électricien HVAC | Agent Vocal Québec",
  description:
    "Agent vocal IA pour plombiers, électriciens, entrepreneurs en construction au Québec. Dispatch d'urgence, prise de soumissions, filtrage d'appels. Zéro appel manqué.",
};

const PAGE_PROPS = {
  badge: "Construction & métiers",
  title:
    "Arrêtez de perdre des contrats parce que vous êtes sur un chantier",
  subtitle:
    "Plomberie, HVAC, électriciens, rénovation — votre agent vocal prend les appels, filtre les urgences et booke les soumissions pendant que vous travaillez.",
  stats: [
    { value: "77%", label: "des entreprises citent la pénurie comme #1" },
    { value: "126 000$", label: "perdus par an en appels manqués (PME)" },
    { value: "2.3%", label: "des entreprises construction utilisent l'IA" },
  ],
  painPoints: [
    {
      icon: "Users",
      title: "77% pénurie de main-d'œuvre",
      description:
        "Vous pouvez pas engager une réceptionniste pour 4-5 appels par jour. Mais ces appels valent des milliers.",
    },
    {
      icon: "PhoneMissed",
      title: "Chaque appel manqué = un contrat perdu",
      description:
        "Un appel de soumission en plomberie, c'est 2 000$ à 15 000$.",
    },
    {
      icon: "Hammer",
      title: "Vous êtes sur le chantier",
      description:
        "Les mains pleines, le bruit, impossible de répondre professionnellement.",
    },
  ],
  useCases: [
    {
      icon: "AlertTriangle",
      title: "Dispatch d'urgence",
      description:
        "Fuite d'eau à 22h? L'agent évalue la gravité, collecte l'adresse, vous envoie une notification prioritaire.",
    },
    {
      icon: "ClipboardList",
      title: "Prise de soumissions",
      description:
        "Collecte adresse, type de travaux, budget, disponibilités — vous rappelez préparé.",
    },
    {
      icon: "Filter",
      title: "Filtrage intelligent",
      description:
        "Sépare les vrais clients des vendeurs de pub et des erreurs de numéro.",
    },
    {
      icon: "RotateCcw",
      title: "Suivi automatique",
      description:
        "Un prospect n'a pas booké? L'agent fait un suivi après 48h.",
    },
    {
      icon: "Calendar",
      title: "Rendez-vous d'estimation",
      description:
        "Booke les visites sur site directement dans votre agenda.",
    },
    {
      icon: "MessageSquare",
      title: "Résumés par texto",
      description:
        "Entre deux jobs, recevez un résumé texte de chaque appel.",
    },
  ],
  integrations: [
    "Google Calendar",
    "Outlook",
    "Jobber",
    "Housecall Pro",
  ],
  calculatorConfig: {
    valuePerCall: 1500,
    label:
      "Basé sur une valeur moyenne de 1 500$ par contrat en construction.",
  },
  faq: [
    {
      question: "J'ai 5 appels par jour max, est-ce que ça vaut la peine?",
      answer:
        "Oui. Un seul contrat de plus gagné grâce à un appel bien pris peut changer la donne — et vous ne mesurez souvent pas combien d'appels vous manquez aujourd'hui. Réservez une courte démo pour voir si ça vaut la peine dans votre cas.",
    },
    {
      question: "Est-ce que l'agent peut dispatcher les urgences la nuit?",
      answer:
        "Oui. Vous définissez les critères d'urgence et le numéro de transfert. L'agent évalue et vous alerte si c'est critique.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour construction et métiers",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ConstructionPage() {
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
