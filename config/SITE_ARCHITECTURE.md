# Agent Vocal Québec — Architecture du Site

> Structure détaillée de chaque page. Chaque section est un composant React séparé dans `src/components/sections/`.

## Objectif global du site

**Conversion unique :** Réserver une démo (Calendly).

Chaque page a UN objectif. Chaque scroll mène vers le CTA. Le site est un entonnoir, pas une brochure.

---

## Navigation (Header)

```
Logo (texte "Agent Vocal Québec")  |  Cliniques  |  Construction  |  Comment ça marche  |  Tarifs  |  [Réserver une démo] (bouton accent)
```

- Logo : texte seul pour l'instant (pas de logo graphique). Font display, couleur primary.
- Le bouton "Réserver une démo" est TOUJOURS visible dans le header.
- Mobile : hamburger menu. Le bouton "Réserver une démo" reste visible même en mobile (pas dans le menu hamburger).
- Header sticky au scroll, avec backdrop-blur léger et border-bottom subtile.

---

## Page 1 : Accueil (`/`)

### Section 1.1 — Hero
**Objectif :** Capter l'attention, faire entendre la voix, pousser vers la démo.

**Layout :**
- Gauche (60%) : Titre + sous-titre + 2 boutons CTA
- Droite (40%) : Audio Demo player (composant custom)
- Mobile : empilé, audio demo en premier (au-dessus du titre)

**Contenu :**
```
Badge: "Conçu pour les entreprises québécoises"
H1: "L'agent IA qui répond pour vous et qui parle comme quelqu'un de chez nous"
Sous-titre: "Notre agent vocal IA répond au téléphone en québécois authentique, 24 heures sur 24. Il prend les rendez-vous, répond aux questions et transfère les urgences. Vos clients pensent parler à une vraie personne d'ici."
CTA primaire: "Réserver une démo gratuite"
CTA secondaire: "Voir comment ça marche"
```

