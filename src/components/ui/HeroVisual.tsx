/**
 * Visuel hero — façade haussmannienne abstraite (référence Lyon presqu'île).
 * Line art géométrique, jamais figuratif.
 */

interface HeroVisualProps {
  className?: string;
}

export default function HeroVisual({ className = "" }: HeroVisualProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Toit triangulaire */}
      <path d="M 60 80 L 200 30 L 340 80" />
      <path d="M 60 80 L 340 80" />

      {/* Corniche supérieure */}
      <path d="M 50 90 L 350 90" />
      <path d="M 50 95 L 350 95" strokeWidth="0.4" opacity="0.6" />

      {/* Niveau combles */}
      <rect x="100" y="100" width="40" height="30" />
      <rect x="180" y="100" width="40" height="30" />
      <rect x="260" y="100" width="40" height="30" />

      {/* Corniche médiane */}
      <path d="M 50 145 L 350 145" />
      <path d="M 50 150 L 350 150" strokeWidth="0.4" opacity="0.6" />

      {/* Niveau 3 — fenêtres avec balcon ferronnerie */}
      <rect x="80" y="160" width="50" height="80" />
      <rect x="175" y="160" width="50" height="80" />
      <rect x="270" y="160" width="50" height="80" />
      {/* Balcons ferronnerie */}
      <path d="M 75 245 L 135 245" />
      <path d="M 75 248 L 135 248" />
      <g opacity="0.7">
        {[80, 86, 92, 98, 104, 110, 116, 122, 128].map((x) => (
          <line key={`b3-1-${x}`} x1={x} y1="245" x2={x} y2="248" strokeWidth="0.4" />
        ))}
      </g>
      <path d="M 170 245 L 230 245" />
      <path d="M 170 248 L 230 248" />
      <g opacity="0.7">
        {[175, 181, 187, 193, 199, 205, 211, 217, 223].map((x) => (
          <line key={`b3-2-${x}`} x1={x} y1="245" x2={x} y2="248" strokeWidth="0.4" />
        ))}
      </g>
      <path d="M 265 245 L 325 245" />
      <path d="M 265 248 L 325 248" />
      <g opacity="0.7">
        {[270, 276, 282, 288, 294, 300, 306, 312, 318].map((x) => (
          <line key={`b3-3-${x}`} x1={x} y1="245" x2={x} y2="248" strokeWidth="0.4" />
        ))}
      </g>

      {/* Corniche niveau */}
      <path d="M 50 260 L 350 260" />

      {/* Niveau 2 — fenêtres haussmanniennes (étage noble) */}
      <rect x="80" y="275" width="50" height="95" />
      <rect x="175" y="275" width="50" height="95" />
      <rect x="270" y="275" width="50" height="95" />
      {/* Sub-divisions des fenêtres */}
      <path d="M 105 275 L 105 370" strokeWidth="0.3" opacity="0.5" />
      <path d="M 200 275 L 200 370" strokeWidth="0.3" opacity="0.5" />
      <path d="M 295 275 L 295 370" strokeWidth="0.3" opacity="0.5" />
      <path d="M 80 320 L 130 320" strokeWidth="0.3" opacity="0.5" />
      <path d="M 175 320 L 225 320" strokeWidth="0.3" opacity="0.5" />
      <path d="M 270 320 L 320 320" strokeWidth="0.3" opacity="0.5" />

      {/* Corniche RDC */}
      <path d="M 50 385 L 350 385" />
      <path d="M 50 390 L 350 390" strokeWidth="0.4" opacity="0.6" />

      {/* RDC — porche central + fenêtres latérales */}
      <rect x="80" y="400" width="50" height="80" />
      <path d="M 175 400 L 175 470 Q 175 480 200 480 Q 225 480 225 470 L 225 400" />
      <path d="M 200 400 L 200 480" strokeWidth="0.3" opacity="0.4" />
      <rect x="270" y="400" width="50" height="80" />

      {/* Sol */}
      <path d="M 30 495 L 370 495" />
      <path d="M 30 500 L 370 500" strokeWidth="0.4" opacity="0.5" />

      {/* Petit ornement en haut — clé de voûte stylisée */}
      <circle cx="200" cy="50" r="3" />
      <path d="M 197 55 L 200 60 L 203 55 Z" fill="currentColor" />
    </svg>
  );
}
