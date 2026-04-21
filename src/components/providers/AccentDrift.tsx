"use client";

import { useEffect } from "react";

/**
 * Accent drift — la teinte d'accent (or terni) dérive subtilement au scroll.
 *
 * Pattern Awwwards : narration chromatique. Le doré chaud évolue vers
 * un bronze plus profond à mesure qu'on s'enfonce dans le site,
 * puis revient au cuivre légèrement plus rosé en fin de page.
 *
 * Update via CSS variables (--accent + --accent-text) avec rAF throttle.
 * Désactivé sur reduced-motion (palette statique).
 */

// Étapes de teinte au long du scroll (R, G, B)
const ACCENT_STOPS = [
  { at: 0.0, accent: [184, 153, 104], ink: [130, 102, 56] },   // #B89968 / #826638 - or terni initial
  { at: 0.35, accent: [176, 138, 88], ink: [122, 92, 48] },    // #B08A58 / #7A5C30 - bronze
  { at: 0.65, accent: [184, 145, 96], ink: [128, 96, 52] },    // #B89160 / #806034 - copper
  { at: 1.0, accent: [196, 156, 110], ink: [136, 104, 60] },   // #C49C6E / #88683C - cuivre rosé
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function interpolateColor(progress: number): { accent: string; ink: string } {
  // Trouve les 2 stops adjacents
  let i = 0;
  while (i < ACCENT_STOPS.length - 1 && ACCENT_STOPS[i + 1].at < progress) i++;
  const a = ACCENT_STOPS[i];
  const b = ACCENT_STOPS[Math.min(i + 1, ACCENT_STOPS.length - 1)];
  const range = b.at - a.at;
  const t = range > 0 ? (progress - a.at) / range : 0;
  const accent = [
    Math.round(lerp(a.accent[0], b.accent[0], t)),
    Math.round(lerp(a.accent[1], b.accent[1], t)),
    Math.round(lerp(a.accent[2], b.accent[2], t)),
  ];
  const ink = [
    Math.round(lerp(a.ink[0], b.ink[0], t)),
    Math.round(lerp(a.ink[1], b.ink[1], t)),
    Math.round(lerp(a.ink[2], b.ink[2], t)),
  ];
  return {
    accent: `rgb(${accent.join(", ")})`,
    ink: `rgb(${ink.join(", ")})`,
  };
}

export default function AccentDrift() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;
      const { accent, ink } = interpolateColor(progress);
      document.documentElement.style.setProperty("--accent", accent);
      document.documentElement.style.setProperty("--accent-text", ink);
      raf = 0;
    };

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      // Reset to defaults
      document.documentElement.style.removeProperty("--accent");
      document.documentElement.style.removeProperty("--accent-text");
    };
  }, []);

  return null;
}
