"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gravity well — élément décoratif subtilement attiré par le curseur.
 *
 * Pattern Awwwards : non-clickable, pure ambiance. L'élément flotte vers
 * le curseur avec falloff progressif sur un rayon défini, puis revient
 * doucement à sa position d'origine.
 *
 * Désactivé sur touch + reduced-motion + pointer:coarse.
 */

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number; // 0-1, défaut 0.25
  radius?: number;   // px, défaut 280
}

export default function GravityWell({
  children,
  className = "",
  strength = 0.25,
  radius = 280,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window;
    if (!fine || reduced || isTouch) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let raf = 0;

    const onMove: EventListener = (e) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = me.clientX - cx;
      const dy = me.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        const falloff = 1 - dist / radius;
        // Smooth falloff (ease-out cubic)
        const eased = 1 - Math.pow(1 - falloff, 3);
        targetX = dx * strength * eased;
        targetY = dy * strength * eased;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength, radius]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
