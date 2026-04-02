import { IndustryPageTemplate } from "@/components/sections/industry-page-template";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Agent téléphonique IA pour électriciens | Réceptionniste IA électricien",
  description:
    "Agent vocal IA pour électriciens au Québec. Appels de service, urgences, soumissions et planification de travaux sans appel manqué.",
  path: "/industries/electriciens",
});

const PAGE_PROPS = {
  badge: "Électriciens",
  title: "L'agent vocal IA pour les électriciens et entrepreneurs électriques",
  subtitle:
    "Appels de service, urgences, diagnostics, soumissions et rendez-vous pendant que vos techniciens sont déjà en intervention.",
  stats: [
    { value: "24/7", label: "prise d'appels pour les pannes urgentes" },
    { value: "0", label: "appel de service perdu faute de réponse" },
    { value: "1 800$+", label: "valeur moyenne d'un bon lead capté" },
  ],
  painPoints: [
    {
      icon: "Zap",
      title: "Les urgences ne tombent jamais au bon moment",
      description:
        "Panne, panneau électrique, appel résidentiel ou commercial: la personne qui appelle veut parler à quelqu'un maintenant.",
    },
    {
      icon: "PhoneMissed",
      title: "Les appels de service se perdent vite",
      description:
        "Si personne ne répond, le client appelle le prochain entrepreneur. La perte est immédiate.",
    },
    {
      icon: "Clock",
      title: "Votre équipe n'a pas le temps de qualifier chaque demande",
      description:
        "Entre deux chantiers ou deux appels d'urgence, les détails importants se perdent vite si l'accueil est improvisé.",
    },
  ],
  useCases: [
    {
      icon: "PhoneForwarded",
      title: "Transfert des urgences électriques",
      description:
        "L'agent applique vos règles de priorité et transfère les appels critiques sans délai.",
    },
    {
      icon: "CalendarCheck",
      title: "Prise de rendez-vous",
      description:
        "Installations, appels de service, inspections et visites de soumission bookées dans votre agenda.",
    },
    {
      icon: "ClipboardList",
      title: "Qualification des travaux",
      description:
        "L'agent collecte le type de problème, le bâtiment, l'urgence et les disponibilités avant que votre équipe rappelle.",
    },
    {
      icon: "Shield",
      title: "Filtrage des demandes non pertinentes",
      description:
        "Vendeurs, erreurs de numéro ou appels incomplets: votre équipe garde son temps pour les vrais clients.",
    },
    {
      icon: "MessageSquare",
      title: "Résumés de demandes par texto",
      description:
        "Les techniciens savent quoi rappeler et avec quel contexte, même entre deux jobs.",
    },
    {
      icon: "RotateCcw",
      title: "Suivi des soumissions",
      description:
        "Les demandes qui n'ont pas encore été converties peuvent être relancées avec un scénario clair.",
    },
  ],
  integrations: ["Google Calendar", "Outlook", "Jobber", "Housecall Pro"],
  calculatorConfig: {
    valuePerCall: 1800,
    label: "Basé sur une valeur moyenne de 1 800$ par appel de service ou soumission captée.",
  },
  faq: [
    {
      question: "Est-ce utile si on fait surtout des appels de service rapides?",
      answer:
        "Oui. Ces appels se gagnent souvent sur la vitesse de réponse. L'agent sert surtout à ne pas laisser filer cette demande chaude.",
    },
    {
      question: "Est-ce que l'agent peut gérer les urgences commerciales et résidentielles différemment?",
      answer:
        "Oui. Les scénarios et règles de transfert peuvent être adaptés selon le type de client, l'horaire et le niveau d'urgence.",
    },
  ],
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Agent vocal IA pour électriciens",
  provider: { "@type": "Organization", name: "Agent Vocal Québec" },
  areaServed: { "@type": "Place", name: "Québec, Canada" },
  serviceType: "Agent téléphonique IA",
};

export default function ElectriciensPage() {
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
