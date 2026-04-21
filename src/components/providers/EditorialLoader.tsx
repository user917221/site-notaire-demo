"use client";

import { useEffect, useState } from "react";

/**
 * Loader éditorial — pattern Awwwards SOTD.
 *
 * Séquence (3s totale) :
 * 1. Plein écran anthracite avec compteur 00→100 en Fraunces XL bas-gauche
 * 2. Sceau circulaire VAR qui s'imprime au centre (stroke-dasharray animation)
 * 3. Wordmark "VASSEUR · AUBRY · ROUSSEL" reveal lettre par lettre bas
 * 4. Hold 300ms puis clip-path inset reveal vers le haut (1.2s expo)
 *
 * Skip après 1ère visite via sessionStorage.
 * Respect prefers-reduced-motion (instant).
 */

export default function EditorialLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip si déjà vu cette session
    const seen = sessionStorage.getItem("var-loader-seen");
    if (seen) {
      setEnabled(false);
      setPhase("done");
      return;
    }

    // Skip si reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEnabled(false);
      setPhase("done");
      sessionStorage.setItem("var-loader-seen", "1");
      return;
    }

    setEnabled(true);
    sessionStorage.setItem("var-loader-seen", "1");

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Counter 0 → 100
    const startTime = performance.now();
    const duration = 2200;
    let raf = 0;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        // Hold puis exit
        setTimeout(() => setPhase("exiting"), 250);
        setTimeout(() => {
          setPhase("done");
          document.body.style.overflow = "";
        }, 250 + 1200);
      }
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  if (enabled === null || phase === "done") return null;

  const wordmark = "VASSEUR · AUBRY · ROUSSEL";

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] bg-foreground text-background pointer-events-none transition-[clip-path,opacity] duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "exiting" ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0_0_0_0)]"
      }`}
      style={{ willChange: "clip-path" }}
    >
      {/* Sceau central qui s'imprime via stroke-dashoffset */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          className="text-accent-light/80"
          style={{ opacity: progress / 100 }}
        >
          {/* Cercle extérieur — printed via dasharray */}
          <circle
            cx="90"
            cy="90"
            r="86"
            strokeDasharray="540"
            strokeDashoffset={540 - (540 * progress) / 100}
            style={{ transition: "stroke-dashoffset 80ms linear" }}
          />
          <circle
            cx="90"
            cy="90"
            r="72"
            strokeDasharray="2 4"
            strokeDashoffset={-(progress * 2)}
            style={{ transition: "stroke-dashoffset 80ms linear" }}
          />
          <circle
            cx="90"
            cy="90"
            r="50"
            strokeDasharray="314"
            strokeDashoffset={314 - (314 * progress) / 100}
            style={{
              transition: "stroke-dashoffset 80ms linear",
              transitionDelay: "120ms",
            }}
          />

          {/* Texte VAR au centre — apparaît à 60%+ */}
          <text
            x="90"
            y="86"
            fontFamily="var(--font-fraunces, serif)"
            fontSize="22"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            letterSpacing="3"
            style={{
              opacity: Math.max(0, (progress - 60) / 40),
              transition: "opacity 200ms ease-out",
            }}
          >
            VAR
          </text>
          <text
            x="90"
            y="106"
            fontFamily="var(--font-inter, sans-serif)"
            fontSize="6"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            letterSpacing="1.5"
            style={{
              opacity: Math.max(0, (progress - 80) / 20),
              transition: "opacity 200ms ease-out",
            }}
          >
            EST. 1987
          </text>
        </svg>
      </div>

      {/* Compteur bas-gauche */}
      <div className="absolute bottom-10 left-10 lg:bottom-14 lg:left-14">
        <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-3">
          Chargement
        </p>
        <p
          className="font-serif text-7xl lg:text-9xl text-background tabular leading-none tracking-[-0.03em]"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {String(progress).padStart(2, "0")}
        </p>
      </div>

      {/* Wordmark bas-droite — reveal lettre par lettre */}
      <div className="absolute bottom-12 right-10 lg:bottom-16 lg:right-14 hidden sm:block max-w-[280px] text-right">
        <p className="text-[10px] uppercase tracking-[0.32em] text-background/50 mb-3">
          Étude notariale · Lyon presqu'île
        </p>
        <p className="font-serif text-base lg:text-lg text-background tracking-[0.18em]">
          {wordmark.split("").map((char, i) => {
            const charProgress = (progress / 100) * (wordmark.length + 5);
            const visible = i < charProgress - 5;
            return (
              <span
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 200ms ease-out",
                }}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>

      {/* Filet décoratif top */}
      <div className="absolute top-10 left-10 right-10">
        <div
          className="h-px bg-accent-light/40"
          style={{
            transformOrigin: "left center",
            transform: `scaleX(${progress / 100})`,
            transition: "transform 80ms linear",
          }}
        />
      </div>
    </div>
  );
}
