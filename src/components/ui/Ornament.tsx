/**
 * Frises et ornements décoratifs SVG.
 * Utilisés comme dividers entre sections ou éléments accent.
 */

interface FriseProps {
  className?: string;
  variant?: "diamond" | "wave" | "double-line" | "dots";
}

export function Frise({ className = "", variant = "diamond" }: FriseProps) {
  if (variant === "diamond") {
    return (
      <div
        className={`flex items-center justify-center gap-3 ${className}`}
        aria-hidden="true"
      >
        <span className="block w-12 h-px bg-current opacity-40" />
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          className="opacity-60"
        >
          <path d="M5 0 L10 5 L5 10 L0 5 Z" />
        </svg>
        <span className="block w-12 h-px bg-current opacity-40" />
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
        <svg
          width="80"
          height="8"
          viewBox="0 0 80 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="opacity-50"
        >
          <path d="M0 4 Q10 0 20 4 T40 4 T60 4 T80 4" />
        </svg>
      </div>
    );
  }

  if (variant === "double-line") {
    return (
      <div className={`space-y-1 ${className}`} aria-hidden="true">
        <span className="block h-px bg-current opacity-40" />
        <span className="block h-px bg-current opacity-20" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="block w-1 h-1 rounded-full bg-current"
            style={{ opacity: 0.2 + Math.abs(2 - i) * 0.15 }}
          />
        ))}
      </div>
    );
  }

  return null;
}

/**
 * Coin ornemental — petits filets en angle (pour cards premium)
 */
export function CoinOrne({
  className = "",
  position = "top-left",
  size = 16,
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}) {
  const transforms = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={{ transform: transforms[position] }}
      className={className}
      aria-hidden="true"
    >
      <path d="M0 8 L8 8 L8 0" />
      <path d="M0 4 L4 4 L4 0" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

/**
 * Pattern SVG d'arrière-plan — grille notariale subtile
 */
export function GridPattern({
  className = "",
  opacity = 0.04,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="notarial-grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#notarial-grid)" />
    </svg>
  );
}

/**
 * Pattern lignes diagonales (parchemin)
 */
export function DiagonalPattern({
  className = "",
  opacity = 0.03,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="diag-lines"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag-lines)" />
    </svg>
  );
}
