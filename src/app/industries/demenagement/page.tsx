import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour déménagement | Réceptionniste IA déménageurs",
  description:
    "Agent vocal IA pour entreprises de déménagement au Québec. Qualification des appels, demandes de prix, rappels et organisation des visites.",
  path: "/industries/demenagement",
});

const PAGE_PROPS = {
  badge: "Déménagement",
  title: "L'agent vocal IA pour les entreprises de déménagement",
  subtitle:
    "Demandes de prix, qualification des volumes, visites d'estimation et rappels mieux organisés pendant que vos équipes sont déjà en transit ou en chargement.",
  stats: [
    { value: "100%", label: "des demandes de prix prises en charge" },
    { value: "0", label: "appel utile perdu pendant un déménagement" },
    { value: "1 800$+", label: "valeur moyenne d'un contrat capté" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les appels arrivent quand l'équipe est déjà occupée",
      description:
        "Pendant un chargement, un trajet ou une livraison, il devient très difficile de répondre proprement à chaque nouvelle demande.",
    },
    {
      icon: "ClipboardList",
      title: "Chaque demande de prix demande du contexte",
      description:
        "Adresse de départ, destination, volume, étage, date souhaitée: sans qualification de base, le rappel devient long et inefficace.",
    },
    {
      icon: "Clock",
      title: "La rapidité de réponse influence fortement le choix",
      description:
        "Quand quelqu'un cherche un déménageur, il contacte souvent plusieurs entreprises de suite. Celle qui répond bien a un avantage immédiat.",
    },
  ],
  useCases: [
    {
      icon: "ClipboardList",
      title: "Qualification des demandes de soumission",
      description:
        "L'agent recueille les informations de base pour que l'équipe sache tout de suite si le mandat correspond à sa capacité et à sa zone.",
    },
    {
      icon: "CalendarCheck",
      title: "Planification d'une visite ou d'un rappel",
      description:
        "Visite d'estimation, retour d'appel ou confirmation d'une date: l'agent fait avancer la demande au lieu de la laisser en suspens.",
    },
    {
      icon: "Filter",
      title: "Tri des appels selon la valeur et l'urgence",
      description:
        "Les appels peuvent être séparés entre simple question, nouvelle soumission et dossier à traiter rapidement.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé structuré pour l'équipe",
      description:
        "Le rappel se fait avec les bonnes informations en main au lieu d'un simple message vague ou incomplet.",
    },
    {
      icon: "RotateCcw",
      title: "Relance des demandes non conclues",
      description:
        "Une demande de prix ou une visite à confirmer peut être relancée selon votre cadence habituelle.",
    },
    {
      icon: "Users",
      title: "Moins d'interruptions pendant les opérations",
      description:
        "Les équipes peuvent rester concentrées sur le déménagement en cours pendant que les appels sont absorbés et organisés.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "HubSpot", "Jobber"],
  calculatorConfig: {
    valuePerCall: 1800,
    label: "Basé sur une valeur moyenne de 1 800$ par contrat ou mandat bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut qualifier une demande de déménagement dès le premier appel?",
      answer:
        "Oui. Il peut poser les questions de base sur les adresses, la date, le volume approximatif et le type de service recherché.",
    },
    {
      question: "Est-ce utile même si je fais déjà beaucoup de soumissions par courriel?",
      answer:
        "Oui. Une partie importante des clients commence encore par appeler, surtout quand ils veulent parler rapidement à quelqu'un ou vérifier une disponibilité.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour déménagement",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function DemenagementPage() {
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
