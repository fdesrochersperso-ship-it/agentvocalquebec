# Agent Vocal Québec — Design System

> Direction artistique : **professionnel, familier, québécois**. PAS le look "AI startup" avec gradients violets. Pense plutôt à Desjardins, Vidéotron, ou une firme comptable moderne — des marques que les PME québécoises connaissent et auxquelles elles font confiance.

## Direction créative

**Mots-clés :** Fiable. Local. Humain. Efficace. Pas flashy.

Le site doit donner l'impression de parler à une entreprise québécoise établie, pas à une startup de la Silicon Valley. On vend un agent vocal, pas de l'IA — l'IA est le comment, pas le quoi.

**Anti-références (ce qu'on NE veut PAS) :**
- Gradients violet/bleu néon sur fond blanc (look AI générique)
- Animations 3D/particules (vibe coded)
- Dark mode intégral avec glow effects
- Stock photos de robots ou de cerveaux digitaux
- Le mot "révolutionnaire" ou "cutting-edge"

**Références d'esprit (le feeling, pas le copy-paste) :**
- La solidité d'un site de services financiers québécois
- La chaleur d'un site de PME locale bien faite
- La clarté d'un SaaS B2B mature (pas early-stage)

---

## Palette de couleurs

### Couleurs principales

```css
:root {
  /* Bleu profond — couleur primaire, évoque confiance et professionnalisme */
  --color-primary: #1B365D;
  --color-primary-light: #2A4A7F;
  --color-primary-dark: #0F2341;

  /* Blanc cassé — fond principal, plus chaud que le blanc pur */
  --color-background: #FAFAF7;
  --color-surface: #FFFFFF;

  /* Cuivre/terre — accent chaleureux, évoque le Québec sans être cliché */
  --color-accent: #C4713B;
  --color-accent-light: #D4915F;
  --color-accent-dark: #A85C2F;

  /* Texte */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #5A5A5A;
  --color-text-muted: #8A8A8A;
  --color-text-inverse: #FAFAF7;

  /* Utilitaires */
  --color-border: #E2E0DB;
  --color-border-strong: #C8C5BE;
  --color-success: #2D7A4F;
  --color-error: #C43B3B;
}
```

### Règles d'utilisation
- Le bleu profond (`--color-primary`) domine : header, footer, CTAs principaux, titres importants
- Le cuivre (`--color-accent`) est utilisé avec parcimonie : highlights, badges, liens hover, éléments d'accentuation
- Le fond est `--color-background` (blanc cassé), PAS du blanc pur `#FFFFFF` sauf pour les cartes/surfaces élevées
- Ratio de contraste minimum : 4.5:1 pour le texte, 3:1 pour les éléments interactifs

---

## Typographie

### Fonts

```css
:root {
  /* Display — pour les titres. DM Serif Display : sérieux mais pas corporate-froid.
     Serif = confiance, établi, professionnel. */
  --font-display: 'DM Serif Display', Georgia, serif;

  /* Body — pour le texte courant. Plus lisible et distinctif qu'Inter/Roboto. */
  --font-body: 'Source Sans 3', 'Source Sans Pro', -apple-system, sans-serif;

  /* Mono — pour les chiffres/stats mis en évidence */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

### Import Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

### Échelle typographique

| Token | Taille | Line-height | Font | Usage |
|-------|--------|-------------|------|-------|
| `text-hero` | 56px (3.5rem) | 1.1 | Display | Hero headline uniquement |
| `text-h1` | 44px (2.75rem) | 1.15 | Display | Titres de section |
| `text-h2` | 32px (2rem) | 1.2 | Display | Sous-sections |
| `text-h3` | 24px (1.5rem) | 1.3 | Body 700 | Titres de cartes |
| `text-h4` | 20px (1.25rem) | 1.4 | Body 600 | Labels, petits titres |
| `text-body` | 18px (1.125rem) | 1.6 | Body 400 | Texte courant |
| `text-body-sm` | 16px (1rem) | 1.5 | Body 400 | Texte secondaire |
| `text-caption` | 14px (0.875rem) | 1.4 | Body 500 | Captions, footnotes |
| `text-stat` | 48px (3rem) | 1.0 | Mono 700 | Chiffres/stats |

### Règles
- Les titres de section (h1) utilisent TOUJOURS `--font-display`
- Le body text utilise TOUJOURS `--font-body`
- Les stats/chiffres mis en évidence (35%, 500$, 24/7) utilisent `--font-mono` en grand
- Pas de ALL CAPS sauf pour les petits labels/badges (max 2-3 mots)
- Sur mobile : `text-hero` → 36px, `text-h1` → 32px, `text-stat` → 36px

---

## Espacement

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;

  /* Sections : espacement vertical généreux entre les blocs */
  --section-padding-y: var(--space-5xl); /* 128px desktop */
  --section-padding-y-mobile: var(--space-3xl); /* 64px mobile */

  /* Container */
  --container-max: 1200px;
  --container-padding: var(--space-lg); /* 24px */
}
```

---

## Composants UI

### Boutons

**Primaire (CTA principal — "Réserver une démo")**
```
Background: var(--color-accent)
Text: white
Border-radius: 8px
Padding: 16px 32px
Font: var(--font-body) 600, 16px
Hover: var(--color-accent-dark), léger scale(1.02)
Transition: all 200ms ease
```

**Secondaire**
```
Background: transparent
Text: var(--color-primary)
Border: 2px solid var(--color-primary)
Border-radius: 8px
Padding: 14px 30px
Hover: background var(--color-primary), text white
```

**Tertiaire (liens textuels)**
```
Text: var(--color-accent)
Underline offset: 4px
Hover: var(--color-accent-dark)
```

### Cartes
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px
Padding: 32px
Box-shadow: 0 1px 3px rgba(0,0,0,0.04)
Hover: box-shadow 0 4px 12px rgba(0,0,0,0.08), border-color var(--color-border-strong)
Transition: all 300ms ease
```

### Badges/Pills
```
Background: var(--color-primary) à 8% opacity
Text: var(--color-primary)
Border-radius: 100px
Padding: 6px 16px
Font: var(--font-body) 600, 14px
```

---

## Animations (Framer Motion)

### Principes
- **Subtiles et purposeful** — pas de fireworks
- **Scroll-triggered** — les éléments apparaissent au scroll, pas au load
- **Rapides** — 300-500ms max pour les entrées
- **Ease-out** — rien de bouncy ou springy

### Patterns standard

```tsx
// Fade-in au scroll (pour les sections)
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Stagger pour les listes/grilles de cartes
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// Hover sur les cartes
const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
};
```

### Ce qu'on NE fait PAS
- Parallax scrolling
- Animations de texte lettre par lettre
- Floating/pulsing elements
- Confetti, particles, ou sparkles
- Transitions de page full-screen

---

## Iconographie

- **Lucide React** exclusivement
- Taille par défaut : 24px
- Stroke width : 1.5 (pas 2 — plus élégant)
- Couleur : hérite du texte parent, sauf dans les feature cards (accent)

### Icônes clés du projet
| Concept | Icône Lucide |
|---------|-------------|
| Téléphone/appels | `Phone`, `PhoneIncoming`, `PhoneMissed` |
| Calendrier/RDV | `Calendar`, `CalendarCheck` |
| 24/7 | `Clock`, `Timer` |
| Québécois/local | `MapPin` |
| Santé/clinique | `Stethoscope`, `Heart` |
| Construction | `Wrench`, `HardHat`, `Hammer` |
| Argent/ROI | `DollarSign`, `TrendingUp` |
| Sécurité/conformité | `Shield`, `Lock` |
| Audio/voix | `Mic`, `Volume2`, `Headphones` |

---

## Images & Media

### Photographie
- PAS de stock photos de gens en headsets devant des écrans
- PAS de rendus 3D de robots
- Privilégier : photos de vraies cliniques dentaires, vraies shops de plomberie, vrais bureaux de PME — ambiance québécoise
- Si pas de photos disponibles au lancement : utiliser des illustrations abstraites minimales ou pas de photos du tout (le contenu est roi)

### Audio Demo (composant critique)
- Player audio custom (pas le player HTML natif)
- Design : barre de progression + bouton play/pause + durée
- Couleurs : fond `--color-primary-dark`, barre de progression `--color-accent`
- Doit être le premier élément interactif que le visiteur voit dans le hero

---

## Responsive

### Breakpoints
```css
/* Tailwind defaults */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Règles mobile-first
- Navigation : hamburger menu sous `md`
- Grilles : 1 colonne sous `md`, 2-3 colonnes au-dessus
- Hero : titre sur 2-3 lignes max même sur mobile
- CTA sticky en bas de l'écran sur mobile (fixé, pas dans le flow)
- Pas de hover effects sur mobile — utiliser les tap states
- Touch targets minimum : 44×44px

---

## Tailwind Config (extrait)

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1B365D', light: '#2A4A7F', dark: '#0F2341' },
        accent: { DEFAULT: '#C4713B', light: '#D4915F', dark: '#A85C2F' },
        surface: '#FFFFFF',
        background: '#FAFAF7',
        border: { DEFAULT: '#E2E0DB', strong: '#C8C5BE' },
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'Source Sans Pro', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'stat': ['3rem', { lineHeight: '1.0' }],
      },
    },
  },
};
```
