import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour chauffage climatisation | Réceptionniste IA CVAC",
  description:
    "Agent vocal IA pour entreprises de chauffage, climatisation et CVAC au Québec. Pannes, entretiens saisonniers et soumissions sans saturer vos lignes.",
  path: "/industries/chauffage-climatisation",
});

const PAGE_PROPS = {
  badge: "Chauffage & climatisation",
  title: "L'agent vocal IA pour les équipes CVAC du Québec",
  subtitle:
    "Pannes de chauffage, climatisation en arrêt, entretiens saisonniers et soumissions: votre agent absorbe les pointes d'appels sans ralentir la planification.",
  stats: [
    { value: "2 saisons", label: "où le téléphone explose vraiment" },
    { value: "24/7", label: "capacité de réponse pendant les pics" },
    { value: "0", label: "demande chaude perdue faute de rappel" },
  ],
  painPoints: [
    {
      icon: "Snowflake",
      title: "Les pics saisonniers écrasent le bureau",
      description:
        "Quand le froid frappe ou qu'une canicule arrive, le volume d'appels monte plus vite que votre capacité à répondre.",
    },
    {
      icon: "Clock",
      title: "Les techniciens sont sur le terrain",
      description:
        "Le bon moment pour appeler n'est jamais le bon moment pour décrocher. Pourtant, la demande, elle, ne ralentit pas.",
    },
    {
      icon: "CircleDollarSign",
      title: "Les meilleurs contrats se gagnent vite",
      description:
        "Une soumission commerciale ou un remplacement d'équipement peut se perdre simplement parce que personne n'a pris l'appel.",
    },
  ],
  useCases: [
    {
      icon: "PhoneForwarded",
      title: "Escalade des pannes critiques",
      description:
        "L'agent distingue les bris urgents des demandes courantes et transfère quand les critères sont atteints.",
    },
    {
      icon: "CalendarCheck",
      title: "Planification d'entretien",
      description:
        "Entretiens saisonniers, visites de prévention et rendez-vous clients dans votre agenda, sans va-et-vient inutile.",
    },
    {
      icon: "ClipboardList",
      title: "Prise de soumissions",
      description:
        "L'agent collecte le type d'équipement, l'urgence, l'adresse et le contexte avant que votre équipe rappelle.",
    },
    {
      icon: "Filter",
      title: "Filtrage des appels récurrents",
      description:
        "Questions sur les horaires, les secteurs desservis ou les services offerts: l'agent répond sans monopoliser le bureau.",
    },
    {
      icon: "RotateCcw",
      title: "Relances sur l'entretien préventif",
      description:
        "Rappels, renouvellements et suivis peuvent être automatisés avec votre ton et vos règles.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé exploitable pour chaque appel",
      description:
        "Vous savez ce qui est urgent, ce qui peut attendre et ce qui vaut un rappel rapide.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "ServiceTitan"],
  calculatorConfig: {
    valuePerCall: 1800,
    label: "Basé sur une valeur moyenne de 1 800$ par intervention ou vente captée.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut fonctionner pendant une vague de froid ou de chaleur?",
      answer:
        "Oui. C'est justement l'un des cas où il devient le plus rentable, parce qu'il absorbe le volume sans laisser vos lignes saturer.",
    },
    {
      question: "Est-ce qu'il peut gérer la différence entre entretien et urgence?",
      answer:
        "Oui. Vous définissez les règles de triage selon le type de panne, les heures et le niveau d'escalade attendu.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour chauffage et climatisation",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ChauffageClimatisationPage() {
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
