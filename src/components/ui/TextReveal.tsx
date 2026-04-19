"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Reveal texte ligne-par-ligne avec mask + expo.out.
 * Pattern Awwwards SOTD : chaque ligne en overflow:hidden, span interne translate from 110% to 0.
 * Pour usage : passer le texte en enfants OU en `lines` prop pour un contrôle explicit.
 */

type TextRevealProps = {
  as?: ElementType;
  lines: string[];
  className?: string;
  lineClassName?: string;
  baseDelay?: number;
  staggerDelay?: number;
  italicLines?: number[];
  threshold?: number;
};

export default function TextReveal({
  as: Tag = "div",
  lines,
  className = "",
  lineClassName = "",
  baseDelay = 0,
  staggerDelay = 0.08,
  italicLines = [],
  threshold = 0.2,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`text-reveal-line ${visible ? "is-visible" : ""} ${lineClassName} ${
            italicLines.includes(i) ? "italic text-muted/85" : ""
          }`}
        >
          <span
            style={{
              animationDelay: visible
                ? `${baseDelay + i * staggerDelay}s`
                : undefined,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
