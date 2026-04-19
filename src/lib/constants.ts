export const SITE = {
  name: "Vasseur • Aubry • Roussel",
  shortName: "VAR Notaires",
  tagline:
    "Étude notariale — Lyon presqu'île. Pour vos projets immobiliers, familiaux et patrimoniaux.",
  description:
    "SCP Vasseur • Aubry • Roussel, étude notariale lyonnaise. Immobilier, succession, famille, donation, conseil patrimonial. Pour particuliers et entreprises.",
  url: "https://var-notaires.fr",
  domain: "var-notaires.fr",
  locale: "fr_FR",
  siret: "384 672 915 00024",
  tva: "FR45384672915",
  ressort: "Cour d'appel de Lyon",
  chambre: "Chambre des Notaires du Rhône",
  contact: {
    phone: "04 78 38 14 22",
    email: "contact@var-notaires.fr",
    address: "14 quai des Célestins",
    city: "Lyon",
    postalCode: "69002",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    hours: "Lun–Ven : 9h–12h30 / 14h–18h",
    rdvHours: "Sur rendez-vous, en présentiel ou visioconférence",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/var-notaires",
  },
  notaires: [
    {
      slug: "sophie-vasseur",
      name: "Maître Sophie Vasseur",
      role: "Notaire associée gérante",
      specialty: "Succession internationale, patrimoine transfrontalier",
      bio:
        "Diplômée du Centre de Formation Professionnelle des Notaires (Lyon, 2008), Sophie a passé six ans dans une étude genevoise avant de rejoindre l'étude en 2017. Elle pilote les dossiers à dimension internationale — règlement européen 650/2012, élection de loi successorale, expatriés multi-juridictions.",
      petitPlus:
        "Lit en cinq langues — y compris le règlement Bruxelles II ter dans le texte allemand.",
      languages: ["Français", "Anglais", "Allemand", "Italien"],
    },
    {
      slug: "julien-aubry",
      name: "Maître Julien Aubry",
      role: "Notaire associé",
      specialty: "Immobilier, VEFA, fiscalité patrimoniale",
      bio:
        "Ancien clerc de notaire devenu associé en 2019, Julien sécurise les transactions immobilières — du compromis au déblocage des fonds — pour particuliers, marchands de biens et SCI familiales. Conseil récurrent auprès de plusieurs promoteurs régionaux.",
      petitPlus:
        "Capable d'expliquer une plus-value immobilière à un enfant de huit ans. Testé.",
      languages: ["Français", "Anglais"],
    },
    {
      slug: "camille-roussel",
      name: "Maître Camille Roussel",
      role: "Notaire associée",
      specialty: "Famille, PACS, divorce par consentement mutuel, transmission anticipée",
      bio:
        "Reçue notaire en 2014 après une thèse en droit patrimonial de la famille à Lyon III, Camille accompagne les couples — mariés, pacsés, en union libre — sur tout le cycle de vie : régime matrimonial, donation entre époux, recomposition, séparation. Médiatrice familiale agréée.",
      petitPlus:
        "Anime un séminaire annuel pour les chefs d'entreprise sur la transmission familiale.",
      languages: ["Français", "Anglais", "Espagnol"],
    },
  ],
  legalRefs: {
    csn: "Conseil Supérieur du Notariat — 60 bd de la Tour-Maubourg, 75007 Paris",
    chambreAdresse:
      "Chambre des Notaires du Rhône — 58 rue de la Charité, 69002 Lyon",
    mediateur:
      "Médiateur de la consommation : Me Valérie Dejoie — mediateur-notariat.notaires.fr",
    rcp:
      "Assurance de responsabilité civile professionnelle souscrite via le Conseil Supérieur du Notariat",
    autoriteTutelle:
      "Officiers publics nommés par arrêté du Garde des Sceaux, Ministère de la Justice",
    deontologie:
      "Site informatif respectant les règles professionnelles du notariat (arrêté du 29 janvier 2024)",
  },
} as const;

