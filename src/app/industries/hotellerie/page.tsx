import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour hôtels et hébergement | Réceptionniste IA hôtel",
  description:
    "Agent vocal IA pour hôtels et hébergements au Québec. Réservations, disponibilités, check-in, conciergerie. Bilingue 24/7.",
  path: "/industries/hotellerie",
});

const PAGE_PROPS = {
  badge: "Hôtels & hébergement",
  title: "L'agent vocal IA pour les hôtels et hébergements",
  subtitle:
    "Réservations, disponibilités, questions fréquentes, conciergerie : votre agent accueille les clients 24/7 en français et en anglais.",
  stats: [
    { value: "100%", label: "des appels répondus" },
    { value: "24/7", label: "bilingue automatique" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "La réception a les mains pleines",
      description:
        "Check-in, check-out, bagages, questions : la réception peut pas tout gérer. Les appels s'accumulent.",
    },
    {
      icon: "Moon",
      title: "Appels la nuit et tôt le matin",
      description:
        "Les voyageurs appellent à toute heure. Sans réception 24/7, vous perdez des réservations.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Réservations",
      description:
        "L'agent vérifie les disponibilités et prend les réservations selon votre système.",
    },
    {
      icon: "Search",
      title: "Disponibilités et tarifs",
      description:
        "Donne les chambres disponibles, les prix et les options (petit-déj, vue, etc.).",
    },
    {
      icon: "ListChecks",
      title: "Questions fréquentes (check-in, stationnement, animaux)",
      description:
        "Répond aux questions courantes : heures de check-in, stationnement, politique animaux, wifi.",
    },
    {
      icon: "Sparkles",
      title: "Conciergerie",
      description:
        "Suggestions de restos, activités, transport. Transfère les demandes plus complexes.",
    },
  ],
  integrations: ["Opera", "Mews", "Cloudbeds", "Google Calendar", "Outlook"],
  faq: [
    {
      question: "Est-ce que l'agent parle anglais?",
      answer:
        "Oui. On configure l'agent en bilingue : il détecte la langue du client et répond en français ou en anglais selon la préférence.",
    },
    {
      question: "Peut-il gérer les réservations en direct?",
      answer:
        "Oui, si votre système de réservation est intégré. Sinon, l'agent ramasse les infos et vous les transmet pour confirmation.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour hôtels et hébergements",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function HotelleriePage() {
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
