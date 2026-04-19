/**
 * Contenu enrichi des articles Décodages.
 * Format : sections avec paragraphes + pull quotes + sidenotes + glossary terms à highlight.
 */

export type Paragraph = {
  text: string;
  pullQuote?: string;
  pullQuoteAttribution?: string;
  sidenote?: { marker: string; text: string };
};

export type ArticleSection = {
  id: string;
  num: string;
  heading: string;
  paragraphs: Paragraph[];
};

export type ArticleBody = {
  intro: string;
  sections: ArticleSection[];
  conclusion: string;
  // Termes du glossaire à mettre en évidence partout dans le corps
  glossaryTerms: string[];
};

export const ARTICLE_BODIES: Record<string, ArticleBody> = {
  "crypto-succession": {
    intro:
      "En France, depuis l'article L.54-10-1 du Code monétaire et financier introduit par la loi PACTE (2019), les actifs numériques sont qualifiés de biens meubles incorporels. À ce titre, ils entrent dans la masse successorale au même titre qu'un compte-titres ou un portefeuille immobilier. Mais une difficulté pratique majeure les distingue : sans accès aux clés privées, l'héritier contemple une fortune à laquelle il ne pourra jamais toucher.",
    glossaryTerms: [
      "crypto-actifs",
      "clés privées",
      "NFT",
      "succession",
      "acte authentique",
      "abattement",
      "PACS",
      "IFI",
      "mandat de protection future",
      "testament",
    ],
    sections: [
      {
        id: "probleme",
        num: "01",
        heading: "Le problème : la mort d'un détenteur sans transmission",
        paragraphs: [
          {
            text: "Imaginons un cas réel anonymisé. Un client de l'étude, ingénieur lyonnais, décède en 2024. Sa déclaration IFI mentionne un portefeuille crypto-actifs estimé à 380 000 €. Les héritiers connaissent l'existence de ce portefeuille. Ils n'ont aucun accès aux clés privées, aucune phrase de récupération (« seed phrase »), aucune indication sur le wallet utilisé. Le portefeuille est juridiquement intégré à la succession. Fiscalement, les droits de mutation s'appliquent sur la valeur déclarée. Pratiquement, les héritiers paient des droits sur des actifs qu'ils ne pourront jamais récupérer.",
            pullQuote:
              "Les héritiers paient des droits de succession sur des actifs auxquels ils n'auront jamais accès.",
            sidenote: {
              marker: "i",
              text: "Cas vécu en cabinet en 2024. Selon Chainalysis, environ 20 % du Bitcoin en circulation serait définitivement perdu pour cette raison.",
            },
          },
          {
            text: "Cette situation, que les notaires rencontrent désormais plusieurs fois par an, illustre la spécificité radicale des actifs cryptographiques : leur transmission ne dépend pas du droit, elle dépend d'une donnée — la clé privée — qui n'a jamais été conçue pour être transmise.",
          },
        ],
      },
      {
        id: "solution",
        num: "02",
        heading: "La solution : le séquestre numérique notarial",
        paragraphs: [
          {
            text: "L'étude a formalisé en 2024 une procédure de séquestre numérique. Le principe : le détenteur d'actifs numériques dépose, du vivant, ses clés privées (ou plus précisément, les éléments permettant leur reconstitution) entre les mains du notaire, dans un coffre-fort numérique chiffré. La séquence d'instructions de transmission post-mortem est intégrée à un acte authentique — testament ou mandat de protection future — qui en organise l'ouverture.",
            sidenote: {
              marker: "ii",
              text: "Procédure formalisée par la Chambre des notaires du Rhône en concertation avec un panel de Custody Service Providers européens (Coinbase Custody, Anchorage, Fireblocks).",
            },
          },
          {
            text: "Trois protocoles techniques sont disponibles selon le profil du détenteur : (1) dépôt direct de la phrase de récupération chiffrée par double clé, (2) recours à un service tiers de garde institutionnel (Coinbase Custody, Anchorage) avec transmission des credentials d'accès, ou (3) usage du chiffrement à seuil (« Shamir Secret Sharing ») où la clé est fractionnée entre le notaire, le détenteur et un tiers de confiance désigné.",
          },
        ],
      },
      {
        id: "fiscalite",
        num: "03",
        heading: "La fiscalité reste inchangée",
        paragraphs: [
          {
            text: "Important : le séquestre numérique ne modifie pas la fiscalité de transmission. Les droits de mutation à titre gratuit s'appliquent selon le barème classique (en ligne directe : abattement de 100 000 € puis tranches de 5 % à 45 %). En revanche, il rend la transmission effective et permet d'éviter le double drame — perte des actifs ET paiement des droits.",
          },
          {
            text: "Une plus-value latente est également à anticiper : les actifs numériques transmis sont valorisés à la date du décès, mais l'héritier qui les revend ensuite déclenche une plus-value imposable au prélèvement forfaitaire unique (30 %, hors contributions sociales additionnelles). Une stratégie de cession progressive ou de don-cession peut être envisagée, à instruire dossier par dossier.",
            pullQuote:
              "L'enjeu n'est plus juridique. Il est devenu opérationnel : organiser la transmission de la clé.",
          },
        ],
      },
    ],
    conclusion:
      "L'enjeu, pour les détenteurs de crypto-actifs, n'est pas tant juridique que pratique : la France a clarifié le régime fiscal et successoral. Reste à organiser la transmission de la clé. Pour cela, le notaire reste l'interlocuteur naturel — c'est précisément son métier d'organiser ce qui doit l'être avant qu'il ne soit trop tard.",
  },

  "acheter-a-deux-sans-mariage": {
    intro:
      "Selon l'INSEE, 6,3 millions de couples vivent en France hors mariage en 2026 — cohabitation hors statut, PACS, ou union libre stricte. Pourtant, l'achat immobilier à deux reste structuré juridiquement comme s'il était l'exception. Trois montages dominent : l'indivision, la SCI familiale et la tontine. Comparatif structuré.",
    glossaryTerms: [
      "indivision",
      "SCI",
      "tontine",
      "PACS",
      "donation",
      "succession",
      "démembrement",
      "compromis",
      "abattement",
    ],
    sections: [
      {
        id: "indivision",
        num: "01",
        heading: "L'indivision : par défaut, pas par choix",
        paragraphs: [
          {
            text: "Lorsque deux personnes non mariées achètent un bien sans précision, elles l'achètent en indivision. Chacun est propriétaire à hauteur de son apport (50/50 le plus souvent, mais peut être ajusté). En cas de séparation, l'indivision est toujours dissoluble — l'un des indivisaires peut exiger le partage à tout moment (article 815 du Code civil). En cas de décès, la part du défunt revient à ses héritiers légaux, jamais au survivant.",
            sidenote: {
              marker: "i",
              text: "« Nul ne peut être contraint à demeurer dans l'indivision » — article 815 du Code civil. Principe vieux de plus de deux siècles, toujours appliqué.",
            },
          },
          {
            text: "Conséquence pratique : si vous achetez en indivision avec votre partenaire et qu'il décède, ses parents ou ses enfants d'une union précédente deviennent vos co-indivisaires, avec droit d'exiger le partage. Le survivant peut être contraint de racheter la part — souvent dans l'urgence, parfois sans pouvoir financer.",
            pullQuote:
              "L'indivision n'est pas une stratégie. C'est ce qui se passe quand on n'en a pas.",
          },
        ],
      },
      {
        id: "sci",
        num: "02",
        heading: "La SCI familiale : le contrôle, mais pas la spontanéité",
        paragraphs: [
          {
            text: "La société civile immobilière permet de structurer la propriété en parts sociales. Les statuts définissent le pouvoir de gestion, les modalités de cession des parts, et — point crucial — le sort des parts en cas de décès. On peut prévoir, par clause statutaire, que le survivant rachète les parts du défunt à un prix fixé d'avance, voire qu'il en soit attributaire prioritaire.",
            sidenote: {
              marker: "ii",
              text: "Une SCI bien rédigée protège, mal rédigée elle complique. Les statuts-types des plateformes en ligne sont rarement adaptés aux configurations sensibles.",
            },
          },
          {
            text: "Avantages : flexibilité de gestion, transmission organisée, optimisation fiscale possible (démembrement, réserve d'usufruit). Inconvénients : coût de constitution (1 500 à 3 000 €), comptabilité annuelle obligatoire, formalisme des décisions. À réserver aux patrimoines structurés et aux projets à long terme.",
          },
        ],
      },
      {
        id: "tontine",
        num: "03",
        heading: "La tontine : la clause magique, mais pas pour tout le monde",
        paragraphs: [
          {
            text: "La clause de tontine (ou « pacte tontinier ») est une clause insérée dans l'acte d'achat qui prévoit que le survivant des co-acquéreurs sera réputé avoir été seul propriétaire du bien depuis l'origine. Conséquence : les héritiers du défunt n'ont aucun droit sur le bien. C'est l'outil de protection le plus radical pour les couples non mariés.",
          },
          {
            text: "Mais la tontine a deux limites. Fiscale : si le bien vaut plus de 76 000 €, les droits de mutation à titre gratuit s'appliquent (jusqu'à 60 % entre concubins non pacsés). Juridique : la tontine est irrévocable. Si le couple se sépare, aucun des deux ne peut sortir du pacte sans l'accord de l'autre. Outil de protection, pas de souplesse.",
            pullQuote:
              "La tontine est l'outil le plus radical — et le plus rigide. À choisir en pleine conscience.",
            sidenote: {
              marker: "iii",
              text: "Sortir d'une tontine en cas de séparation revient à signer un acte de vente entre les deux co-acquéreurs. Cher fiscalement, et impossible si l'un refuse.",
            },
          },
        ],
      },
    ],
    conclusion:
      "Aucune des trois solutions n'est universellement supérieure. Le choix dépend du profil du couple (durée de vie commune, écart d'âge, écart patrimonial), de la valeur du bien, et surtout de l'objectif : protection en cas de décès, optimisation fiscale, ou flexibilité de gestion. Un audit de quarante minutes permet généralement de cadrer la décision — c'est le format que nous proposons en premier rendez-vous.",
  },

  "expatriation-succession-internationale": {
    intro:
      "Vous vivez à Berlin, Genève ou Singapour. Votre patrimoine — appartement parisien, assurance-vie française, parts de SCI familiale — est resté en France. Que se passe-t-il à votre décès ? Selon votre situation, votre succession peut être réglée selon le droit français, le droit du pays de résidence, ou les deux à la fois. Sans anticipation, le résultat est rarement celui que vous auriez choisi.",
    glossaryTerms: [
      "succession",
      "Règlement 650/2012",
      "Élection de loi successorale",
      "SCI",
      "donation",
      "PACS",
      "abattement",
      "acte authentique",
    ],
    sections: [
      {
        id: "principe",
        num: "01",
        heading: "Le règlement européen 650/2012 : le principe d'unité",
        paragraphs: [
          {
            text: "Depuis le 17 août 2015, le règlement européen Successions (n° 650/2012) s'applique dans 25 États membres de l'Union européenne (sauf Irlande et Danemark). Son apport majeur : la succession est désormais réglée selon une loi unique — celle du pays où le défunt avait sa « résidence habituelle » au moment du décès. Adieu, en théorie, le morcellement entre droit français pour les immeubles et droit étranger pour le mobilier.",
            sidenote: {
              marker: "i",
              text: "Le règlement ne s'applique pas aux successions ouvertes avant le 17 août 2015. Pour ces dossiers, l'ancien régime conflictuel (loi française ou loi du dernier domicile pour le mobilier) reste applicable.",
            },
          },
          {
            text: "« En théorie » seulement. Dans les faits, la résidence habituelle d'un binational, d'un cadre expatrié ou d'un retraité au soleil n'est pas toujours évidente à qualifier. Et tant que la résidence n'est pas qualifiée, la succession reste juridiquement incertaine — avec à la clé des contentieux internationaux qui durent des années.",
            pullQuote:
              "La résidence habituelle est une notion floue. Elle alimente plus de contentieux qu'elle n'en évite.",
          },
        ],
      },
      {
        id: "election",
        num: "02",
        heading: "L'élection de loi : la clause qui sécurise tout",
        paragraphs: [
          {
            text: "Le règlement permet à toute personne d'élire, par disposition testamentaire authentique, la loi de sa nationalité comme loi successorale applicable. Un Français résidant en Allemagne peut ainsi choisir que sa succession soit réglée selon le droit français — y compris pour ses biens situés à Berlin. C'est le verrou juridique qui transforme une situation incertaine en situation maîtrisée.",
            sidenote: {
              marker: "ii",
              text: "Un binational peut élire indifféremment l'une ou l'autre de ses lois nationales, ce qui ouvre des stratégies d'optimisation patrimoniale puissantes.",
            },
          },
          {
            text: "L'élection de loi se fait dans un acte authentique reçu par notaire. Elle peut être combinée avec d'autres outils : testament international (convention de Washington), pacte successoral (autorisé en droit allemand, en partie en droit français depuis 2006), donation transfrontalière. Chaque outil a ses limites — le rôle du notaire est de construire la combinatoire qui correspond à la situation.",
          },
        ],
      },
      {
        id: "fiscalite-int",
        num: "03",
        heading: "La fiscalité : un terrain à part",
        paragraphs: [
          {
            text: "Attention : le règlement 650/2012 ne traite que du droit civil. La fiscalité reste régie par les conventions bilatérales entre États (et il n'y en a pas avec tous les pays). Un Français décédé en Suisse peut voir sa succession civile réglée selon le droit français (s'il a fait l'élection de loi), mais la fiscalité applicable dépendra de la convention franco-suisse de 1953 — et de l'État dans lequel chaque bien est situé.",
            pullQuote:
              "Le droit civil et la fiscalité ne suivent pas les mêmes règles. Les négliger, c'est s'exposer à une double imposition.",
          },
          {
            text: "Cas typique : un retraité français installé à Singapour, qui détient un appartement à Lyon. Civilement, sa succession peut être réglée en droit français. Fiscalement, l'appartement lyonnais est imposable en France au titre des droits de mutation, son patrimoine financier singapourien selon le droit local (qui ne taxe pas les successions). Sans anticipation, les héritiers découvrent la facture après coup.",
            sidenote: {
              marker: "iii",
              text: "La France a conclu une vingtaine de conventions fiscales en matière de successions. Pour les pays non couverts, les héritiers peuvent subir une double imposition partiellement réduite par crédit d'impôt.",
            },
          },
        ],
      },
    ],
    conclusion:
      "Il est rarement trop tôt pour cadrer une succession internationale. Plus tôt l'élection de loi est faite, plus tôt les outils de planification (donations, démembrements, assurance-vie internationale) peuvent être déployés. Pour les expatriés et binationaux, c'est typiquement un travail de quelques mois — à entamer avant que la situation ne se complique.",
  },
};