export const NAV_ITEMS = [
  { label: "L'étude", href: "/etude" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Immobilier", href: "/services#immobilier" },
      { label: "Succession", href: "/services#succession" },
      { label: "Famille", href: "/services#famille" },
      { label: "Donation", href: "/services#donation" },
      { label: "Patrimoine", href: "/services#patrimoine" },
      { label: "Spécialités", href: "/services#specialites" },
    ],
  },
  { label: "Équipe", href: "/equipe" },
  { label: "Décodages", href: "/decodages" },
  {
    label: "Outils",
    href: "/calculateur-frais-notaire",
    children: [
      { label: "Calculateur frais de notaire", href: "/calculateur-frais-notaire" },
    ],
  },
] as const;

export const STATS = [
  { value: "1 850+", label: "Actes reçus en 2025" },
  { value: "3", label: "Notaires associés" },
  { value: "15", label: "Collaborateurs spécialisés" },
  { value: "4", label: "Langues de travail" },
] as const;

export const SERVICES = [
  {
    id: "immobilier",
    number: "01",
    title: "Immobilier & vente",
    short:
      "De la promesse à la signature, votre transaction sécurisée par acte authentique.",
    long:
      "Compromis, vente, achat en VEFA, division parcellaire, copropriété, baux commerciaux. Nous instruisons chaque dossier de bout en bout — diagnostic, financement, déblocage des fonds — et vous expliquons chaque ligne avant signature.",
    items: [
      "Vente et achat de résidence principale",
      "Investissement locatif et VEFA",
      "Division, succession immobilière",
      "Baux commerciaux et professionnels",
    ],
  },
  {
    id: "succession",
    number: "02",
    title: "Succession & transmission",
    short:
      "Anticiper, partager, transmettre — sans laisser de zones d'ombre à vos proches.",
    long:
      "Règlement de succession en France et à l'international, déclaration fiscale, partage, attestation immobilière, mandat de protection future. Nous traversons avec vous une étape qui demande autant de rigueur que d'écoute.",
    items: [
      "Règlement de succession",
      "Déclaration et optimisation fiscale",
      "Partage amiable et judiciaire",
      "Mandat de protection future",
    ],
  },
  {
    id: "famille",
    number: "03",
    title: "Famille",
    short:
      "Les grandes étapes de votre vie méritent un cadre juridique sur mesure.",
    long:
      "Contrat de mariage, PACS, changement de régime matrimonial, divorce par consentement mutuel par acte d'avocat déposé au rang des minutes du notaire, adoption simple. Une approche personnalisée pour chaque configuration familiale.",
    items: [
      "Contrat de mariage et changement de régime",
      "PACS notarié",
      "Divorce par consentement mutuel",
      "Médiation familiale",
    ],
  },
  {
    id: "donation",
    number: "04",
    title: "Donation & protection",
    short:
      "Organiser de votre vivant ce que la loi ne fera pas spontanément pour vous.",
    long:
      "Donation entre époux, donation-partage, donation transgénérationnelle, démembrement, tontine, testament authentique. Stratégies sur mesure pour protéger vos proches sans subir la fiscalité.",
    items: [
      "Donation entre époux et au dernier vivant",
      "Donation-partage (enfants, petits-enfants)",
      "Démembrement et nue-propriété",
      "Testament authentique",
    ],
  },
  {
    id: "patrimoine",
    number: "05",
    title: "Conseil patrimonial",
    short:
      "Une lecture claire de votre patrimoine, des stratégies pensées sur la durée.",
    long:
      "Audit patrimonial, SCI, holding familiale, pacte Dutreil, démembrement, optimisation IFI. Nous construisons avec vous une stratégie cohérente — civile et fiscale — qui résiste à dix ou vingt ans de vie.",
    items: [
      "Audit patrimonial complet",
      "Constitution de SCI / holding familiale",
      "Pacte Dutreil (transmission d'entreprise)",
      "Stratégies IFI et démembrement",
    ],
  },
] as const;

