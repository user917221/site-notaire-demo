"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "mask" | "scale";

type RevealProps = {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  children: ReactNode;
};

export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  threshold = 0.15,
  className = "",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const animClass = visible ? `animate-reveal-${variant}` : "reveal-initial";
  const combinedClass = `${animClass} ${className}`.trim();

  return (
    <Tag
      ref={ref}
      className={combinedClass}
      style={{
        animationDelay: visible ? `${delay}s` : undefined,
        animationDuration: visible ? `${duration}s` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
