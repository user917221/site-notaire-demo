"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature notariale — paraphe manuscrit qui se dessine.
 *
 * Pattern Awwwards : SVG path animation via stroke-dashoffset.
 * Évoque un paraphe authentique posé sous l'acte. Ink drop initial,
 * puis swoop éditorial 2s, puis point final qui se pose.
 *
 * Joue à l'apparition au scroll (IO) ou délai initial.
 */

interface Props {
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
  duration?: number;
}

export default function NotarialSignature({
  className = "",
  delay = 0,
  triggerOnScroll = false,
  duration = 2000,
}: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const reduced = typeof window !== "undefined"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDrawn(true);
      return;
    }

    if (!triggerOnScroll) {
      const t = setTimeout(() => setDrawn(true), delay * 1000);
      return () => clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setDrawn(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, triggerOnScroll]);

  // Path measurements (manually approximated — actual length set via getTotalLength on mount)
  const pathLength = 880;

  return (
    <svg
      ref={ref}
      viewBox="0 0 480 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Ink drop initial — petit cercle qui apparaît */}
      <circle
        cx="14"
        cy="68"
        r="2"
        fill="currentColor"
        stroke="none"
        style={{
          opacity: drawn ? 1 : 0,
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* Paraphe principal — swoop éditorial */}
      <path
        d="
          M 14 68
          C 35 68, 55 50, 78 52
          C 110 55, 130 80, 160 82
          C 200 84, 220 60, 250 55
          C 285 50, 310 75, 345 70
          C 380 65, 400 45, 425 50
        "
        strokeDasharray={pathLength}
        strokeDashoffset={drawn ? 0 : pathLength}
        style={{
          transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          transitionDelay: drawn ? "0.3s" : "0s",
        }}
      />

      {/* Boucle finale du paraphe */}
      <path
        d="
          M 425 50
          Q 450 48, 455 65
          Q 458 82, 440 84
          Q 415 86, 405 70
        "
        strokeDasharray="180"
        strokeDashoffset={drawn ? 0 : 180}
        style={{
          transition: `stroke-dashoffset ${duration * 0.5}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          transitionDelay: drawn ? `${duration * 0.001 * 0.7}s` : "0s",
        }}
      />

      {/* Trait de soulignement — tiré ferme */}
      <path
        d="M 30 100 L 410 100"
        strokeWidth="0.8"
        strokeDasharray="380"
        strokeDashoffset={drawn ? 0 : 380}
        style={{
          transition: `stroke-dashoffset ${duration * 0.6}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          transitionDelay: drawn ? `${duration * 0.001 * 1.0}s` : "0s",
          opacity: 0.5,
        }}
      />

      {/* Point final — se pose après */}
      <circle
        cx="418"
        cy="100"
        r="2"
        fill="currentColor"
        stroke="none"
        style={{
          opacity: drawn ? 0.8 : 0,
          transform: drawn ? "scale(1)" : "scale(0)",
          transformOrigin: "418px 100px",
          transition: "opacity 0.3s ease-out, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDelay: drawn ? `${duration * 0.001 * 1.6}s` : "0s",
        }}
      />

      {/* Mention manuscrite "Reçu en l'étude" */}
      <text
        x="30"
        y="118"
        fontFamily="var(--font-fraunces, serif)"
        fontSize="9"
        fontStyle="italic"
        fill="currentColor"
        stroke="none"
        opacity="0.55"
        style={{
          opacity: drawn ? 0.55 : 0,
          transition: "opacity 0.5s ease-out",
          transitionDelay: drawn ? `${duration * 0.001 * 1.8}s` : "0s",
        }}
      >
        Reçu en l'étude — Lyon presqu'île
      </text>
    </svg>
  );
}
