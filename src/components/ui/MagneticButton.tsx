"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

/**
 * Bouton/Link magnétique discret.
 * Au hover, l'élément est attiré vers le curseur (max 12-15px).
 * Désactivé sur touch et prefers-reduced-motion.
 */

interface MagneticButtonProps {
  href?: string;
  className?: string;
  children: ReactNode;
  strength?: number; // 0-1, défaut 0.25
  ariaLabel?: string;
  external?: boolean;
}

export default function MagneticButton({
  href,
  className = "",
  children,
  strength = 0.25,
  ariaLabel,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    // Skip si touch ou reduce-motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window;
    if (reduceMotion || isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove: EventListener = (e) => {
      const me = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (me.clientX - cx) * strength;
      const dy = (me.clientY - cy) * strength;
      const max = 15;
      targetX = Math.max(-max, Math.min(max, dx));
      targetY = Math.max(-max, Math.min(max, dy));
    };

    const onLeave: EventListener = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  const inner = (
    <span ref={innerRef} className="inline-flex items-center gap-3 will-change-transform">
      {children}
    </span>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref as React.RefObject<HTMLAnchorElement>}
          className={className}
          aria-label={ariaLabel}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={className}
        aria-label={ariaLabel}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={className}
      aria-label={ariaLabel}
      type="button"
    >
      {inner}
    </button>
  );
}
