"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — pattern Awwwards.
 *
 * Suit le curseur avec lerp, morphe selon le contexte de hover :
 * - Défaut : petit cercle 10px
 * - Auto link/button : ring 44px avec flèche
 * - data-cursor='lire' : pill 'LIRE →'
 * - data-cursor='ouvrir' : pill 'OUVRIR →'
 * - data-cursor='agrandir' : pill 'AGRANDIR →'
 *
 * Désactivé sur touch + reduced-motion + pointer:coarse.
 */

type CursorVariant = "default" | "link" | "lire" | "ouvrir" | "agrandir" | "hidden";

const LABELS: Record<Exclude<CursorVariant, "default" | "hidden" | "link">, string> = {
  lire: "LIRE",
  ouvrir: "OUVRIR",
  agrandir: "AGRANDIR",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable sur touch / reduced-motion / coarse pointer
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!fine || reduced || isTouch) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;
    let firstMove = false;

    const detectVariant = (target: HTMLElement | null): CursorVariant => {
      let el: HTMLElement | null = target;
      let depth = 0;
      while (el && el !== document.body && depth < 8) {
        const data = el.getAttribute?.("data-cursor");
        if (data) return data as CursorVariant;
        const tag = el.tagName?.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") return "hidden";
        if (tag === "a" || tag === "button") return "link";
        el = el.parentElement;
        depth++;
      }
      return "default";
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!firstMove) {
        firstMove = true;
        setVisible(true);
      }
      const detected = detectVariant(e.target as HTMLElement);
      setVariant((prev) => (prev === detected ? prev : detected));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      const el = cursorRef.current;
      if (el) {
        currentX += (targetX - currentX) * 0.24;
        currentY += (targetY - currentY) * 0.24;
        el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
    // ⚠️ Empty deps — l'effet se monte UNE seule fois.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const isHidden = variant === "hidden" || !visible;
  const isPill = variant === "lire" || variant === "ouvrir" || variant === "agrandir";
  const isLink = variant === "link";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[200] pointer-events-none"
      style={{
        willChange: "transform",
        opacity: isHidden ? 0 : 1,
        transition: "opacity 0.25s ease-out",
      }}
    >
      <div
        className="flex items-center justify-center bg-foreground text-background rounded-full transition-[width,height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg shadow-foreground/20"
        style={{
          width: isPill ? "120px" : isLink ? "44px" : "12px",
          height: isPill ? "44px" : isLink ? "44px" : "12px",
        }}
      >
        {isPill && (
          <span className="font-serif text-[11px] tracking-[0.18em] uppercase whitespace-nowrap">
            {LABELS[variant as keyof typeof LABELS]}
            <span className="ml-1.5">→</span>
          </span>
        )}
        {isLink && <span className="text-[14px] leading-none">→</span>}
      </div>
    </div>
  );
}
