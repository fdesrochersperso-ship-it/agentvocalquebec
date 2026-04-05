import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour toiture | Réceptionniste IA couvreur",
  description:
    "Agent vocal IA pour entreprises de toiture au Québec. Soumissions, urgences, fuites et rendez-vous sans appel manqué.",
  path: "/industries/toiture",
});

const PAGE_PROPS = {
  badge: "Toiture",
  title: "L'agent vocal IA pour les entreprises de toiture du Québec",
  subtitle:
    "Demandes de soumission, urgences après intempéries et rappels organisés pendant que votre équipe est sur le toit, en inspection ou sur la route.",
  stats: [
    { value: "24/7", label: "captation des appels après pluie et vents forts" },
    { value: "0", label: "soumission chaude envoyée directement à la boîte vocale" },
    { value: "2 500$+", label: "valeur moyenne d'un mandat bien capté" },
  ],
  painPoints: [
    {
      icon: "AlertTriangle",
      title: "Les appels explosent après les intempéries",
      description:
        "Quand la météo frappe, les demandes arrivent par vagues. Si personne ne répond vite, le client continue immédiatement vers un autre couvreur.",
    },
    {
      icon: "PhoneMissed",
      title: "Une demande de soumission ratée coûte cher",
      description:
        "Même quand l'appel n'est pas urgent, il représente souvent un projet important. Un appel manqué peut sortir un contrat complet de votre pipeline.",
    },
    {
      icon: "Hammer",
      title: "L'équipe est rarement disponible pour filtrer les appels",
      description:
        "Entre les inspections, les chantiers et les déplacements, personne n'a le temps de qualifier chaque appel proprement au moment où il entre.",
    },
  ],
  useCases: [
    {
      icon: "PhoneForwarded",
      title: "Transfert des urgences",
      description:
        "L'agent détecte les situations urgentes, recueille l'adresse et transfère immédiatement selon vos règles d'escalade.",
    },
    {
      icon: "ClipboardList",
      title: "Qualification des soumissions",
      description:
        "Type de toiture, type de bâtiment, problème signalé et délai souhaité: l'équipe reçoit une demande beaucoup plus exploitable.",
    },
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous pour inspection",
      description:
        "L'agent propose un créneau ou prépare un rappel avec les bonnes informations pour l'estimateur.",
    },
    {
      icon: "Filter",
      title: "Tri des appels non prioritaires",
      description:
        "Les appels de routine, demandes générales et suivis administratifs sont séparés des urgences et des nouveaux contrats.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé clair à l'équipe",
      description:
        "Chaque appel peut déclencher un résumé utile par texto ou courriel avec le contexte essentiel à rappeler.",
    },
    {
      icon: "RotateCcw",
      title: "Relance des demandes laissées en attente",
      description:
        "Une soumission à rappeler ou une visite à confirmer peut être relancée selon votre ton et votre cadence.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "HubSpot"],
  calculatorConfig: {
    valuePerCall: 2500,
    label: "Basé sur une valeur moyenne de 2 500$ par soumission ou mandat bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut distinguer une fuite urgente d'une demande de prix?",
      answer:
        "Oui. Vous définissez les scénarios prioritaires, les mots-clés, les heures et les numéros de transfert. L'agent agit selon vos règles.",
    },
    {
      question: "Est-ce pertinent si mon équipe est petite?",
      answer:
        "Oui. En toiture, un seul appel bien capté peut représenter beaucoup de valeur. L'agent protège surtout les périodes où votre équipe ne peut pas décrocher.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour toiture",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ToiturePage() {
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
