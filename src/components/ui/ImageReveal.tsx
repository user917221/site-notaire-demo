"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wrapper qui anime l'enfant (image) avec clip-path inset au scroll.
 * Le clip-path passe de inset(8% 8%) à inset(0%) + scale 1.05 → 1.
 * Effet "la photo se dépose".
 */

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function ImageReveal({
  children,
  className = "",
  threshold = 0.2,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
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
    <div
      ref={ref}
      className={`image-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
