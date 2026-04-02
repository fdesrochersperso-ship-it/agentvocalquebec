export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  keywords: string[];
  relatedIndustryHref?: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "agent-vocal-ia-quebec-guide",
    title: "Agent vocal IA au Québec : comment choisir une solution qui convertit vraiment",
    description:
      "Guide pratique pour choisir un agent vocal IA au Québec sans sacrifier la qualité des appels, la conformité locale ni la conversion.",
    excerpt:
      "Les appels manqués coûtent cher, mais toutes les solutions d'agent vocal IA ne se valent pas. Voici les critères qui comptent vraiment pour une entreprise québécoise.",
    publishedAt: "2026-04-01",
    readingTime: "7 min",
    tags: ["Agent vocal IA", "Québec", "SEO local"],
    keywords: [
      "agent vocal ia québec",
      "agent téléphonique ia québec",
      "réponse téléphonique ia québec",
    ],
    sections: [
      {
        heading: "Pourquoi la requête est stratégique",
        paragraphs: [
          "La requête « agent vocal IA Québec » traduit une intention très commerciale. La personne cherche déjà une solution locale, pas seulement de l'information sur l'intelligence artificielle.",
          "Pour capter cette demande, il faut parler de résultats d'affaires, d'expérience d'appel et de réalité québécoise. Un site trop générique perdra la confiance avant même la démo.",
        ],
        bullets: [
          "Mentionner clairement le Québec et le français d'ici.",
          "Montrer des cas d'usage concrets: rendez-vous, urgences, qualification, transferts.",
          "Rassurer sur la conformité, l'hébergement et l'intégration aux outils existants.",
        ],
      },
      {
        heading: "Les critères qui font la différence",
        paragraphs: [
          "Un bon agent vocal doit répondre vite, gérer plusieurs appels à la fois et transmettre une information exploitable à l'équipe. Si la solution est impressionnante en démo mais faible sur les scénarios réels, elle ne règlera pas le vrai problème.",
          "Les entreprises québécoises veulent aussi un ton crédible. Une voix artificielle ou trop neutre peut nuire aux conversions dans les secteurs sensibles comme la santé, les services à domicile ou les urgences.",
        ],
        bullets: [
          "Temps de réponse et stabilité des appels.",
          "Qualité linguistique en français du Québec.",
          "Scénarios d'urgence et règles de transfert.",
          "Intégration calendrier, CRM ou logiciel métier.",
        ],
      },
      {
        heading: "Comment transformer cette intention en rendez-vous",
        paragraphs: [
          "Une page de service performante doit faire comprendre très vite ce qui est pris en charge et pour qui. L'idéal est de combiner une page principale forte avec des pages verticales ciblées par industrie.",
          "Le blog sert ensuite à soutenir le cluster sémantique autour des objections, des comparaisons et des cas d'usage. C'est ce qui crée une vraie autorité thématique au lieu d'une simple page vitrine.",
        ],
      },
    ],
  },
  {
    slug: "receptionniste-ia-plomberie-quebec",
    title: "Réceptionniste IA pour plombiers au Québec : comment arrêter de perdre des urgences au téléphone",
    description:
      "Pourquoi les entreprises de plomberie gagnent à déployer une réceptionniste IA capable de gérer les urgences, les soumissions et les prises de rendez-vous.",
    excerpt:
      "Quand l'équipe est sur la route, chaque appel manqué peut devenir une urgence perdue. Une réceptionniste IA bien configurée règle ce problème sans ajouter une permanence complète.",
    publishedAt: "2026-04-01",
    readingTime: "6 min",
    tags: ["Plomberie", "Réceptionniste IA", "Services à domicile"],
    keywords: [
      "réceptionniste ia plombier",
      "agent téléphonique ia plomberie québec",
      "plombier appels urgences",
    ],
    relatedIndustryHref: "/industries/plomberie",
    sections: [
      {
        heading: "Le vrai coût d'un appel manqué en plomberie",
        paragraphs: [
          "En plomberie, l'appel arrive rarement au bon moment. L'équipe est en intervention, en déplacement ou déjà en train de gérer une urgence. Pourtant, le client s'attend à une réponse immédiate.",
          "Si personne ne décroche, il rappelle simplement le prochain plombier. L'enjeu n'est pas seulement la productivité administrative, c'est la perte directe de contrats et d'interventions urgentes.",
        ],
      },
      {
        heading: "Ce qu'une réceptionniste IA doit gérer",
        paragraphs: [
          "La solution doit distinguer une urgence réelle d'une simple demande d'information, collecter l'adresse, résumer le problème et envoyer l'alerte au bon technicien.",
          "Elle doit aussi être capable de prendre des rendez-vous, de qualifier les demandes de soumission et de filtrer les appels non pertinents.",
        ],
        bullets: [
          "Fuites d'eau et urgences après les heures.",
          "Demandes de soumission résidentielles et commerciales.",
          "Prises de rendez-vous pour inspection ou réparation.",
          "Résumés d'appels par texto ou courriel.",
        ],
      },
      {
        heading: "Pourquoi une page dédiée aide aussi votre SEO",
        paragraphs: [
          "Une page verticale orientée plomberie permet de répondre à des requêtes beaucoup plus proches de l'achat qu'une page « construction » trop large.",
          "C'est aussi la meilleure façon de montrer que vos scénarios d'appel sont déjà pensés pour la réalité des plombiers québécois.",
        ],
      },
    ],
  },
  {
    slug: "agent-telephonique-ia-clinique-veterinaire",
    title: "Agent téléphonique IA pour cliniques vétérinaires : réduire l'attente sans fragiliser le triage",
    description:
      "Comment une clinique vétérinaire peut utiliser un agent téléphonique IA pour les appels de routine, les renouvellements et le triage de premier niveau.",
    excerpt:
      "Les cliniques vétérinaires vivent une pression téléphonique constante. Un agent IA bien encadré peut absorber le volume courant tout en laissant les urgences à l'équipe clinique.",
    publishedAt: "2026-04-01",
    readingTime: "6 min",
    tags: ["Vétérinaire", "Agent téléphonique IA", "Santé"],
    keywords: [
      "agent téléphonique ia clinique vétérinaire",
      "réceptionniste ia vétérinaire",
      "clinique vétérinaire appels rendez-vous",
    ],
    relatedIndustryHref: "/industries/cliniques-veterinaires",
    sections: [
      {
        heading: "Le défi opérationnel des cliniques vétérinaires",
        paragraphs: [
          "Les appels se ressemblent peu: rendez-vous annuels, renouvellements, suivis post-op, nourriture spécialisée, questions sur les symptômes et urgences potentielles.",
          "Le comptoir et l'équipe vétérinaire n'ont pas besoin de plus de bruit. Ils ont besoin qu'on traite rapidement les appels répétitifs et qu'on fasse remonter les vrais cas sensibles.",
        ],
      },
      {
        heading: "Ce que l'IA peut prendre en charge en sécurité",
        paragraphs: [
          "Un agent vocal n'a pas à poser un diagnostic. Il peut toutefois faire un triage administratif, vérifier les disponibilités, rappeler la procédure de base et transférer selon vos règles.",
          "C'est cette frontière claire entre information, logistique et jugement clinique qui rend l'automatisation utile sans devenir risquée.",
        ],
        bullets: [
          "Prises de rendez-vous et confirmations.",
          "Renouvellements et demandes récurrentes.",
          "Questions fréquentes sur les horaires et services.",
          "Transfert prioritaire quand les critères d'urgence sont détectés.",
        ],
      },
      {
        heading: "Pourquoi cette thématique mérite sa propre page",
        paragraphs: [
          "Le vocabulaire, les objections et les scénarios vétérinaires sont différents de ceux d'une clinique humaine. Une page dédiée permet d'être crédible autant pour le SEO que pour la conversion.",
          "Elle vous donne aussi une base pour publier ensuite du contenu connexe sur le triage, les no-shows et la charge du comptoir.",
        ],
      },
    ],
  },
  {
    slug: "agent-vocal-hvac-quebec",
    title: "Agent vocal IA pour chauffage et climatisation au Québec : mieux gérer les pics saisonniers",
    description:
      "Pourquoi les entreprises CVAC ont intérêt à déployer un agent vocal IA pour gérer les pannes, l'entretien saisonnier et les demandes de soumission.",
    excerpt:
      "En CVAC, la pression n'est pas constante toute l'année, mais les périodes de pointe peuvent saturer les lignes en quelques heures. C'est précisément là qu'un agent vocal IA devient rentable.",
    publishedAt: "2026-04-01",
    readingTime: "5 min",
    tags: ["CVAC", "Chauffage", "Climatisation"],
    keywords: [
      "agent vocal ia chauffage climatisation",
      "réceptionniste ia hvac québec",
      "agent téléphonique cvac",
    ],
    relatedIndustryHref: "/industries/chauffage-climatisation",
    sections: [
      {
        heading: "Les pointes saisonnières changent tout",
        paragraphs: [
          "Lors d'une vague de chaleur ou d'un grand froid, le nombre d'appels explose. Les équipes terrain sont déjà pleines et le bureau se retrouve à gérer une pile de demandes urgentes et non urgentes.",
          "Le problème n'est pas seulement de répondre, c'est de prioriser correctement sans ralentir la planification.",
        ],
      },
      {
        heading: "Les scénarios à automatiser en premier",
        paragraphs: [
          "L'agent vocal doit séparer la panne critique d'une demande d'entretien, collecter les infos de l'équipement et proposer les créneaux pertinents selon vos règles.",
          "Il peut aussi soutenir les campagnes d'entretien préventif et limiter le volume d'appels répétés sur les horaires ou les zones desservies.",
        ],
        bullets: [
          "Pannes chauffage ou climatisation.",
          "Prises de rendez-vous d'entretien.",
          "Qualification de soumissions résidentielles et commerciales.",
          "Rappels de maintenance saisonnière.",
        ],
      },
      {
        heading: "Une page dédiée renforce votre cluster local",
        paragraphs: [
          "Le SEO des services à domicile gagne à être très spécifique. Une page CVAC dédiée permet de capter une intention plus précise qu'une page construction ou services à domicile générale.",
          "En complément, quelques articles ciblés permettent d'occuper davantage de terrain sur les recherches locales autour des pannes, de l'entretien et de l'urgence.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
