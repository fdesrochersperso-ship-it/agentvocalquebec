import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour cliniques vétérinaires | Réceptionniste IA vétérinaire",
  description:
    "Agent vocal IA pour cliniques vétérinaires au Québec. Rendez-vous, renouvellements, suivis et triage de premier niveau sans saturer le comptoir.",
  path: "/industries/cliniques-veterinaires",
});

const PAGE_PROPS = {
  badge: "Cliniques vétérinaires",
  title: "L'agent vocal IA pour les cliniques vétérinaires du Québec",
  subtitle:
    "Rendez-vous, renouvellements, suivis et triage administratif de premier niveau pendant que votre équipe reste concentrée sur les animaux et leurs propriétaires.",
  stats: [
    { value: "24/7", label: "capacité d'accueil même hors des heures" },
    { value: "0", label: "file téléphonique qui bloque le comptoir" },
    { value: "2 min", label: "pour qualifier les demandes récurrentes" },
  ],
  painPoints: [
    {
      icon: "PawPrint",
      title: "Le téléphone sonne pendant que le comptoir déborde",
      description:
        "Arrivées, sorties, traitements, urgences: le volume téléphonique se mélange à tout le reste de l'opération.",
    },
    {
      icon: "Heart",
      title: "Les appels ont souvent une charge émotionnelle forte",
      description:
        "Les propriétaires veulent être rassurés vite, même quand la demande finit par être une simple question logistique.",
    },
    {
      icon: "Moon",
      title: "Les demandes hors heures restent nombreuses",
      description:
        "Questions urgentes, symptômes, renouvellements ou prise de rendez-vous: une part importante des appels arrive quand l'équipe n'est pas disponible.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "Vaccins, suivis, examens et visites de routine pris en charge sans faire attendre le comptoir.",
    },
    {
      icon: "ListChecks",
      title: "Questions fréquentes",
      description:
        "Heures d'ouverture, services, préparation avant un rendez-vous ou procédures administratives simples.",
    },
    {
      icon: "Bell",
      title: "Rappels et confirmations",
      description:
        "Réduction des oublis de rendez-vous grâce à des rappels clairs et automatisés.",
    },
    {
      icon: "Shield",
      title: "Triage administratif de premier niveau",
      description:
        "L'agent pose les bonnes questions de base et transfère quand vos critères d'urgence sont détectés.",
    },
    {
      icon: "PhoneForwarded",
      title: "Escalade des cas sensibles",
      description:
        "Urgence potentielle, cas critique ou client déjà identifié: l'appel est transmis selon vos règles.",
    },
    {
      icon: "UserPlus",
      title: "Accueil des nouveaux clients",
      description:
        "Collecte des informations de base avant le premier rendez-vous pour alléger l'équipe au comptoir.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Vetspire", "ezyVet"],
  calculatorConfig: {
    valuePerCall: 350,
    label: "Basé sur une valeur moyenne de 350$ par rendez-vous ou suivi bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent remplace le jugement clinique?",
      answer:
        "Non. Il gère l'accueil, les questions récurrentes et le triage administratif selon vos règles. Toute décision clinique reste à votre équipe.",
    },
    {
      question: "Peut-il distinguer une urgence d'une demande de routine?",
      answer:
        "Oui, tant que les critères sont définis avec vous. L'agent pose les bonnes questions de base et transfère si le scénario l'exige.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour cliniques vétérinaires",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function CliniquesVeterinairesPage() {
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
