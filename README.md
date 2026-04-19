# Site démo notaire — Vasseur · Aubry · Roussel

Site web démo d'une étude notariale fictive (SCP Vasseur · Aubry · Roussel, Lyon presqu'île). Construit comme **asset commercial** par [Agence 42](https://agence-42.com) — pour pitcher des refontes à de vrais notaires français.

🔗 **Live** : [site-notaire-demo.vercel.app](https://site-notaire-demo.vercel.app)

---

## ⚠️ Important

- **Toutes les informations sont fictives** : noms des notaires, SIRET, adresse, témoignages, articles. Le site n'est ni une vraie étude ni une instance commerciale active.
- **Mentions déontologiques respectées** : pas de publicité comparative, pas de démarchage, conformité avec l'arrêté du 29 janvier 2024 sur les règles professionnelles du notariat.
- **Photos** : Unsplash (libre commercial). À remplacer par de vraies photos pour usage client.

---

## 🎨 Direction artistique

| | |
|---|---|
| **Mood** | Aesop × Hermès Finance × archives Cour de cassation |
| **Palette** | Anthracite `#0F1417` × Crème `#F5F1EA` × Or terni `#B89968` |
| **Typo** | [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif éditoriale) + [Inter](https://fonts.google.com/specimen/Inter) (sans-serif) |
| **Animations** | Liturgiques — toutes <1s, `prefers-reduced-motion` respecté |

---

## 🏗️ Stack technique

- **[Next.js 16.2.3](https://nextjs.org)** (App Router, Turbopack, RSC)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Lenis** (smooth scroll)
- **lucide-react** (icônes)
- **Vercel** (déploiement)

> ⚠️ Next.js 16 a des breaking changes vs 15. Référez-vous aux docs locales dans `node_modules/next/dist/docs/` avant tout changement structurel.

---

## 🗂️ Architecture

```
src/
├── app/
│   ├── page.tsx                    # Home
│   ├── etude/                      # /etude — Histoire 1987→2026 + valeurs
│   ├── services/                   # /services — 5 services + 3 spécialités
│   ├── equipe/                     # /equipe — 3 portraits + 4 pôles
│   ├── decodages/                  # /decodages — Index
│   │   └── [slug]/                 # /decodages/{slug} — Article (SSG)
│   ├── contact/                    # /contact — BookingPicker + formulaire
│   ├── calculateur-frais-notaire/  # /calculateur-frais-notaire — Tool
│   ├── mentions-legales/           # /mentions-legales — Cadre légal
│   ├── globals.css                 # Tokens design + classes éditoriales
│   ├── layout.tsx                  # Root + fonts + JsonLd
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/                     # Header, Footer
│   ├── providers/                  # SmoothScroll (Lenis), GrainOverlay
│   ├── seo/                        # JsonLd (LegalService schema)
│   ├── sections/                   # Hero, Services, Specialites, Equipe, etc.
│   ├── icons/                      # ServiceIcons (8 icônes SVG bespoke)
│   └── ui/                         # Composants atomiques (voir ci-dessous)
│
└── lib/
    ├── constants.ts                # SITE, NAV_ITEMS, SERVICES, etc.
    ├── images.ts                   # URLs Unsplash curées
    ├── glossary.ts                 # 50 termes juridiques
    └── decodages-content.ts        # Contenu enrichi des articles
```

### Composants UI clés

| Composant | Rôle |
|---|---|
| `Reveal` | Apparition au scroll (IntersectionObserver) |
| `MagneticButton` | CTA avec attraction au curseur |
| `ReadingProgress` | Barre 2px de progression de lecture |
| `ImageReveal` | Clip-path inset + scale au scroll |
| `TableOfContents` | Sommaire sticky avec section active |
| `GlossaryTerm` | Mot souligné + tooltip définition |
| `PullQuote` | Citation typographique en marge |
| `Sidenote` | Annotation Tufte (marge desktop, inline mobile) |
| `Sceau` | Sceau notarial circulaire SVG |
| `HeroVisual` | Façade haussmannienne abstraite SVG |
| `BookingPicker` | UI prise de RDV style Cal.com (mock) |
| `Calculator` (page) | Calculateur frais de notaire interactif |

---

## 🚀 Setup local

```bash
git clone https://github.com/<your-username>/site-notaire-demo
cd site-notaire-demo
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Personnalisation

### Changer l'identité de l'étude

Modifier **`src/lib/constants.ts`** — tout y est centralisé :

- `SITE` — nom, adresse, contact, SIRET, ressort
- `SITE.notaires` — bios des associés
- `SERVICES`, `SPECIALITES`, `TEMOIGNAGES`, `STATS`, `DECODAGES`
- `NAV_ITEMS` — navigation

### Changer les photos

Modifier **`src/lib/images.ts`** — URLs Unsplash centralisées :
- `PORTRAIT_IMAGES` — 3 portraits notaires
- `SERVICE_IMAGES` — 5 photos services
- `SPECIALITE_IMAGES` — 3 photos spécialités
- `DECODAGE_IMAGES` — 3 photos articles
- `STUDIO_IMAGES` — façade, bureau, archives

Remplacer par photos perso : copier dans `/public/images/` et changer les URLs.

### Modifier les articles "Décodages"

**`src/lib/decodages-content.ts`** — articles enrichis avec :
- `intro` (drop cap)
- `sections` avec `paragraphs` qui peuvent contenir `pullQuote` ou `sidenote`
- `glossaryTerms` — termes auto-soulignés dans le corps de l'article

### Ajouter un terme au glossaire

**`src/lib/glossary.ts`** — ajouter une entrée :
```ts
mon_terme: {
  term: "Mon terme",
  short: "Définition courte (1-2 phrases pour le tooltip).",
}
```

Le terme sera automatiquement reconnu et souligné dans les articles via `<GlossaryTerm term="mon terme" />`.

### Mettre à jour le calculateur

**`src/app/calculateur-frais-notaire/Calculator.tsx`** — barème dans `EMOLUMENTS_TRANCHES` (décret 2016), taux droits enregistrement dans le `useMemo`. À actualiser annuellement.

### Brancher un vrai Cal.com

**`src/components/ui/BookingPicker.tsx`** — actuellement mock visuel. Pour brancher Cal.com :
1. Créer un compte Cal.com pour l'étude
2. Remplacer le composant par un `<Cal />` de [`@calcom/embed-react`](https://www.npmjs.com/package/@calcom/embed-react)
3. Voir la doc : [cal.com/docs/embed](https://cal.com/docs/embed)

### Brancher le formulaire de contact

`src/app/contact/page.tsx` — le `<form>` n'a pas de handler. Options :
- [Resend](https://resend.com/) + Server Action Next.js (recommandé)
- [Formspree](https://formspree.io/), [Web3Forms](https://web3forms.com/)
- API route custom

### Désactiver les images Unsplash

Si vous voulez purement local, utiliser les portraits depuis `/public` :
```ts
// src/lib/images.ts
export const PORTRAIT_IMAGES = {
  "sophie-vasseur": { url: "/images/sophie.jpg", alt: "..." },
  // ...
}
```
Et retirer le bloc `remotePatterns` dans `next.config.ts`.

---

## 📦 Déploiement

### Vercel (recommandé)

```bash
npx vercel --prod
```

Ou en CI/CD : push sur `main` → auto-deploy via [Vercel GitHub integration](https://vercel.com/docs/git).

### Build local

```bash
npm run build
npm run start
```

### Variables d'environnement

Aucune requise pour la version actuelle (site 100% statique). À ajouter selon les intégrations :
- `RESEND_API_KEY` — si formulaire branché à Resend
- `NEXT_PUBLIC_CAL_USERNAME` — si Cal.com embed
- etc.

---

## 📝 SEO

- **JSON-LD** : `LegalService` + `Organization` schemas dans `<head>` (voir `JsonLd.tsx`)
- **Sitemap** : auto-généré (`src/app/sitemap.ts`)
- **Robots** : `src/app/robots.ts`
- **OpenGraph** : configuré dans `layout.tsx` (à compléter avec une vraie image `/public/og-image.jpg`)
- **Métadonnées par page** : exportées via `metadata` dans chaque `page.tsx`

---

## ✅ Checklist avant mise en production réelle

- [ ] Remplacer toutes les infos fictives dans `constants.ts` par les vraies données de l'étude
- [ ] Remplacer les photos Unsplash par de vraies photos shooting
- [ ] Brancher le formulaire `/contact` à un vrai backend (Resend, etc.)
- [ ] Brancher `BookingPicker` à un vrai Cal.com
- [ ] Vérifier les mentions légales (SIRET, RCP, médiateur, etc.)
- [ ] Ajouter `/public/og-image.jpg` (1200×630 px)
- [ ] Configurer Google Search Console + Analytics
- [ ] Ajouter cookie consent (CNIL) si tracking activé
- [ ] Acheter et brancher le vrai domaine
- [ ] Reverify les calculs du calculateur avec un notaire en exercice

---

## 🤝 Contribuer

1. Fork le repo
2. Branche feature : `git checkout -b feat/ma-feature`
3. Commit : `git commit -m "feat: description"`
4. Push : `git push origin feat/ma-feature`
5. Pull Request

---

## 📄 Licence

MIT — utilisez ce code librement comme base pour vos propres projets de site notarial.

---

## 🙏 Crédits

- **Design & dev** : [Agence 42](https://agence-42.com)
- **Photos** : [Unsplash](https://unsplash.com) (libre commercial)
- **Typos** : [Google Fonts](https://fonts.google.com) (Fraunces, Inter)
- **Icônes** : SVG bespoke + [lucide-react](https://lucide.dev)
- **Smooth scroll** : [Lenis](https://lenis.darkroom.engineering)
