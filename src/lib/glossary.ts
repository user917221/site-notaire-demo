/**
 * Glossaire juridique notarial — 50 termes définis brièvement.
 * Format : terme exact (case-sensitive matching) → définition courte + lien optionnel.
 */

export type GlossaryEntry = {
  term: string;
  short: string; // 1-2 phrases pour tooltip
  source?: string;
};

export const GLOSSARY: Record<string, GlossaryEntry> = {
  acte_authentique: {
    term: "Acte authentique",
    short:
      "Acte rédigé par un officier public (notaire) qui possède force probante et force exécutoire. Il fait foi jusqu'à inscription de faux.",
  },
  PACS: {
    term: "PACS",
    short:
      "Pacte civil de solidarité — contrat de vie commune entre deux personnes majeures, qui produit des effets civils, fiscaux et patrimoniaux moins étendus que le mariage.",
  },
  SCI: {
    term: "SCI",
    short:
      "Société civile immobilière — structure juridique permettant de détenir et gérer un patrimoine immobilier à plusieurs, avec une grande flexibilité statutaire.",
  },
  IFI: {
    term: "IFI",
    short:
      "Impôt sur la fortune immobilière — taxe annuelle française due par les foyers dont le patrimoine immobilier net dépasse 1 300 000 €.",
  },
  VEFA: {
    term: "VEFA",
    short:
      "Vente en l'état futur d'achèvement — achat d'un bien immobilier en cours de construction, l'acquéreur devenant propriétaire au fur et à mesure de l'avancement.",
  },
  RGPD: {
    term: "RGPD",
    short:
      "Règlement général sur la protection des données — texte européen entré en application le 25 mai 2018 qui encadre le traitement des données personnelles.",
  },
  CSN: {
    term: "CSN",
    short:
      "Conseil supérieur du notariat — instance représentative du notariat français au niveau national, située 60 bd de la Tour-Maubourg à Paris.",
  },
  emoluments: {
    term: "Émoluments",
    short:
      "Rémunération du notaire pour les actes tarifés, fixée par décret et identique chez tous les notaires de France.",
  },
  honoraires: {
    term: "Honoraires",
    short:
      "Rémunération du notaire pour les actes non tarifés (conseil, négociation), librement fixée et toujours communiquée avant ouverture du dossier.",
  },
  succession: {
    term: "Succession",
    short:
      "Transmission du patrimoine d'une personne décédée à ses héritiers, organisée selon la loi (succession ab intestat) ou un testament.",
  },
  donation: {
    term: "Donation",
    short:
      "Acte par lequel une personne (donateur) transmet de son vivant la propriété d'un bien à une autre (donataire), à titre gratuit.",
  },
  donation_partage: {
    term: "Donation-partage",
    short:
      "Donation faite simultanément à plusieurs héritiers présomptifs, qui fige la valeur des biens au jour de la donation et évite les litiges futurs.",
  },
  demembrement: {
    term: "Démembrement",
    short:
      "Séparation de la propriété en nue-propriété (le bien sans en jouir) et usufruit (jouir du bien sans en être propriétaire). Outil patrimonial central.",
  },
  usufruit: {
    term: "Usufruit",
    short:
      "Droit d'utiliser un bien et d'en percevoir les fruits (loyers, intérêts) sans en être propriétaire. S'éteint au décès de l'usufruitier.",
  },
  nue_propriete: {
    term: "Nue-propriété",
    short:
      "Droit de propriété sur un bien démembré, sans pouvoir l'utiliser ou en percevoir les revenus. Le nu-propriétaire récupère la pleine propriété au décès de l'usufruitier.",
  },
  reserve_hereditaire: {
    term: "Réserve héréditaire",
    short:
      "Part minimale du patrimoine qui revient obligatoirement aux héritiers réservataires (enfants, conjoint à défaut). Le reste est appelé quotité disponible.",
  },
  quotite_disponible: {
    term: "Quotité disponible",
    short:
      "Fraction du patrimoine dont une personne peut disposer librement (testament, donation), au-delà de la réserve héréditaire.",
  },
  tontine: {
    term: "Tontine",
    short:
      "Clause d'acquisition selon laquelle, au décès d'un co-acquéreur, le survivant est réputé avoir été seul propriétaire depuis l'origine. Outil de protection irrévocable.",
  },
  indivision: {
    term: "Indivision",
    short:
      "Situation juridique dans laquelle plusieurs personnes sont propriétaires d'un même bien sans qu'il soit divisé matériellement. Toujours dissoluble à la demande d'un indivisaire.",
  },
  testament: {
    term: "Testament",
    short:
      "Acte juridique unilatéral par lequel une personne organise la transmission de ses biens après son décès. Plusieurs formes : olographe, authentique, mystique.",
  },
  testament_authentique: {
    term: "Testament authentique",
    short:
      "Testament reçu par notaire en présence de deux témoins (ou d'un second notaire), conservé en l'étude. Plus sécurisé que le testament olographe.",
  },
  mandat_protection_future: {
    term: "Mandat de protection future",
    short:
      "Acte par lequel une personne désigne par avance la personne qui la représentera si elle ne peut plus pourvoir seule à ses intérêts. Reçu par notaire.",
  },
  pacte_dutreil: {
    term: "Pacte Dutreil",
    short:
      "Dispositif fiscal permettant la transmission d'une entreprise familiale avec un abattement de 75 % sur les droits de mutation, sous conditions d'engagement de conservation.",
  },
  declaration_succession: {
    term: "Déclaration de succession",
    short:
      "Document fiscal listant l'actif et le passif du défunt, à déposer à l'administration fiscale dans les 6 mois (12 mois si décès à l'étranger).",
  },
  reglement_650_2012: {
    term: "Règlement 650/2012",
    short:
      "Règlement européen Successions du 4 juillet 2012, applicable depuis août 2015. Permet d'élire la loi de sa nationalité comme loi successorale.",
  },
  election_loi_successorale: {
    term: "Élection de loi successorale",
    short:
      "Choix exprès, dans un acte authentique, de la loi nationale comme loi applicable à sa succession (article 22 du règlement européen 650/2012).",
  },
  garde_des_sceaux: {
    term: "Garde des Sceaux",
    short:
      "Ministre de la Justice de la République française, signataire des arrêtés de nomination des notaires (officiers publics et ministériels).",
  },
  officier_public: {
    term: "Officier public",
    short:
      "Personne dépositaire d'une parcelle de la puissance publique, habilitée à conférer l'authenticité aux actes qu'elle reçoit. Statut du notaire.",
  },
  chambre_des_notaires: {
    term: "Chambre des notaires",
    short:
      "Instance départementale ou pluridépartementale qui représente, discipline et conseille les notaires de son ressort. Lyon dépend de la Chambre du Rhône.",
  },
  ressort: {
    term: "Ressort",
    short:
      "Étendue territoriale dans laquelle le notaire est compétent pour exercer son ministère. Notre étude relève du ressort de la Cour d'appel de Lyon.",
  },
  rcp: {
    term: "RCP",
    short:
      "Responsabilité civile professionnelle — assurance souscrite collectivement via le Conseil supérieur du notariat, garantissant les actes des notaires.",
  },
  attestation_immobiliere: {
    term: "Attestation immobilière",
    short:
      "Acte notarié constatant le transfert de propriété d'un immeuble par succession. Indispensable à la publication au service de publicité foncière.",
  },
  publicite_fonciere: {
    term: "Publicité foncière",
    short:
      "Service de l'État qui inscrit les actes relatifs aux immeubles (vente, donation, hypothèque) afin de les rendre opposables aux tiers.",
  },
  changement_regime_matrimonial: {
    term: "Changement de régime matrimonial",
    short:
      "Modification, par acte notarié, du régime matrimonial après deux ans de mariage. Soumis à homologation judiciaire si présence d'enfants mineurs.",
  },
  divorce_consentement_mutuel: {
    term: "Divorce par consentement mutuel",
    short:
      "Procédure simplifiée depuis 2017 : convention rédigée par les avocats, déposée au rang des minutes du notaire qui lui confère force exécutoire.",
  },
  marchand_de_biens: {
    term: "Marchand de biens",
    short:
      "Professionnel qui achète et revend des biens immobiliers à titre habituel, soumis à un régime fiscal spécifique (TVA sur marge ou prix total).",
  },
  compromis: {
    term: "Compromis",
    short:
      "Promesse synallagmatique de vente : le vendeur s'engage à vendre et l'acheteur à acheter. Engagement réciproque ferme, distinct de la promesse unilatérale.",
  },
  bail_commercial: {
    term: "Bail commercial",
    short:
      "Contrat de location pour un local utilisé à des fins commerciales, artisanales ou industrielles, encadré par les articles L.145-1 et suivants du Code de commerce.",
  },
  acte_notarie: {
    term: "Acte notarié",
    short:
      "Acte rédigé et signé par un notaire dans l'exercice de ses fonctions. Synonyme courant d'acte authentique notarial.",
  },
  legataire: {
    term: "Légataire",
    short:
      "Personne désignée dans un testament pour recevoir un bien (legs particulier), une partie du patrimoine (legs à titre universel) ou la totalité (legs universel).",
  },
  abattement: {
    term: "Abattement",
    short:
      "Somme déduite de la base taxable avant calcul des droits. En succession ligne directe : 100 000 € par enfant et par parent. En PACS / mariage : exonération totale du conjoint survivant.",
  },
  plus_value_immobiliere: {
    term: "Plus-value immobilière",
    short:
      "Différence positive entre le prix de vente et le prix d'acquisition d'un bien immobilier. Imposable au taux global de 36,2 % (impôt + prélèvements sociaux), avec abattements pour durée de détention.",
  },
  signature_electronique: {
    term: "Signature électronique",
    short:
      "Signature numérique qualifiée (eIDAS) reconnue juridiquement, qui peut être apposée sur l'acte authentique électronique (AAE) reçu par le notaire.",
  },
  cles_privees: {
    term: "Clés privées",
    short:
      "Suite alphanumérique permettant de signer une transaction sur une blockchain. Indispensable pour disposer de crypto-actifs ; sans elles, les fonds sont inaccessibles.",
  },
  crypto_actifs: {
    term: "Crypto-actifs",
    short:
      "Biens meubles incorporels au sens de l'article L.54-10-1 du Code monétaire et financier, intégrés à la masse successorale. Bitcoin, Ethereum, NFT.",
  },
  NFT: {
    term: "NFT",
    short:
      "Non-fungible token — jeton numérique non-fongible représentant un objet unique sur la blockchain. Qualifié juridiquement de bien meuble incorporel en droit français.",
  },
  CFPN: {
    term: "CFPN",
    short:
      "Centre de formation professionnelle des notaires — école qui prépare au diplôme supérieur du notariat (DSN), accessible après le master 2 droit notarial.",
  },
  CSP_plus: {
    term: "CSP+",
    short:
      "Catégorie socio-professionnelle supérieure (cadres, professions intellectuelles, dirigeants). Acronyme de classification INSEE utilisé en marketing.",
  },
  pretto: {
    term: "Bruxelles II ter",
    short:
      "Règlement européen du 25 juin 2019 qui régit les conflits de juridiction en matière matrimoniale et de responsabilité parentale dans l'Union européenne.",
  },
};

/**
 * Recherche un terme dans le glossaire (case-insensitive sur l'attribut `term`).
 */
export function findTerm(label: string): GlossaryEntry | null {
  const normalized = label.toLowerCase().trim();
  for (const entry of Object.values(GLOSSARY)) {
    if (entry.term.toLowerCase() === normalized) return entry;
  }
  return null;
}
