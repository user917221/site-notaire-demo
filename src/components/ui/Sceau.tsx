/**
 * Sceau notarial — référence visuelle au cachet de cire.
 * Utilisé en éléments décoratifs (footer, hero, sections).
 */

interface SceauProps {
  size?: number;
  className?: string;
  text?: string;
  year?: string;
}

export default function Sceau({
  size = 80,
  className = "",
  text = "VAR · NOTAIRES · LYON",
  year = "1987",
}: SceauProps) {
  // Cercle texte généré dynamiquement
  const radius = 32;
  const id = "sceau-circle";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden="true"
      className={className}
    >
      {/* Cercle extérieur */}
      <circle cx="40" cy="40" r="38" />
      {/* Cercle intermédiaire */}
      <circle cx="40" cy="40" r="32" strokeDasharray="0.5 1.5" />
      {/* Cercle central */}
      <circle cx="40" cy="40" r="22" />

      {/* Path circulaire pour textPath */}
      <path
        id={id}
        d={`M 40,40 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        fill="none"
        stroke="none"
      />

      {/* Texte sur cercle */}
      <text
        fontFamily="var(--font-fraunces, serif)"
        fontSize="5.5"
        letterSpacing="2.5"
        fill="currentColor"
        stroke="none"
      >
        <textPath href={`#${id}`} startOffset="0">
          {`${text} · ${text} · `}
        </textPath>
      </text>

      {/* Centre — initiales VAR */}
      <text
        x="40"
        y="38"
        fontFamily="var(--font-fraunces, serif)"
        fontSize="11"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        letterSpacing="1.5"
      >
        VAR
      </text>

      {/* Année */}
      <text
        x="40"
        y="48"
        fontFamily="var(--font-inter, sans-serif)"
        fontSize="3.5"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        letterSpacing="0.5"
      >
        EST. {year}
      </text>

      {/* Petits ornements aux 4 points cardinaux */}
      <circle cx="40" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="74" cy="40" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="40" cy="74" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="6" cy="40" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
