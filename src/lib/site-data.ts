export const SITE_NAME = "Agent Vocal Québec";
export const SITE_URL = "https://www.agentvocalquebec.com";

export interface IndustryDirectoryEntry {
  href: string;
  label: string;
  description: string;
  icon: string;
  featured?: boolean;
  navFeatured?: boolean;
}

export const INDUSTRY_DIRECTORY: IndustryDirectoryEntry[] = [
  {
    href: "/industries/cliniques-dentaires",
    label: "Cliniques dentaires",
    description:
      "Prise de rendez-vous, rappels patients et triage téléphonique branchés sur vos outils de clinique.",
    icon: "Stethoscope",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/medico-esthetique",
    label: "Médico-esthétique",
    description:
      "Consultations, questions sur les traitements et suivis avec le bon niveau de discrétion.",
    icon: "Sparkles",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/construction",
    label: "Construction & métiers",
    description:
      "Dispatch d'urgence, soumissions et filtrage d'appels pendant que vous êtes sur le chantier.",
    icon: "HardHat",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/plomberie",
    label: "Plomberie",
    description:
      "Urgences, fuites d'eau, prises de rendez-vous et soumissions pendant que l'équipe est sur la route.",
    icon: "Droplets",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/chauffage-climatisation",
    label: "Chauffage & climatisation",
    description:
      "Pannes, appels saisonniers et entretiens récurrents pour les équipes CVAC du Québec.",
    icon: "Snowflake",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/cliniques-veterinaires",
    label: "Cliniques vétérinaires",
    description:
      "Rendez-vous, urgences, renouvellements et réponses aux propriétaires sans faire attendre le comptoir.",
    icon: "PawPrint",
    featured: true,
    navFeatured: true,
  },
  {
    href: "/industries/electriciens",
    label: "Électriciens",
    description:
      "Urgences, appels de service et demandes de soumission pendant que les techniciens sont en intervention.",
    icon: "Zap",
    navFeatured: true,
  },
  {
    href: "/industries/garages-automobiles",
    label: "Garages automobiles",
    description:
      "Rendez-vous d'entretien, statuts de réparation et rappels de service.",
    icon: "Car",
    navFeatured: true,
  },
  {
    href: "/industries/restaurants",
    label: "Restaurants",
    description: "Réservations, commandes et questions de menu aux heures de pointe.",
    icon: "UtensilsCrossed",
  },
  {
    href: "/industries/assurances",
    label: "Assurances",
    description: "Sinistres, qualification de prospects et rendez-vous de suivi.",
    icon: "Shield",
  },
  {
    href: "/industries/services-professionnels",
    label: "Services professionnels",
    description: "Comptables, consultants et cabinets qui veulent filtrer les appels.",
    icon: "Briefcase",
  },
  {
    href: "/industries/immobilier",
    label: "Immobilier",
    description: "Visites, qualification de leads et réponses sur les propriétés.",
    icon: "Home",
  },
  {
    href: "/industries/salons-beaute",
    label: "Salons & beauté",
    description: "Réservations, annulations et rappels pour les horaires chargés.",
    icon: "Scissors",
  },
  {
    href: "/industries/services-juridiques",
    label: "Services juridiques",
    description: "Consultations initiales, filtrage de dossiers et confidentialité.",
    icon: "Scale",
  },
  {
    href: "/industries/physio-chiro",
    label: "Physio / Chiro",
    description: "Rendez-vous par spécialité, assurance et disponibilités.",
    icon: "Activity",
  },
  {
    href: "/industries/hotellerie",
    label: "Hôtels & hébergement",
    description: "Réservations, disponibilités et questions fréquentes des clients.",
    icon: "Hotel",
  },
  {
    href: "/industries/nettoyage",
    label: "Nettoyage & entretien",
    description: "Devis, planification de visites et urgences terrain.",
    icon: "SprayCan",
  },
];

export const FEATURED_INDUSTRIES = INDUSTRY_DIRECTORY.filter(
  (industry) => industry.featured
);

export const HEADER_INDUSTRY_LINKS = INDUSTRY_DIRECTORY.filter(
  (industry) => industry.navFeatured
);
