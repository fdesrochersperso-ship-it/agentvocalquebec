import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "Agent téléphonique IA pour cabinets d'avocats | Réceptionniste IA juridique avocat",
  description:
    "Agent téléphonique IA pour cabinets juridiques au Québec. Consultations, filtrage de dossiers, confidentialité totale.",
  path: "/industries/services-juridiques",
});

const PAGE_PROPS = {
  badge: "Services juridiques",
  title: "L'agent vocal IA pour les cabinets juridiques",
  subtitle:
    "Consultations initiales, filtrage de dossiers, prise de rendez-vous : votre agent gère l'accueil téléphonique en toute confidentialité.",
  stats: [
    { value: "100%", label: "confidentialité" },
    { value: "0", label: "appel manqué" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "En audience ou en réunion",
      description:
        "Quand vous êtes au palais ou avec un client, les appels s'accumulent. Les prospects ne rappellent pas.",
    },
    {
      icon: "Lock",
      title: "L'information doit rester confidentielle",
      description:
        "Chaque appel touche à des dossiers sensibles. L'accueil doit rester professionnel et discret.",
    },
  ],
  useCases: [
    {
      icon: "UserPlus",
      title: "Consultations initiales",
      description:
        "Collecte le motif de la consultation et les infos de base. Dirige vers le bon avocat ou le bon domaine de pratique.",
    },
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "Booke les consultations selon les disponibilités de chaque avocat.",
    },
    {
      icon: "Filter",
      title: "Filtrage de dossiers",
      description:
        "Identifie la nature du dossier (familial, immobilier, commercial) et priorise selon l'urgence.",
    },
    {
      icon: "ListChecks",
      title: "Suivi de dossiers",
      description:
        "Rappels pour signatures, échéances, mises à jour : l'agent coordonne avec votre équipe.",
    },
  ],
  integrations: ["Clio", "PracticePanther", "Google Calendar", "Outlook", "MyCase"],
  faq: [
    {
      question: "Comment assurez-vous la confidentialité des dossiers?",
      answer:
        "L'agent ne demande jamais de détails sensibles par téléphone. Il collecte le motif général et dirige l'appel. Données hébergées au Canada, conformes à la Loi 25 et à vos obligations professionnelles.",
    },
    {
      question: "Peut-il gérer les urgences juridiques?",
      answer:
        "Oui. Vous fixez les critères d'urgence. L'agent priorise et transfère immédiatement les cas critiques au bon avocat.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour services juridiques",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ServicesJuridiquesPage() {
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
