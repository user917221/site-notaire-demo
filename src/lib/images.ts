/**
 * URLs Unsplash curées pour le site démo notaire.
 * Toutes en Unsplash (libre commercial).
 * Pour remplacer par des photos réelles : changer simplement les IDs.
 */

const unsplash = (id: string, w = 800, h?: number, opts = "") => {
  const heightParam = h ? `&h=${h}&fit=crop` : "";
  return `https://images.unsplash.com/photo-${id}?auto=format&q=80&w=${w}${heightParam}${opts}`;
};

// === PORTRAITS NOTAIRES ===
// Style éditorial professionnel, B&W via filter CSS pour cohérence
export const PORTRAIT_IMAGES: Record<string, { url: string; alt: string }> = {
  "sophie-vasseur": {
    url: unsplash("1573496359142-b8d87734a5a2", 800, 1000),
    alt: "Portrait de Maître Sophie Vasseur, notaire associée gérante",
  },
  "julien-aubry": {
    url: unsplash("1500648767791-00dcc994a43e", 800, 1000),
    alt: "Portrait de Maître Julien Aubry, notaire associé immobilier",
  },
  "camille-roussel": {
    url: unsplash("1580489944761-15a19d654956", 800, 1000),
    alt: "Portrait de Maître Camille Roussel, notaire associée famille",
  },
};

// === SERVICES ===
export const SERVICE_IMAGES: Record<string, { url: string; alt: string }> = {
  immobilier: {
    url: unsplash("1545324418-cc1a3fa10c00", 1200, 800),
    alt: "Façade haussmannienne — services immobiliers",
  },
  succession: {
    url: unsplash("1450101499163-c8848c66ca85", 1200, 800),
    alt: "Plume et registre — règlement de succession",
  },
  famille: {
    url: unsplash("1511895426328-dc8714191300", 1200, 800),
    alt: "Anneaux — droit de la famille",
  },
  donation: {
    url: unsplash("1481627834876-b7833e8f5570", 1200, 800),
    alt: "Bibliothèque — donation et transmission",
  },
  patrimoine: {
    url: unsplash("1486406146926-c627a92ad1ab", 1200, 800),
    alt: "Architecture classique — conseil patrimonial",
  },
};

// === SPÉCIALITÉS ===
export const SPECIALITE_IMAGES: Record<string, { url: string; alt: string }> = {
  "succession-internationale": {
    url: unsplash("1488646953014-85cb44e25828", 1200, 800),
    alt: "Carte du monde — succession internationale",
  },
  "actifs-numeriques": {
    url: unsplash("1639762681485-074b7f938ba0", 1200, 800),
    alt: "Visualisation blockchain — transmission d'actifs numériques",
  },
  "familles-recomposees": {
    url: unsplash("1542038784456-1ea8e935640e", 1200, 800),
    alt: "Famille — configurations contemporaines",
  },
};

// === DÉCODAGES (article images) ===
export const DECODAGE_IMAGES: Record<string, { url: string; alt: string }> = {
  "crypto-succession": {
    url: unsplash("1639815188546-c43c240ff4df", 1600, 900),
    alt: "Code et chiffrement — crypto-actifs en succession",
  },
  "acheter-a-deux-sans-mariage": {
    url: unsplash("1560448204-e02f11c3d0e2", 1600, 900),
    alt: "Clés d'un appartement — achat à deux",
  },
  "expatriation-succession-internationale": {
    url: unsplash("1436491865332-7a61a109cc05", 1600, 900),
    alt: "Aile d'avion au-dessus des nuages — expatriation",
  },
};

// === ÉTUDE / GÉNÉRAL ===
export const STUDIO_IMAGES = {
  facade: {
    url: unsplash("1564182842519-8a3b2af3e228", 1600, 1000),
    alt: "Immeuble haussmannien quai des Célestins, Lyon presqu'île",
  },
  bureau: {
    url: unsplash("1497366216548-37526070297c", 1600, 1000),
    alt: "Bureau de l'étude — espace de signature",
  },
  archives: {
    url: unsplash("1568667256549-094345857637", 1600, 1000),
    alt: "Archives notariales reliées",
  },
  lyon: {
    url: unsplash("1602080858428-57174f9431cf", 1600, 900),
    alt: "Lyon presqu'île au crépuscule",
  },
} as const;
