/**
 * Icônes services — line art bespoke, viewBox 32x32, stroke 1, currentColor.
 * Style : épuré, géométrique, pas décoratif. Aesop × Hermès Finance.
 */

interface IconProps {
  className?: string;
  size?: number;
}

const baseProps = (size = 40) => ({
  width: size,
  height: size,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

// 01 — Immobilier : façade haussmannienne stylisée
export function IconImmobilier({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M4 28 L4 14 L16 6 L28 14 L28 28" />
      <path d="M4 28 L28 28" />
      <path d="M11 28 L11 18 L21 18 L21 28" />
      <path d="M16 18 L16 28" />
      <circle cx="11" cy="14" r="0.5" fill="currentColor" />
      <circle cx="21" cy="14" r="0.5" fill="currentColor" />
      <path d="M14 14 L18 14" />
    </svg>
  );
}

// 02 — Succession : arbre généalogique minimal
export function IconSuccession({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="16" cy="6" r="2" />
      <path d="M16 8 L16 13" />
      <path d="M8 16 L24 16" />
      <path d="M8 16 L8 19" />
      <path d="M16 13 L16 19" />
      <path d="M24 16 L24 19" />
      <circle cx="8" cy="22" r="2" />
      <circle cx="16" cy="22" r="2" />
      <circle cx="24" cy="22" r="2" />
    </svg>
  );
}

// 03 — Famille : deux anneaux entrelacés (mariage/PACS)
export function IconFamille({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="12" cy="16" r="6" />
      <circle cx="20" cy="16" r="6" />
    </svg>
  );
}

// 04 — Donation : main avec offrande / passage
export function IconDonation({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M5 14 L13 14 L16 11 L19 14 L27 14" />
      <path d="M5 14 L5 22 L27 22 L27 14" />
      <path d="M16 11 L16 6" />
      <path d="M13 8 L16 6 L19 8" />
      <path d="M11 18 L21 18" />
    </svg>
  );
}

// 05 — Patrimoine : balance + colonne (équilibre civil)
export function IconPatrimoine({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M16 5 L16 27" />
      <path d="M11 27 L21 27" />
      <path d="M9 9 L23 9" />
      <path d="M9 9 L6 16 L12 16 L9 9" />
      <path d="M23 9 L20 16 L26 16 L23 9" />
      <path d="M6 16 Q9 18 12 16" />
      <path d="M20 16 Q23 18 26 16" />
    </svg>
  );
}

// Spécialité 1 — Succession internationale : globe avec méridiens
export function IconInternational({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="16" cy="16" r="11" />
      <path d="M5 16 L27 16" />
      <ellipse cx="16" cy="16" rx="5" ry="11" />
      <ellipse cx="16" cy="16" rx="11" ry="4" />
    </svg>
  );
}

// Spécialité 2 — Actifs numériques : hexagone (blockchain) + clé
export function IconCrypto({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M16 4 L26 10 L26 22 L16 28 L6 22 L6 10 Z" />
      <circle cx="13" cy="16" r="2" />
      <path d="M15 16 L21 16" />
      <path d="M19 14 L19 18" />
      <path d="M21 14 L21 18" />
    </svg>
  );
}

// Spécialité 3 — Familles recomposées : trois cercles entrelacés (Borromée)
export function IconRecomposees({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="12" cy="13" r="6" />
      <circle cx="20" cy="13" r="6" />
      <circle cx="16" cy="20" r="6" />
    </svg>
  );
}

// Décodage : clé (crypto)
export function IconCleCrypto({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="10" cy="16" r="4" />
      <path d="M14 16 L26 16" />
      <path d="M22 14 L22 19" />
      <path d="M26 14 L26 19" />
    </svg>
  );
}

// Décodage : couple (achat à deux)
export function IconCouple({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="11" cy="11" r="3" />
      <circle cx="21" cy="11" r="3" />
      <path d="M5 26 Q5 18 11 18 Q17 18 17 26" />
      <path d="M15 26 Q15 18 21 18 Q27 18 27 26" />
    </svg>
  );
}

// Décodage : avion (expatriation)
export function IconExpat({ className, size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M4 18 L28 10 L26 14 L14 18 L20 24 L17 25 L10 20 L4 22 Z" />
    </svg>
  );
}

// Mappers par id de service
export const SERVICE_ICONS = {
  immobilier: IconImmobilier,
  succession: IconSuccession,
  famille: IconFamille,
  donation: IconDonation,
  patrimoine: IconPatrimoine,
  "succession-internationale": IconInternational,
  "actifs-numeriques": IconCrypto,
  "familles-recomposees": IconRecomposees,
} as const;

export const DECODAGE_ICONS = {
  "crypto-succession": IconCleCrypto,
  "acheter-a-deux-sans-mariage": IconCouple,
  "expatriation-succession-internationale": IconExpat,
} as const;
