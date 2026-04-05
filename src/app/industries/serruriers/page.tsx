import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour serruriers | Réceptionniste IA serrurerie",
  description:
    "Agent vocal IA pour serruriers au Québec. Lockouts, appels urgents, estimation et dispatch sans appel manqué.",
  path: "/industries/serruriers",
});

const PAGE_PROPS = {
  badge: "Serrurerie",
  title: "L'agent vocal IA pour les serruriers et services de serrurerie",
  subtitle:
    "Appels urgents, lockouts, demandes de prix et dispatch efficace pendant que vos techniciens sont déjà sur la route ou en intervention.",
  stats: [
    { value: "24/7", label: "réponse immédiate pour les appels urgents" },
    { value: "0", label: "client barré dehors laissé sans réponse" },
    { value: "900$+", label: "valeur moyenne d'une intervention captée" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Les appels urgents ne peuvent pas attendre",
      description:
        "Quelqu'un barré dehors ne laissera pas patiemment un message. Si l'appel n'est pas pris vite, il part chez le prochain serrurier.",
    },
    {
      icon: "Clock",
      title: "Les demandes arrivent à toute heure",
      description:
        "Le soir, la nuit et les fins de semaine comptent beaucoup dans ce secteur. Une simple boîte vocale fait perdre des interventions utiles.",
    },
    {
      icon: "Shield",
      title: "Chaque appel doit être trié proprement",
      description:
        "Urgence réelle, demande résidentielle, commerciale ou question de prix: l'équipe a besoin d'un tri clair avant de rappeler ou de dispatcher.",
    },
  ],
  useCases: [
    {
      icon: "PhoneForwarded",
      title: "Transfert immédiat des lockouts",
      description:
        "L'agent reconnaît les urgences, prend l'adresse et déclenche le bon transfert au bon technicien.",
    },
    {
      icon: "ClipboardList",
      title: "Qualification des appels",
      description:
        "Type de serrure, contexte, secteur et urgence: vous recevez des appels structurés plutôt que des messages incomplets.",
    },
    {
      icon: "CalendarCheck",
      title: "Planification des interventions non urgentes",
      description:
        "Changement de serrure, visite commerciale ou installation: l'agent peut proposer un créneau ou préparer un rappel précis.",
    },
    {
      icon: "Filter",
      title: "Filtrage des demandes peu prioritaires",
      description:
        "Les questions générales ou appels moins urgents sont séparés des interventions qui demandent une action immédiate.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé d'appel exploitable",
      description:
        "Votre équipe reçoit les coordonnées, le problème et le degré d'urgence sans devoir reprendre la collecte à zéro.",
    },
    {
      icon: "RotateCcw",
      title: "Relance des demandes de service",
      description:
        "Les demandes commerciales ou résidentielles restées en attente peuvent être relancées avec vos règles de suivi.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "Housecall Pro"],
  calculatorConfig: {
    valuePerCall: 900,
    label: "Basé sur une valeur moyenne de 900$ par intervention ou appel de service bien capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut fonctionner après les heures?",
      answer:
        "Oui. C'est même un des cas les plus utiles en serrurerie. Il peut répondre, qualifier et transférer les urgences selon vos disponibilités.",
    },
    {
      question: "Est-ce qu'il peut distinguer résidentiel et commercial?",
      answer:
        "Oui. L'agent peut poser quelques questions simples pour qualifier le type de demande avant de transmettre l'appel ou le résumé.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour serruriers",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function SerruriersPage() {
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
