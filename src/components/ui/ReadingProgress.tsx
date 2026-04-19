"use client";

import { useEffect, useRef } from "react";

/**
 * Barre de progression de lecture — fine ligne en haut.
 * Suit le scroll de la page (ou d'un élément cible si targetSelector fourni).
 */

interface ReadingProgressProps {
  targetSelector?: string;
  className?: string;
}

export default function ReadingProgress({
  targetSelector,
  className = "",
}: ReadingProgressProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const target = targetSelector
      ? (document.querySelector(targetSelector) as HTMLElement | null)
      : null;

    const update = () => {
      let progress = 0;
      if (target) {
        const rect = target.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        progress = Math.max(0, Math.min(1, scrolled / total));
      } else {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      }
      bar.style.transform = `scaleX(${progress})`;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [targetSelector]);

  return (
    <div
      ref={barRef}
      className={`reading-progress ${className}`}
      style={{ width: "100%", transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
