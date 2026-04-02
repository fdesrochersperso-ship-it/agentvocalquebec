import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour plomberie | Réceptionniste IA plombier",
  description:
    "Agent vocal IA pour entreprises de plomberie au Québec. Fuites d'eau, urgences, soumissions et rendez-vous sans appel manqué.",
  path: "/industries/plomberie",
});

const PAGE_PROPS = {
  badge: "Plomberie",
  title: "L'agent vocal IA pour les entreprises de plomberie du Québec",
  subtitle:
    "Urgences, prises de rendez-vous, demandes de soumission et suivi des appels pendant que votre équipe est sur la route ou en intervention.",
  stats: [
    { value: "24/7", label: "prise d'appels même après les heures" },
    { value: "0", label: "urgence qui tombe directement en boîte vocale" },
    { value: "1 500$+", label: "valeur moyenne d'une intervention captée" },
  ],
  painPoints: [
    {
      icon: "Droplets",
      title: "Les vraies urgences appellent quand ça coule déjà",
      description:
        "Le client ne veut pas laisser un message pour une fuite d'eau. S'il n'obtient pas une réponse tout de suite, il appelle ailleurs.",
    },
    {
      icon: "PhoneMissed",
      title: "Chaque appel manqué est un contrat perdu",
      description:
        "Même un petit appel de service peut devenir une bonne facture. Les soumissions aussi se gagnent en répondant vite.",
    },
    {
      icon: "Wrench",
      title: "Votre équipe n'est pas assise au bureau",
      description:
        "Entre deux interventions, personne n'a le temps de qualifier chaque appel proprement ni de rappeler tout le monde.",
    },
  ],
  useCases: [
    {
      icon: "PhoneForwarded",
      title: "Transfert des urgences en temps réel",
      description:
        "L'agent détecte les urgences selon vos critères, collecte l'adresse et transfère immédiatement au bon technicien.",
    },
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "Inspection, réparation, installation: l'agent propose un créneau et confirme les détails du déplacement.",
    },
    {
      icon: "ClipboardList",
      title: "Qualification de soumissions",
      description:
        "Type de bâtiment, problème, délai, budget approximatif: vous recevez un lead clair plutôt qu'un simple message vague.",
    },
    {
      icon: "MessageSquare",
      title: "Résumé d'appel par texto ou courriel",
      description:
        "Votre équipe sait qui rappeler, pour quoi et avec quel niveau de priorité.",
    },
    {
      icon: "Filter",
      title: "Filtrage des appels non prioritaires",
      description:
        "L'agent distingue les demandes de routine des urgences pour éviter que tout se retrouve en haut de la pile.",
    },
    {
      icon: "RotateCcw",
      title: "Suivi automatique des leads",
      description:
        "Une demande de soumission restée sans réponse? L'agent peut relancer avec votre ton et vos règles.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "Housecall Pro"],
  calculatorConfig: {
    valuePerCall: 1500,
    label: "Basé sur une valeur moyenne de 1 500$ par intervention ou contrat capté.",
  },
  faq: [
    {
      question: "Est-ce que l'agent peut faire la différence entre une urgence et un appel normal?",
      answer:
        "Oui. Vous définissez les critères de gravité, les heures, le numéro de transfert et les scénarios d'escalade. L'agent agit selon vos règles.",
    },
    {
      question: "Est-ce utile si on reçoit seulement quelques appels par jour?",
      answer:
        "Oui, parce que les appels en plomberie ont souvent une forte valeur. Un seul contrat ou une seule urgence bien prise peut justifier l'outil.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour plomberie",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function PlomberiePage() {
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
