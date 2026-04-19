/**
 * Illustrations éditoriales pour articles décodages.
 * Line art SVG, viewBox 200x140, currentColor.
 * Style : minimal, géométrique, conceptuel.
 */

interface ArtProps {
  className?: string;
}

const baseProps = {
  viewBox: "0 0 200 140",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 0.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// 1 — Crypto-succession : clé qui se dissout en blocs
export function ArtCrypto({ className }: ArtProps) {
  return (
    <svg className={className} {...baseProps}>
      {/* Cadenas */}
      <rect x="20" y="60" width="40" height="35" rx="2" />
      <path d="M 27 60 L 27 50 Q 27 38 40 38 Q 53 38 53 50 L 53 60" />
      <circle cx="40" cy="78" r="3" />
      <path d="M 40 81 L 40 88" />
      {/* Pont vers blocs */}
      <path d="M 60 77 L 90 77" strokeDasharray="2 2" />
      {/* Hexagones blockchain */}
      <path d="M 100 60 L 115 52 L 130 60 L 130 76 L 115 84 L 100 76 Z" />
      <path d="M 130 60 L 145 52 L 160 60 L 160 76 L 145 84 L 130 76" />
      <path d="M 160 60 L 175 52 L 190 60 L 190 76 L 175 84 L 160 76" />
      {/* Petits points connecteurs */}
      <circle cx="115" cy="68" r="1.2" fill="currentColor" />
      <circle cx="145" cy="68" r="1.2" fill="currentColor" />
      <circle cx="175" cy="68" r="1.2" fill="currentColor" />
      {/* Indication "perdu" */}
      <path d="M 100 110 L 190 110" opacity="0.4" />
      <path d="M 100 115 L 150 115" opacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}

// 2 — Achat à deux : deux trajectoires qui se rencontrent autour d'un toit
export function ArtCouple({ className }: ArtProps) {
  return (
    <svg className={className} {...baseProps}>
      {/* Trajectoires */}
      <path d="M 10 110 Q 50 90 80 75" strokeDasharray="3 3" opacity="0.6" />
      <path d="M 190 110 Q 150 90 120 75" strokeDasharray="3 3" opacity="0.6" />
      {/* Personnage gauche stylisé */}
      <circle cx="10" cy="105" r="3" />
      <path d="M 10 108 L 10 118" />
      {/* Personnage droite */}
      <circle cx="190" cy="105" r="3" />
      <path d="M 190 108 L 190 118" />
      {/* Maison centrale */}
      <path d="M 70 80 L 100 60 L 130 80 L 130 110 L 70 110 Z" />
      <path d="M 70 80 L 130 80" />
      <rect x="92" y="90" width="16" height="20" />
      {/* Toit décoré */}
      <path d="M 100 60 L 100 50" />
      <circle cx="100" cy="48" r="2" />
      {/* Sol */}
      <path d="M 5 120 L 195 120" opacity="0.5" />
    </svg>
  );
}

// 3 — Expat : continents reliés par méridiens, point pulsant
export function ArtExpat({ className }: ArtProps) {
  return (
    <svg className={className} {...baseProps}>
      {/* Globe abstrait */}
      <ellipse cx="100" cy="70" rx="55" ry="55" />
      <ellipse cx="100" cy="70" rx="55" ry="20" opacity="0.5" />
      <ellipse cx="100" cy="70" rx="55" ry="10" opacity="0.3" />
      <path d="M 100 15 L 100 125" opacity="0.6" />
      <ellipse cx="100" cy="70" rx="22" ry="55" opacity="0.4" />
      <ellipse cx="100" cy="70" rx="40" ry="55" opacity="0.4" />
      {/* Continents abstraits */}
      <path
        d="M 70 50 Q 80 45 90 50 L 95 60 L 85 65 Z"
        fill="currentColor"
        opacity="0.15"
        stroke="none"
      />
      <path
        d="M 110 80 Q 125 75 130 85 L 125 95 L 115 92 Z"
        fill="currentColor"
        opacity="0.15"
        stroke="none"
      />
      {/* Trajectoire pointillée d'expatriation */}
      <path
        d="M 80 55 Q 120 30 130 80"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      {/* Points départ / arrivée */}
      <circle cx="80" cy="55" r="2" fill="currentColor" stroke="none" />
      <circle cx="130" cy="80" r="2" fill="currentColor" stroke="none" />
      {/* Halo pulsant arrivée */}
      <circle cx="130" cy="80" r="5" opacity="0.4" />
    </svg>
  );
}

export const CATEGORY_ART = {
  "crypto-succession": ArtCrypto,
  "acheter-a-deux-sans-mariage": ArtCouple,
  "expatriation-succession-internationale": ArtExpat,
} as const;