export const SPECIALITES = [
  {
    id: "succession-internationale",
    title: "Succession internationale",
    description:
      "Application du règlement européen 650/2012, élection de loi successorale, patrimoine multi-juridictions. Pour les expatriés, binationaux et familles dispersées sur plusieurs pays.",
    pilote: "Me Sophie Vasseur",
  },
  {
    id: "actifs-numeriques",
    title: "Transmission d'actifs numériques",
    description:
      "Crypto-actifs, NFT, comptes en ligne, mots de passe. Séquestre des clés privées, intégration à l'actif successoral, cadre déontologique CSN. L'une des rares études françaises positionnées sur ce terrain.",
    pilote: "Me Julien Aubry",
  },
  {
    id: "familles-recomposees",
    title: "Familles recomposées & couples non-mariés",
    description:
      "Tontine, testament-partage, donation entre partenaires de PACS, protection du conjoint survivant en présence d'enfants d'unions précédentes. Pour les configurations qui sortent du modèle marital classique.",
    pilote: "Me Camille Roussel",
  },
] as const;

export const TEMOIGNAGES = [
  {
    quote:
      "On nous a expliqué les frais avant de commencer. Pas de mauvaise surprise, pas de jargon. Le rendez-vous chez Maître Roussel a duré une heure trente — j'en suis ressortie avec les idées claires sur ce que ma succession deviendrait.",
    author: "Marie L.",
    context: "Succession et donation, 2025",
  },
  {
    quote:
      "Nous avions un patrimoine éclaté entre la France, l'Allemagne et la Suisse. Maître Vasseur a tout repris à zéro et nous a écrit une stratégie sur quinze ans. Trois étapes, trois actes, zéro angoisse.",
    author: "Pierre &amp; Anke S.",
    context: "Succession internationale, 2024",
  },
  {
    quote:
      "Ils ont géré ma VEFA sur Lyon Confluence du compromis au déblocage. Six mois, sans une seule relance de ma part. C'est rare.",
    author: "Camille B.",
    context: "Achat en VEFA, 2025",
  },
] as const;

export const DECODAGES = [
  {
    slug: "crypto-succession",
    title:
      "Crypto-actifs : ce qui se passe vraiment quand vous mourez sans transmettre vos clés privées",
    excerpt:
      "Bitcoin, Ethereum, NFT — la loi française les qualifie de biens meubles incorporels depuis 2019. Mais sans accès aux clés privées, vos héritiers contemplent une fortune qu'ils ne pourront jamais toucher. Guide pratique du séquestre numérique notarial.",
    date: "2026-03-12",
    readTime: "8 min",
    category: "Patrimoine numérique",
    pilote: "Me Julien Aubry",
  },
  {
    slug: "acheter-a-deux-sans-mariage",
    title:
      "Acheter à deux sans se marier : tontine, indivision, SCI — quelle protection en 2026 ?",
    excerpt:
      "La cohabitation hors mariage a augmenté de 22 % en dix ans. Pourtant, en cas de décès ou de séparation, le partenaire survivant peut tout perdre. Comparatif des trois montages juridiques, leurs coûts, leurs fragilités.",
    date: "2026-02-04",
    readTime: "10 min",
    category: "Famille & couples",
    pilote: "Me Camille Roussel",
  },
  {
    slug: "expatriation-succession-internationale",
    title:
      "Expatriation et succession : comment éviter que la France et le pays d'accueil se disputent votre héritage",
    excerpt:
      "Vous vivez à Berlin, Singapour ou Genève. Votre patrimoine reste à Paris. Sans élection de loi en amont (règlement européen 650/2012), votre succession risque d'être réglée selon des règles que vous n'avez jamais choisies.",
    date: "2025-12-18",
    readTime: "12 min",
    category: "International",
    pilote: "Me Sophie Vasseur",
  },
] as const;
