import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour cliniques dentaires | Réceptionniste IA dentaire | Agent Vocal Québec",
  description:
    "Agent vocal IA spécialisé pour les cliniques dentaires du Québec. Prise de rendez-vous automatique, questions d'assurance, rappels. En québécois authentique, 24/7.",
};

const PAGE_PROPS = {
  badge: "Cliniques dentaires",
  title:
    "L'agent vocal IA pensé pour les cliniques dentaires du Québec",
  subtitle:
    "Prise de rendez-vous, questions d'assurance, rappels, confirmations : votre agent répond 24/7 pendant que votre équipe soigne.",
  stats: [
    { value: "35%", label: "des appels manqués en clinique" },
    { value: "500$+", label: "de revenus perdus par appel" },
    { value: "24/7", label: "disponible sans interruption" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "35% des appels jamais répondus",
      description:
        "Votre équipe est avec les patients. Les lignes sonnent dans le vide.",
    },
    {
      icon: "DollarSign",
      title: "500$+ perdus par appel manqué",
      description:
        "Un nettoyage, une couronne, un traitement de canal : chaque appel manqué, c'est un soin qui ne se fera pas.",
    },
    {
      icon: "CalendarX",
      title: "Rappels manuels = no-shows",
      description:
        "Sans rappels automatiques, 15-20% des patients ne se présentent pas.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous automatique",
      description:
        "Nettoyage, urgence, nouveau patient : l'agent booke direct dans votre agenda.",
    },
    {
      icon: "Shield",
      title: "Questions d'assurance",
      description:
        '"Est-ce que mon plan couvre les couronnes?" L\'agent répond aux questions de base.',
    },
    {
      icon: "Bell",
      title: "Rappels et confirmations",
      description:
        "Rappels automatiques par texto. Moins de no-shows, plus de revenus.",
    },
    {
      icon: "ListChecks",
      title: "Gestion liste d'attente",
      description:
        "Un patient annule? L'agent appelle le prochain sur la liste.",
    },
    {
      icon: "UserPlus",
      title: "Accueil nouveaux patients",
      description:
        "Ramasse les infos de base avant le premier rendez-vous.",
    },
    {
      icon: "PhoneForwarded",
      title: "Transfert d'urgence",
      description:
        "Urgence dentaire identifiée? Transfert immédiat au dentiste de garde.",
    },
  ],
  integrations: ["Dentitek", "Progident", "ABELDent", "Google Calendar", "Outlook"],
  calculatorConfig: {
    valuePerCall: 500,
    label: "Basé sur une valeur moyenne de 500$ par rendez-vous dentaire.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut vérifier les assurances?",
      answer:
        "L'agent pose les questions de base (numéro de police, compagnie) et informe le patient. Pour les vérifications complètes, il transfère à votre équipe.",
    },
    {
      question: "Qu'arrive-t-il si un patient a une urgence?",
      answer:
        "L'agent identifie les urgences selon vos critères et transfère immédiatement l'appel au dentiste de garde.",
    },
    {
      question: "Est-ce compatible avec mon logiciel de clinique?",
      answer:
        "On se branche à Dentitek, Progident, ABELDent et à la plupart des PMS dentaires. Si votre logiciel n'est pas là, parlez-nous-en.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour cliniques dentaires",
  provider: {
    "@type": "Organization",
    name: "Agent Vocal Québec",
  },
  areaServed: {
    "@type": "Place",
    name: "Québec, Canada",
  },
  serviceType: "Agent téléphonique IA",
};

export default function CliniquesDentairesPage() {
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
