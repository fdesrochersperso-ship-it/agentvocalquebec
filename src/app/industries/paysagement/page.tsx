import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour paysagement | Réceptionniste IA paysagiste",
  description:
    "Agent vocal IA pour entreprises de paysagement au Québec. Soumissions, entretien saisonnier, visites terrain et rappels organisés.",
  path: "/industries/paysagement",
});

const PAGE_PROPS = {
  badge: "Paysagement",
  title: "L'agent vocal IA pour les entreprises de paysagement",
  subtitle:
    "Demandes de soumission, entretiens récurrents, visites sur place et rappels bien structurés pendant que l'équipe est déjà à l'extérieur.",
  stats: [
    { value: "3x", label: "plus simple d'absorber les pointes saisonnières" },
    { value: "0", label: "soumission utile perdue faute de rappel rapide" },
    { value: "1 200$+", label: "valeur moyenne d'un contrat capté" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les demandes entrent pendant que tout le monde est sur le terrain",
      description:
        "L'équipe est en déplacement, sur un chantier ou entre deux visites. Le téléphone passe alors au second plan, même si les appels sont précieux.",
    },
    {
      icon: "Clock",
      title: "La saison crée des pics d'appels",
      description:
        "Au printemps et au début de l'été, les demandes de devis et d'entretien se multiplient vite. Sans système fiable, une partie du volume se perd.",
    },
    {
      icon: "ClipboardList",
      title: "Une bonne soumission commence par une bonne qualification",
      description:
        "Le type de terrain, le service demandé et l'échéance doivent être compris dès le premier appel pour que le suivi soit rentable.",
    },
  ],
  useCases: [
    {
      icon: "ClipboardList",
      title: "Qualification des demandes de soumission",
      description:
        "Entretien, aménagement, tonte, taille ou projet complet: l'agent recueille le bon niveau d'information avant le rappel.",
    },
    {
      icon: "CalendarCheck",
      title: "Planification des visites",
      description:
        "L'agent peut proposer un créneau d'estimation ou préparer un rappel selon les zones et disponibilités de l'équipe.",
    },
    {
      icon: "Filter",
      title: "Tri entre entretien récurrent et nouveau projet",
      description:
        "Les appels sont mieux séparés selon leur nature, ce qui aide à prioriser plus intelligemment la journée.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé simple à rappeler",
      description:
        "Adresse, type de service, échéance et meilleur moment pour joindre le client: tout arrive déjà structuré.",
    },
    {
      icon: "RotateCcw",
      title: "Relance des devis",
      description:
        "Les demandes restées sans réponse ou les suivis à confirmer peuvent être relancés plus proprement.",
    },
    {
      icon: "Users",
      title: "Réduction des interruptions pour l'équipe",
      description:
        "L'agent vocal absorbe les appels entrants pendant que le travail continue sur le terrain au lieu d'être sans cesse interrompu.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "HubSpot"],
  calculatorConfig: {
    valuePerCall: 1200,
    label: "Basé sur une valeur moyenne de 1 200$ par contrat ou mandat bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut distinguer entretien récurrent et projet d'aménagement?",
      answer:
        "Oui. Il peut poser des questions simples sur le type de besoin, la taille du projet et l'échéance afin de mieux qualifier l'appel.",
    },
    {
      question: "Est-ce utile même si mes demandes sont très saisonnières?",
      answer:
        "Oui. C'est justement dans les périodes de pointe qu'un agent vocal aide le plus à absorber le volume sans perdre de bonnes occasions.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour paysagement",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function PaysagementPage() {
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