**Audio Demo :**
- Player intégré avec un sample de conversation (placeholder pour l'instant)
- Label au-dessus : "Écoutez la différence"
- Deux samples à terme : un appel clinique dentaire, un appel plomberie
- Design : fond sombre (primary-dark), waveform ou barre de progression, bouton play circulaire

### Section 1.2 — Bande de stats
**Objectif :** Crédibiliser avec des chiffres.

**Layout :** 3 colonnes horizontales, fond léger (background), chiffres en font-mono grande.

```
Stat 1: "35%" → "des appels manqués en clinique"
Stat 2: "500$+" → "de revenus perdus par appel manqué"
Stat 3: "24/7" → "disponible, même le dimanche à 2h du matin"
```

### Section 1.3 — Le problème
**Objectif :** Faire ressentir la douleur.

**Titre de section :** "Vos appels manqués vous coûtent cher"

**Layout :** 2 colonnes. Gauche : texte narratif. Droite : 3 cartes de pain points.

**Texte narratif :**
```
"Votre réceptionniste est au téléphone avec un patient. Deux autres lignes sonnent. Une s'en va chez votre concurrent. L'autre laisse un message que personne n'écoute avant demain matin. Ça arrive tous les jours."
```

**Cartes :**
```
Carte 1: Icône PhoneMissed → "Appels manqués" → "35% des appels en clinique dentaire ne sont jamais répondus."
Carte 2: Icône DollarSign → "Revenus perdus" → "Chaque appel manqué représente en moyenne 500$ en soins ou contrats non réalisés."
Carte 3: Icône Clock → "Heures de fermeture" → "40% des appels arrivent en dehors des heures d'ouverture. Zéro réponse."
```

### Section 1.4 — La solution (Comment ça marche, version courte)
**Objectif :** Montrer que c'est simple.

**Titre :** "Un agent vocal IA, c'est simple"

**Layout :** 3 étapes horizontales avec numéros (1, 2, 3) et flèches entre elles.

```
Étape 1: "On branche" → "On configure votre agent vocal IA avec vos horaires, services et préférences. Aucun changement de numéro de téléphone."
Étape 2: "L'IA répond" → "Chaque appel est pris en charge : questions fréquentes, prise de rendez-vous, transfert d'appels urgents. En québécois naturel."
Étape 3: "Vous recevez" → "Résumé de chaque appel, nouveaux rendez-vous dans votre agenda, notifications en temps réel."
```

### Section 1.5 — Verticales (preview)
**Objectif :** Diriger vers la bonne page verticale.

**Titre :** "Pensé pour votre industrie"

**Layout :** 2 grandes cartes côte à côte.

```
Carte Santé:
  Icône: Stethoscope
  Titre: "Cliniques & santé"
  Description: "Dentaire, médico-esthétique, physio, chiro. Intégration avec vos logiciels de clinique."
  Lien: "Découvrir →" → /cliniques

Carte Construction:
  Icône: HardHat
  Titre: "Construction & métiers"
  Description: "Plomberie, HVAC, électriciens, rénovation. Dispatch d'urgence et prise de soumissions."
  Lien: "Découvrir →" → /construction
```

### Section 1.6 — Différenciateurs
**Objectif :** Se distinguer de la concurrence (surtout les solutions de France et les chatbots).

**Titre :** "Pourquoi Agent Vocal Québec"

**Layout :** Grille 2×3 de feature cards.

```
1. "Québécois authentique" → "Pas du français de France. Notre IA parle comme vos employés parlent : naturel, chaleureux, professionnel."
2. "Vos logiciels, connectés" → "On s'intègre avec les systèmes que vous utilisez déjà : Dentitek, Cliniciel, Medesync, Google Calendar et plus."
3. "Conforme aux lois du Québec" → "Loi 25 (vie privée), Loi 96 (français), données hébergées au Canada. Pas de zone grise."
4. "Escalade humaine" → "L'IA sait quand passer l'appel à un humain. Urgences, situations délicates, demandes complexes."
5. "Appels simultanés illimités" → "5 patients appellent en même temps? Les 5 sont pris en charge. Zéro attente, zéro musique d'ascenseur."
6. "Rapports et résumés" → "Chaque appel est résumé et envoyé. Vous savez exactement ce qui se passe, sans écouter les enregistrements."
```

### Section 1.7 — Social proof (placeholder)
**Objectif :** Rassurer.

**Titre :** "Des entreprises québécoises nous font confiance"

**Layout :** Carrousel ou grille de témoignages.

**Note pour Cursor :** Pour l'instant, mettre 3 témoignages placeholder réalistes (mais clairement marqués comme exemples). Format : citation + nom + titre + entreprise + photo placeholder.

```
Placeholder 1: "On manquait 8-10 appels par jour. Depuis qu'on a Agent Vocal, c'est zéro. Et les patients trouvent ça naturel." — Dre Marie-Claude Tremblay, Clinique Dentaire des Sommets
Placeholder 2: "J'étais sur un chantier et je pouvais pas répondre. L'IA a booké trois soumissions pendant que je travaillais." — Marc-André Bouchard, Plomberie MAB
Placeholder 3: "Mes clientes appellent pour des infos sur les traitements. L'IA répond parfaitement et booke les consultations." — Stéphanie Gagnon, Clinique Esthétique Lumière
```

### Section 1.8 — CTA final
**Objectif :** Conversion.

**Layout :** Bande pleine largeur, fond primary-dark, texte blanc.

```
Titre: "Prêt à ne plus manquer un seul appel?"
Sous-titre: "Réservez une démo de 15 minutes. On vous montre comment ça sonne."
CTA: "Réserver ma démo gratuite"
Texte fin: "Aucun engagement. Aucune carte de crédit."
```

---

## Page 2 : Cliniques (`/cliniques`)

### Section 2.1 — Hero vertical
```
Badge: "Pour les cliniques privées du Québec"
H1: "Votre clinique mérite un agent vocal qui ne manque jamais un appel"
Sous-titre: "Prise de rendez-vous, questions d'assurance, rappels de suivi — le tout en québécois naturel, 24/7."
CTA: "Réserver une démo"
Audio demo: sample d'un appel clinique dentaire
```

### Section 2.2 — Sous-verticales
**Layout :** 3-4 cartes : Dentaire, Médico-esthétique, Physio/Chiro, Optométrie.

Chaque carte montre les cas d'usage spécifiques :
```
Dentaire:
  - Prise de rendez-vous (nettoyage, urgence, nouveau patient)
  - Questions d'assurance ("est-ce que mon plan couvre les couronnes?")
  - Rappels de rendez-vous et confirmations
  - Liste d'attente pour annulations

Médico-esthétique:
  - Consultation initiale (Botox, laser, fillers)
  - Questions sur les traitements et prix
  - Suivi post-traitement
  - Gestion de la confidentialité

Physio/Chiro:
  - Prise de rendez-vous par spécialité
  - Vérification des disponibilités
  - Questions sur les couvertures d'assurance
```

### Section 2.3 — Le coût des appels manqués (spécifique santé)
Calculateur interactif simple :
```
Input: "Combien d'appels manquez-vous par semaine?" (slider: 5-30)
Output: "Ça représente [X]$ de revenus perdus par mois"
Calcul: nombre × 500$ (valeur moyenne) × 4 semaines
CTA: "Arrêtez de perdre de l'argent →"
```

### Section 2.4 — Intégrations PMS/EMR
Logos/noms des systèmes supportés (ou à venir) :
```
Dentitek, Progident, ABELDent, Cliniciel, Medesync, Google Calendar, Outlook
Note: "Votre logiciel n'est pas listé? Contactez-nous — on s'adapte."
```

### Section 2.5 — CTA final (même pattern que page d'accueil)

---

## Page 3 : Construction (`/construction`)

### Section 3.1 — Hero vertical
```
Badge: "Pour les entrepreneurs du Québec"
H1: "Arrêtez de perdre des contrats parce que vous êtes sur un chantier"
Sous-titre: "Notre agent vocal IA prend les appels, filtre les urgences et booke les soumissions pendant que vous travaillez."
CTA: "Réserver une démo"
```

### Section 3.2 — Pain points métiers
```
"77% des entreprises de construction citent la pénurie de main-d'œuvre comme leur contrainte #1"
"Vous pouvez pas engager une réceptionniste pour 4-5 appels par jour. Mais ces 4-5 appels valent des milliers de dollars."
```

### Section 3.3 — Cas d'usage
```
- Dispatch d'urgence: "Fuite d'eau à 22h? L'IA évalue la gravité et vous envoie une notification."
- Prise de soumissions: "Collecte les infos du projet (adresse, type de travaux, budget) avant que vous rappeliez."
- Filtrage: "Sépare les vrais clients des vendeurs de publicité."
- Suivi: "Rappelle les leads non convertis après 48h."
```

### Section 3.4 — Pricing preview
Mettre en avant le prix accessible :
```
"À partir de 99$/mois — moins cher qu'un lunch d'équipe par semaine."
```

### Section 3.5 — CTA final

---

## Page 4 : Comment ça marche (`/comment-ca-marche`)

### Section 4.1 — Les 3 étapes (version étendue de la section 1.4)

```
Étape 1: Configuration (30 minutes)
  - On apprend votre business : services, horaires, FAQ courantes
  - On configure la voix et le ton (québécois professionnel)
  - On branche sur votre numéro existant (transfert d'appel, aucun changement de numéro)

Étape 2: L'IA travaille
  - Répond aux appels en moins de 2 secondes
  - Pose les bonnes questions selon votre industrie
  - Booke les rendez-vous directement dans votre agenda
  - Transfère à un humain si nécessaire

Étape 3: Vous gardez le contrôle
  - Résumé de chaque appel par email/SMS
  - Tableau de bord avec historique et statistiques
  - Ajustements en continu (on améliore ensemble)
```

### Section 4.2 — FAQ
```
Q: "Est-ce que les gens vont savoir que c'est une IA?"
R: "La voix est naturelle et les conversations sont fluides. Certains le remarqueront, mais l'important c'est que leur appel est pris en charge immédiatement et professionnellement."

Q: "Est-ce que je garde mon numéro de téléphone?"
R: "Oui. On utilise un transfert d'appel depuis votre numéro existant. Aucun changement pour vos clients."

Q: "Qu'est-ce qui arrive si l'IA ne sait pas répondre?"
R: "Il transfère l'appel à vous ou à un membre de votre équipe. Vous définissez les règles de transfert."

Q: "Mes données sont où?"
R: "Au Canada. On est conforme à la Loi 25 du Québec. Vos données ne sortent jamais du pays."

Q: "Ça prend combien de temps pour être opérationnel?"
R: "La configuration de base prend 30 minutes. On peut être live en 48 heures."

Q: "C'est quoi la différence avec un service de réponse traditionnel?"
R: "Un service humain coûte 2-5× plus cher, a des heures limitées, et peut pas prendre 5 appels en même temps. Notre IA est disponible 24/7, prend des appels illimités simultanément, et coûte une fraction du prix."
```

### Section 4.3 — CTA final

---

## Page 5 : Tarifs (`/tarifs`)

### Section 5.1 — Grille de prix

**Layout :** 2-3 colonnes de plans.

```
Plan Essentiel (Métiers):
  Prix: 149$/mois
  Inclus: 200 minutes, 1 numéro, résumés par email, FAQ automatisée
  Extra: 0.30$/min supplémentaire
  CTA: "Commencer"

Plan Professionnel (Cliniques):
  Prix: 397$/mois (mis en avant — "Populaire")
  Inclus: 500 minutes, intégrations PMS, prise de RDV, rappels, multi-lignes
  Extra: 0.25$/min supplémentaire
  CTA: "Réserver une démo"

Plan Entreprise:
  Prix: "Sur mesure"
  Inclus: Minutes illimitées, intégrations custom, account manager dédié, SLA
  CTA: "Nous contacter"
```

**Note :** Les prix sont indicatifs et seront ajustés après validation. Afficher "Prix en dollars canadiens. Taxes en sus."

### Section 5.2 — Comparatif
Tableau : Agent Vocal Québec vs Réceptionniste humaine vs Service de réponse traditionnel vs Ne rien faire
```
| | Agent Vocal QC | Réceptionniste | Service trad. | Rien |
|---|---|---|---|---|
| Coût/mois | 149–397$ | 4 200–5 400$ | 53–194$ | 0$ |
| Disponibilité | 24/7 | 40h/sem | Variable | 0h |
| Appels simultanés | Illimités | 1 | 1-2 | 0 |
| Prise de RDV auto | ✓ | ✓ | ✗ | ✗ |
| Québécois authentique | ✓ | ✓ | Variable | — |
| Appels manqués | ~0% | ~35% | ~15% | 100% |
```

### Section 5.3 — FAQ pricing
```
Q: "Y a-tu des frais de setup?"
R: "Non. La configuration est incluse."

Q: "Je suis engagé pour combien de temps?"
R: "Aucun engagement. Mois par mois. Annulez quand vous voulez."

Q: "C'est quoi une minute? Ça inclut quand personne parle?"
R: "Une minute = une minute d'appel. Les silences courts pendant la conversation comptent, mais pas le temps de sonnerie avant que l'IA décroche."
```

### Section 5.4 — CTA final

---

## Page 6 : Démo (`/demo`)

### Section 6.1 — Calendly Embed
```
Titre: "Réservez votre démo gratuite"
Sous-titre: "15 minutes. On vous fait entendre la voix, on vous montre le tableau de bord, et on répond à toutes vos questions."
Embed Calendly (pleine largeur, hauteur suffisante)
```

**Note :** Tant que Calendly n'est pas configuré, afficher un formulaire simple :
```
Nom, Entreprise, Téléphone, Email, Type d'entreprise (dropdown: Clinique dentaire, Médico-esthétique, Physio/Chiro, Plomberie/HVAC, Électricien, Rénovation, Autre), Message (optionnel)
Bouton: "Envoyer ma demande"
```

---

## Footer

```
Colonne 1: Logo + tagline ("Votre agent vocal IA québécois")
Colonne 2: Navigation (Accueil, Cliniques, Construction, Comment ça marche, Tarifs)
Colonne 3: Contact (Email: info@agentvocalquebec.com, Téléphone: à venir)
Colonne 4: Légal (Politique de confidentialité, Conditions d'utilisation)

Bas de page: "© 2026 Agent Vocal Québec. Tous droits réservés." + "Données hébergées au Canada 🇨🇦"
```

---

## Éléments globaux

### CTA flottant mobile
Sur mobile, un bouton fixé en bas de l'écran :
```
"Réserver une démo" — pleine largeur, fond accent, padding généreux
Disparaît quand le footer est visible (IntersectionObserver)
```

### Meta / SEO
```
Title pattern: "[Page] | Agent Vocal Québec — Agent vocal IA"
Description pattern: contextuel par page
OG Image: à créer (1200×630, titre + tagline + branding)
Langue: fr-CA
```
