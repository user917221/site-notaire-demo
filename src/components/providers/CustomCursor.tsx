"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — pattern Awwwards.
 *
 * Suit le curseur avec lerp 0.18, morphe selon le contexte de hover :
 * - Défaut : petit cercle 8px
 * - data-cursor="link" : ring 36px avec flèche
 * - data-cursor="lire" : pill "LIRE →"
 * - data-cursor="ouvrir" : pill "OUVRIR →"
 * - data-cursor="agrandir" : pill "AGRANDIR ⌖"
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
    const isTouch = "ontouchstart" in window;
    if (!fine || reduced || isTouch) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);

      // Detect cursor variant via data-cursor attribute (walk up tree)
      let target: HTMLElement | null = e.target as HTMLElement;
      let detected: CursorVariant = "default";
      while (target && target !== document.body) {
        const data = target.getAttribute?.("data-cursor");
        if (data) {
          detected = data as CursorVariant;
          break;
        }
        // Fallback : input/textarea = hidden, links/buttons = link
        const tag = target.tagName?.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") {
          detected = "hidden";
          break;
        }
        if (tag === "a" || tag === "button") {
          detected = "link";
          break;
        }
        target = target.parentElement;
      }
      setVariant(detected);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.22;
      currentY += dy * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
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
  }, [visible]);

  if (!enabled) return null;

  const isHidden = variant === "hidden" || !visible;
  const isPill = variant === "lire" || variant === "ouvrir" || variant === "agrandir";
  const isLink = variant === "link";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference"
      style={{
        willChange: "transform",
        opacity: isHidden ? 0 : 1,
        transition: "opacity 0.2s ease-out",
      }}
    >
      <div
        className="flex items-center justify-center bg-background text-foreground rounded-full transition-[width,height,padding] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: isPill ? "120px" : isLink ? "44px" : "10px",
          height: isPill ? "44px" : isLink ? "44px" : "10px",
        }}
      >
        {isPill && (
          <span className="font-serif text-[11px] tracking-[0.18em] uppercase whitespace-nowrap">
            {LABELS[variant as keyof typeof LABELS]}
            <span className="ml-1.5">→</span>
          </span>
        )}
        {isLink && <span className="text-[14px]">→</span>}
      </div>
    </div>
  );
}
