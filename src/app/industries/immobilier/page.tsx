import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour agences immobilières | Réceptionniste IA immobilier courtier",
  description:
    "Agent téléphonique IA pour courtiers immobiliers au Québec. Demandes de visites, qualification acheteurs, infos propriétés. 24/7.",
  path: "/industries/immobilier",
});

const PAGE_PROPS = {
  badge: "Immobilier",
  title: "L'agent vocal IA pour l'immobilier",
  subtitle:
    "Demandes de visites, qualification des acheteurs et vendeurs, infos sur les propriétés : votre agent ne manque aucune occasion.",
  stats: [
    { value: "3x", label: "plus de visites planifiées" },
    { value: "24/7", label: "qualification automatique" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les leads appellent quand vous êtes en visite",
      description:
        "Un acheteur sérieux appelle à 18 h. Vous êtes en visite. Il laisse un message et appelle un autre courtier.",
    },
    {
      icon: "Clock",
      title: "Qualifier chaque lead prend du temps",
      description:
        "Budget, préapprobation, délais : autant de questions à poser avant de booker une visite.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Demandes de visites",
      description:
        "L'agent booke les visites selon votre calendrier et celui du vendeur.",
    },
    {
      icon: "Filter",
      title: "Qualification des acheteurs et vendeurs",
      description:
        "Pose les questions clés : budget, préapprobation, délais. Vous recevez des leads qualifiés.",
    },
    {
      icon: "Search",
      title: "Infos sur les propriétés",
      description:
        "Donne les infos de base sur les propriétés en vedette : prix, chambres, quartier.",
    },
    {
      icon: "Calendar",
      title: "Prise de rendez-vous",
      description:
        "Évaluations, signatures, rencontres : tout booké automatiquement dans votre agenda.",
    },
  ],
  integrations: ["MLS", "Google Calendar", "Outlook", "Follow Up Boss", "BombBomb"],
  faq: [
    {
      question: "Est-ce que l'agent peut donner des prix sur les propriétés?",
      answer:
        "Oui, selon ce que vous configurez. Vous décidez quelles infos sont données au téléphone et lesquelles demandent une visite.",
    },
    {
      question: "Les leads de nuit et fin de semaine — ça vaut la peine?",
      answer:
        "Absolument. Beaucoup d'acheteurs cherchent en dehors des heures de bureau. L'agent qualifie 24/7 et vous transfère les leads chauds.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour immobilier",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ImmobilierPage() {
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
