import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent vocal IA pour cliniques médico-esthétiques | Réceptionniste IA esthétique | Agent Vocal Québec",
  description:
    "Agent téléphonique IA pour cliniques médico-esthétiques au Québec. Consultations Botox, laser, fillers. Prise de rendez-vous confidentielle, 24/7.",
};

const PAGE_PROPS = {
  badge: "Médico-esthétique",
  title: "L'agent vocal IA pour les cliniques médico-esthétiques",
  subtitle:
    "Consultations Botox, laser, fillers, micro-needling : votre agent répond aux questions, booke les rendez-vous et garde ça confidentiel.",
  stats: [
    { value: "2 000$+", label: "valeur moyenne d'un traitement" },
    { value: "0", label: "concurrent IA au QC pour ce segment" },
    { value: "40%", label: "des appels hors heures d'ouverture" },
  ],
  painPoints: [
    {
      icon: "Clock",
      title: "Clientèle exigeante, disponibilité limitée",
      description:
        "Vos clientes veulent des réponses tout de suite. Si elles n'en ont pas, elles appellent ailleurs.",
    },
    {
      icon: "Lock",
      title: "Questions sensibles par téléphone",
      description:
        "Traitements, prix, contre-indications. L'information doit rester précise et discrète.",
    },
    {
      icon: "Moon",
      title: "40% des appels le soir et la fin de semaine",
      description:
        "Quand vos clientes ont le temps de s'informer, vous êtes fermé.",
    },
  ],
  useCases: [
    {
      icon: "Sparkles",
      title: "Consultations initiales",
      description:
        "Botox, laser, fillers, micro-needling : l'agent recueille les infos et booke la consultation.",
    },
    {
      icon: "CircleDollarSign",
      title: "Questions traitements et prix",
      description:
        "Vous décidez quels prix se donnent au téléphone et lesquels demandent une consultation.",
    },
    {
      icon: "Heart",
      title: "Suivi post-traitement",
      description:
        "Rappels de suivi automatiques après chaque traitement.",
    },
    {
      icon: "EyeOff",
      title: "Confidentialité totale",
      description:
        "Les textos de confirmation disent seulement 'rendez-vous confirmé', jamais le détail du traitement.",
    },
  ],
  integrations: [
    "Cliniko",
    "Jane App",
    "Google Calendar",
    "Medesync",
    "Outlook",
  ],
  calculatorConfig: {
    valuePerCall: 2000,
    label:
      "Basé sur une valeur moyenne de 2 000$ par traitement esthétique.",
  },
  faq: [
    {
      question: "Est-ce discret pour les traitements esthétiques?",
      answer:
        "Absolument. L'agent ne mentionne jamais les détails dans les textos ou courriels : seulement 'rendez-vous confirmé' avec la date et l'heure.",
    },
    {
      question: "Peut-il donner des prix?",
      answer:
        "Oui, selon ce que vous configurez. Vous décidez quels prix sont partagés et lesquels demandent une consultation en personne.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour cliniques médico-esthétiques",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function MedicoEsthetiquePage() {
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
