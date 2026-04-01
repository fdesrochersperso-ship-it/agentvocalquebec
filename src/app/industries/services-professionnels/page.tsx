import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour professionnels | Réceptionniste IA comptable consultant | Agent Vocal Québec",
  description:
    "Agent vocal IA pour comptables, consultants et professionnels au Québec. Filtrage d'appels, prise de rendez-vous, gestion d'agenda.",
};

const PAGE_PROPS = {
  badge: "Services professionnels",
  title: "L'agent vocal IA pour les professionnels et consultants",
  subtitle:
    "Comptables, consultants, notaires : votre agent filtre les appels, prend les rendez-vous et gère votre agenda.",
  stats: [
    { value: "60%", label: "moins d'interruptions" },
    { value: "100%", label: "des appels pris en charge" },
  ],
  painPoints: [
    {
      icon: "PhoneCall",
      title: "Chaque appel coupe votre concentration",
      description:
        "En réunion, en préparation de dossier : le téléphone sonne et vous dérange au pire moment.",
    },
    {
      icon: "PhoneMissed",
      title: "Les vrais clients passent entre les mailles",
      description:
        "Sans filtrage, vous perdez du temps avec des vendeurs et des appels qui valent pas votre attention.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "L'agent booke directement dans votre agenda selon vos disponibilités.",
    },
    {
      icon: "Filter",
      title: "Filtrage d'appels",
      description:
        "Sépare les vrais clients des vendeurs, sondages et erreurs de numéro.",
    },
    {
      icon: "UserPlus",
      title: "Consultation initiale",
      description:
        "Collecte les infos de base avant le premier rendez-vous pour que vous arriviez préparé.",
    },
    {
      icon: "Calendar",
      title: "Gestion d'agenda",
      description:
        "Confirme les rendez-vous, gère les annulations et les déplacements.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Calendly", "Acuity", "HubSpot"],
  faq: [
    {
      question: "Est-ce que l'agent peut prendre des messages détaillés?",
      answer:
        "Oui. Il collecte le nom, le motif de l'appel et les détails importants. Vous recevez un résumé par texto ou courriel avant de rappeler.",
    },
    {
      question: "Mon agenda est complexe — plusieurs professionnels?",
      answer:
        "On se branche avec la plupart des systèmes de rendez-vous. Vous fixez les règles : qui, quand, quel type de consultation.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour services professionnels",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ServicesProfessionnelsPage() {
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
