import { IndustryPageTemplate } from "@/components/sections/industry-page-template";

export const metadata = {
  title:
    "Agent téléphonique IA pour restaurants | Réceptionniste IA restauration | Agent Vocal Québec",
  description:
    "Agent vocal IA pour restaurants au Québec. Réservations, commandes, heures d'ouverture, allergènes. Zéro appel manqué aux heures de pointe.",
};

const PAGE_PROPS = {
  badge: "Restaurants",
  title: "L'agent vocal IA pour les restaurants du Québec",
  subtitle:
    "Réservations, commandes à emporter, heures d'ouverture, menu et allergènes — votre agent gère les appels pendant le rush.",
  stats: [
    { value: "40%", label: "plus de réservations" },
    { value: "0", label: "appel manqué aux heures de pointe" },
  ],
  painPoints: [
    {
      icon: "PhoneMissed",
      title: "Le rush, c'est le chaos",
      description:
        "Entre le service et la cuisine, personne pour décrocher. Les clients raccrochent et vont ailleurs.",
    },
    {
      icon: "Clock",
      title: "Les appels s'accumulent",
      description:
        "Réservations, commandes, questions sur les allergènes — tout arrive en même temps aux heures de pointe.",
    },
  ],
  useCases: [
    {
      icon: "CalendarCheck",
      title: "Réservations de tables",
      description:
        "L'agent prend les réservations directement et les inscrit dans votre système.",
    },
    {
      icon: "UtensilsCrossed",
      title: "Commandes à emporter et livraison",
      description:
        "Collecte les commandes, les adresses et les préférences. Vous recevez tout prêt à préparer.",
    },
    {
      icon: "ListChecks",
      title: "Informations menu et allergènes",
      description:
        "Répond aux questions sur les plats, les ingrédients et les allergènes courants.",
    },
    {
      icon: "Users",
      title: "Événements et groupes",
      description:
        "Gère les demandes pour soupers de groupe, anniversaires et événements privés.",
    },
  ],
  integrations: ["OpenTable", "Resy", "Google Calendar", "Outlook", "Toast"],
  faq: [
    {
      question: "Est-ce que l'agent peut prendre des commandes complexes?",
      answer:
        "Oui. Vous définissez le menu et les options. L'agent collecte les détails et vous transmet la commande complète par texto ou intégration.",
    },
    {
      question: "Ça fonctionne pendant le rush du souper?",
      answer:
        "Absolument. C'est justement là que l'agent excelle — il gère plusieurs appels en parallèle pendant que votre équipe sert les clients.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour restaurants",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function RestaurantsPage() {
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
